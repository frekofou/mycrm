
const ACCESS_COOKIE_NAME = 'ww-auth-access-token';
const PENDING_PROVIDER_LOGIN = 'ww-auth-xano-provider-login';

export default {
    xanoManager: null,
    /*=============================================m_ÔÔ_m=============================================\
        Plugin API
    \================================================================================================*/
    async _onLoad(settings) {
    },
    async _initAuth() {
        const pendingLogin = window.vm.config.globalProperties.$cookie.getCookie(PENDING_PROVIDER_LOGIN);
        const accessToken = window.vm.config.globalProperties.$cookie.getCookie(ACCESS_COOKIE_NAME);
        wwLib.wwVariable.updateValue(`${this.id}-accessToken`, accessToken);
        if (accessToken) {
            await this.fetchUser();
            wwLib.wwPlugins.xano?.xanoClient?.setAuthToken(accessToken);
            wwLib.wwPlugins.xano?.xanoClient?.setRealtimeAuthToken(accessToken);
            wwLib.wwPlugins.xano?.xanoClient?.realtimeReconnect();
        }
        if (pendingLogin) await this.continueLoginProvider(pendingLogin);
    },
    /*=============================================m_ÔÔ_m=============================================\
        Editor API
    \================================================================================================*/
    /*=============================================m_ÔÔ_m=============================================\
        Xano Auth API
    \================================================================================================*/
    storeToken(accessToken) {
        window.vm.config.globalProperties.$cookie.setCookie(ACCESS_COOKIE_NAME, accessToken, {
            expire: '1y',
            secure: true,
        });
        wwLib.wwVariable.updateValue(`${this.id}-accessToken`, accessToken);
        wwLib.wwPlugins.xano?.xanoClient?.setAuthToken(accessToken);
        wwLib.wwPlugins.xano?.xanoClient?.setRealtimeAuthToken(accessToken);
        wwLib.wwPlugins.xano?.xanoClient?.realtimeReconnect();
    },
    removeToken() {
        window.vm.config.globalProperties.$cookie.removeCookie(ACCESS_COOKIE_NAME);
        wwLib.wwVariable.updateValue(`${this.id}-accessToken`, null);
        wwLib.wwPlugins.xano?.xanoClient?.setAuthToken(null);
        wwLib.wwPlugins.xano?.xanoClient?.setRealtimeAuthToken(null);
        wwLib.wwPlugins.xano?.xanoClient?.realtimeReconnect();
    },
    async fetchUser({ headers, withCredentials = false } = {}) {
        const { getMeEndpoint } = this.settings.publicData;
        const authToken = wwLib.wwVariable.getValue(`${this.id}-accessToken`);

        if (!getMeEndpoint) throw new Error('No API Group Base URL defined.');

        try {
            const { data: user } = await this.request(getMeEndpoint, {
                headers: buildXanoHeaders({ authToken }, headers),
                withCredentials,
            });
            wwLib.wwVariable.updateValue(`${this.id}-user`, user);
            wwLib.wwVariable.updateValue(`${this.id}-isAuthenticated`, true);
            return user;
        } catch (err) {
            this.logout();
            throw err;
        }
    },
    async login({ headers, withCredentials = false, parameters = null, body = null, email = null, password = null }) {
        const { loginEndpoint } = this.settings.publicData;

        if (!loginEndpoint) throw new Error('No API Group Base URL defined.');

        // support old email + password fixed parameters
        const data = body || { email, password };

        try {
            const {
                data: { authToken },
            } = await await this.request(loginEndpoint, {
                method: 'post',
                data,
                params: parameters,
                headers: buildXanoHeaders({}, headers),
                withCredentials,
            });
            this.storeToken(authToken);
            return await this.fetchUser();
        } catch (err) {
            this.logout();
            throw err;
        }
    },
    async loginProvider({ headers, withCredentials = false, provider: providerName, type, redirectPage }) {
        try {
            const provider = this.settings.publicData.socialProviders[providerName];
            if (!provider) return;
            const websiteId = wwLib.wwWebsiteData.getInfo().id;
            const redirectUrl = wwLib.manager
                ? `${window.location.origin}/${websiteId}/${redirectPage}`
                : `${window.location.origin}${wwLib.wwPageHelper.getPagePath(redirectPage)}`;
            const endpoint = resolveOauthInitEndpoint(provider.name);

            const result = await this.request(`${provider.api}/oauth/${provider.name.split('-')[0]}/${endpoint}`, {
                params: {
                    redirect_uri: redirectUrl,
                },
                headers: buildXanoHeaders({}, headers),
            });
            window.vm.config.globalProperties.$cookie.setCookie(PENDING_PROVIDER_LOGIN, {
                provider,
                type,
                redirectUrl,
                headers: buildXanoHeaders({}, headers),
                withCredentials,
            });
            window.open(parseAuthUrl(provider.name, result.data), '_self');
        } catch (err) {
            window.vm.config.globalProperties.$cookie.removeCookie(PENDING_PROVIDER_LOGIN);
            this.logout();
            throw err;
        }
    },
    async continueLoginProvider({ headers, withCredentials = false, provider, type, redirectUrl }) {
        try {
            const codePayload = parseAuthCode(wwLib.globalContext.browser.query);
            if (!codePayload) throw new Error('No code provided for social login');

            const result = await this.request(`${provider.api}/oauth/${provider.name.split('-')[0]}/${type}`, {
                params: {
                    ...codePayload,
                    redirect_uri: redirectUrl,
                },
                headers,
                withCredentials,
            });
            window.vm.config.globalProperties.$cookie.removeCookie(PENDING_PROVIDER_LOGIN);
            this.storeToken(parseAuthToken(provider.name, result.data));
            return await this.fetchUser();
        } catch (error) {
            window.vm.config.globalProperties.$cookie.removeCookie(PENDING_PROVIDER_LOGIN);
            throw error;
        }
    },
    async signUp({ headers, withCredentials = false, body, parameters, email, password, name }) {
        const { signupEndpoint } = this.settings.publicData;

        if (!signupEndpoint) throw new Error('No API Group Base URL defined.');

        // support old email + password fixed parameters
        const data = body || { email, password, name };

        try {
            const {
                data: { authToken },
            } = await this.request(signupEndpoint, {
                method: 'post',
                data,
                params: parameters,
                headers: buildXanoHeaders({}, headers),
                withCredentials,
            });
            this.storeToken(authToken);
            return await this.fetchUser();
        } catch (err) {
            this.logout();
            throw err;
        }
    },
    logout() {
        this.removeToken();
        wwLib.wwVariable.updateValue(`${this.id}-user`, null);
        wwLib.wwVariable.updateValue(`${this.id}-isAuthenticated`, false);
    },
    storeAuthToken({ authToken }) {
        this.storeToken(authToken);
    },
    async request(to, config) {
        config.url = this.resolveUrl(to);
        config.withCredentials = this.settings.publicData.withCredentials || config.withCredentials;
        return axios(config);
    },
    resolveUrl(url) {
        if (!url) return null;
        const _url = new URL(url);
        _url.hostname = this.settings.publicData.customDomain || this.settings.publicData.domain || _url.hostname;

        return _url.href;
    },
};

