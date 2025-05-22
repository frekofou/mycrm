export default {
    THEME_DEFAULT: {
        stripe: {},
        night: {},
        flat: {},
        none: {},
        minimal: {
            variables: {
                fontFamily: '"Gill Sans", sans-serif',
                fontLineHeight: '1.5',
                borderRadius: '10px',
                colorBackground: '#F6F8FA',
                colorPrimaryText: '#262626',
            },
            rules: {
                '.Block': { backgroundColor: 'var(--colorBackground)', boxShadow: 'none', padding: '12px' },
                '.Input': { padding: '12px' },
                '.Input:disabled, .Input--invalid:disabled': { color: 'lightgray' },
                '.Tab': { padding: '10px 12px 8px 12px', border: 'none' },
                '.Tab:hover': {
                    border: 'none',
                    boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)',
                },
                '.Tab--selected, .Tab--selected:focus, .Tab--selected:hover': {
                    border: 'none',
                    backgroundColor: '#fff',
                    boxShadow:
                        '0 0 0 1.5px var(--colorPrimaryText), 0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)',
                },
                '.Label': { fontWeight: '500' },
            },
        },
        bubblegum: {
            variables: {
                fontWeightNormal: '500',
                borderRadius: '2px',
                colorBackground: 'white',
                colorPrimary: '#DF1B41',
                colorPrimaryText: 'white',
                spacingGridRow: '15px',
            },
            rules: {
                '.Label': { marginBottom: '6px' },
                '.Tab, .Input, .Block': { boxShadow: '0px 3px 10px rgba(18, 42, 66, 0.08)', padding: '12px' },
            },
        },
        'ninety-five': {
            variables: {
                fontFamily: 'Verdana',
                fontLineHeight: '1.5',
                borderRadius: '0',
                colorBackground: '#dfdfdf',
            },
            rules: {
                '.Input': {
                    backgroundColor: '#ffffff',
                    boxShadow:
                        'inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080',
                },
                '.Input--invalid': {
                    color: '#DF1B41',
                },
                '.Tab, .Block': {
                    boxShadow:
                        'inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf',
                },
                '.Tab:hover': {
                    backgroundColor: '#eee',
                },
                '.Tab--selected, .Tab--selected:focus, .Tab--selected:hover': {
                    backgroundColor: '#ccc',
                },
            },
        },
        'dark-blue': {
            variables: {
                fontFamily: 'Sohne, system-ui, sans-serif',
                fontWeightNormal: '500',
                borderRadius: '8px',
                colorBackground: '#0A2540',
                colorPrimary: '#EFC078',
                colorPrimaryText: '#1A1B25',
                colorText: 'white',
                colorTextSecondary: 'white',
                colorTextPlaceholder: '#727F96',
                colorIconTab: 'white',
                colorLogo: 'dark',
            },
            rules: {
                '.Input, .Block': { backgroundColor: 'transparent', border: '1.5px solid var(--colorPrimary)' },
            },
        },
    },
};