function resolveOauthInitEndpoint(provider) {
    switch (provider) {
        case 'twitter-oauth':
            return 'request_token';
        default:
            return 'init';
    }
}

function parseAuthCode(query) {
    if (query.code) return { code: query.code };
    else if (query.oauth_token) return { oauth_token: query.oauth_token };
    else if (query.oauth_verifier) return { oauth_verifier: query.oauth_verifier };
    else return null;
}
function parseAuthToken(provider, data) {
    switch (provider) {
        case 'twitter-oauth':
            return data.authToken;
        default:
            return data.token;
    }
}
function parseAuthUrl(provider, data) {
    switch (provider) {
        case 'github-oauth':
            return data.github_authurl;
        case 'facebook-oauth':
            return data.facebook_authurl;
        case 'linkedin-oauth':
            return data;
        default:
            return data.authUrl;
    }
}
function getCurrentDataSource() {
    const settings = wwLib.wwPlugins.xanoAuth.settings;
    switch (wwLib.globalContext.browser.environment) {
        case 'editor':
            return settings.publicData.xDataSourceEditor;
        case 'preview':
            return settings.publicData.xDataSourceProd;
        case 'staging':
            return settings.publicData.xDataSourceStaging;
        case 'production':
            return settings.publicData.xDataSourceProd;
        default:
            return null;
    }
}

function getCurrentBranch() {
    const settings = wwLib.wwPlugins.xanoAuth.settings;
    switch (wwLib.globalContext.browser.environment) {
        case 'editor':
            return settings.publicData.xBranchEditor;
        case 'preview':
            return settings.publicData.xBranchProd;
        case 'staging':
            return settings.publicData.xBranchStaging;
        case 'production':
            return settings.publicData.xBranchProd;
        default:
            return null;
    }
}

function getGlobalHeaders() {
    return wwLib.wwFormula.getValue(wwLib.wwPlugins.xanoAuth.settings.publicData.globalHeaders);
}

function buildXanoHeaders(
    {
        xDataSource = getCurrentDataSource(),
        xBranch = getCurrentBranch(),
        authToken,
        dataType,
        globalHeaders = getGlobalHeaders(),
    },
    customHeaders = []
) {
    return {
        ...(xDataSource ? { 'X-Data-Source': xDataSource } : {}),
        ...(xBranch ? { 'X-Branch': xBranch } : {}),
        ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
        ...(dataType ? { 'Content-Type': dataType } : {}),
        ...(Array.isArray(globalHeaders) ? globalHeaders : [])
            .filter(header => !!header && !!header.key)
            .reduce((curr, next) => ({ ...curr, [next.key]: next.value }), {}),
        ...(Array.isArray(customHeaders) ? customHeaders : [])
            .filter(header => !!header && !!header.key)
            .reduce((curr, next) => ({ ...curr, [next.key]: next.value }), {}),
    };
}
