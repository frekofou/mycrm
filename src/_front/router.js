import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"f2d13c65-d627-4543-8e61-30aa8a41902c","homePageId":"842bde81-59ec-4420-af5a-a99d63117548","authPluginId":"f5856798-485d-47be-b433-d43d771c64e1","baseTag":{},"defaultTheme":"dark","langs":[{"lang":"fr","default":true}],"background":{},"workflows":[],"pages":[{"id":"842bde81-59ec-4420-af5a-a99d63117548","linkId":"842bde81-59ec-4420-af5a-a99d63117548","name":"dashboard","folder":"app/pages/","paths":{"fr":"airbnb","default":"airbnb"},"langs":["fr"],"cmsDataSetPath":null,"sections":[{"uid":"9da37dc9-face-4b15-8a04-76c361ef1222","sectionTitle":"header","linkId":"f5e95a36-821f-4055-8ff4-f0cb9bfb1c3a"},{"uid":"e18707de-936c-47a5-9584-2edaae118b2f","sectionTitle":"sidemenu","linkId":"e77d0db3-82fb-43f9-a7da-426f654b7299"},{"uid":"ab9a8d3a-5733-4002-b009-b30f854794d3","sectionTitle":"content header","linkId":"53506da4-63f0-44d0-b079-b48e7f016ba2"},{"uid":"26dc7a93-9ce5-4a58-b587-ca79aaf7af4f","sectionTitle":"content (do not link)","linkId":"92017845-7e5a-42b2-9055-de087ca700b9"},{"uid":"51550a63-d362-45a8-9f0d-4dc7cd0eebc7","sectionTitle":"alerting","linkId":"a0e67d90-f730-4e9e-9efd-95e63c17f400"},{"uid":"aa525fbe-9255-4412-b4b8-7502df9bb6fc","sectionTitle":"right-sidepanel","linkId":"7f1f63ce-6d7f-4ab6-abbb-02d237d4dcef"},{"uid":"b3bf1341-e311-48c6-9b35-b1e7cabc02f7","sectionTitle":"stripe popin","linkId":"fdb46e40-0c4a-43cc-96b7-8a0da6cecaf6"},{"uid":"18541d27-f4fc-47b0-85f8-a93741b9101e","sectionTitle":"user-profile","linkId":"437cc1d1-e72f-45c2-a1b7-a30e8f15e63b"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"c0dd9a47-1d55-4f57-8524-48953a0ea77f","linkId":"c0dd9a47-1d55-4f57-8524-48953a0ea77f","name":"temp","folder":null,"paths":{"fr":"temp","default":"temp"},"langs":["fr"],"cmsDataSetPath":null,"sections":[{"uid":"9bd818e0-8d23-403b-b8c8-615551aa167b","sectionTitle":"sidemenu","linkId":"9ed16374-fb9c-4463-ab24-f48af9bdd36d"},{"uid":"21744dc0-a5dd-4f80-83ec-d664f49291c5","sectionTitle":"alerting","linkId":"d96a904f-76a4-4a6b-9d6c-a6b1f0efc2f6"},{"uid":"2cfcec09-ff6b-4f01-9aaf-6bd43a79d99c","sectionTitle":"change-password","linkId":"16465022-e0f4-4acc-b115-9634654071de"},{"uid":"fac9a1e4-53fa-4db2-b10a-b79ac9b38e04","sectionTitle":"contacts grid","linkId":"690f6285-6d2e-4d75-856a-c1f1cc90bfa2"},{"uid":"518022df-831b-485c-9cb1-3a723ed16a90","sectionTitle":"forgot password","linkId":"f756e181-558a-4f8f-bc01-4daf2ca72705"},{"uid":"f791a7ec-dca7-464f-872f-6550c2f63a33","sectionTitle":"header","linkId":"56f75ab7-0103-4c8f-923f-57d6ddb68160"},{"uid":"27b6d7f5-7f91-44f8-b423-c6cb96e50ab2","sectionTitle":"header-contact-directory","linkId":"3c3cd349-7feb-41ab-93f6-761597567d62"},{"uid":"b5cb1982-604f-4859-935d-4dfc3de5e540","sectionTitle":"header-kpi","linkId":"62225180-df48-4cf1-b050-aa8021df5eb3"},{"uid":"60955b62-f7d3-4cb4-9a11-b2b92830b4da","sectionTitle":"header-product-list","linkId":"10aeb1af-84a3-4684-bfbd-6869d875ba6e"},{"uid":"efe6ef48-2ec5-490e-b7dd-d8ffc7b03b1a","sectionTitle":"kpis","linkId":"21ebc848-6eea-4774-9ab1-efa6488f0064"},{"uid":"4a60d986-11b1-4c9c-ab1d-22b3e2b4bf91","sectionTitle":"login page","linkId":"2c2859cc-3d33-404f-a863-1ad6bd61b5e1"},{"uid":"19477361-48cd-4088-bfc0-d6d84ee1d10a","sectionTitle":"main-content-graphs","linkId":"bc073a3d-7045-4fdb-9c40-34ed876136c6"},{"uid":"03718c8f-2872-4d02-ba04-6cc38c9a4606","sectionTitle":"product-list","linkId":"c6791883-7e1f-4b08-b176-e85034427103"},{"uid":"a436c63e-986e-4683-8155-5ff2247a95cf","sectionTitle":"right-sidepanel","linkId":"1667c720-fdc6-40eb-9753-f056d3c663ae"},{"uid":"14a2b7ac-461f-4400-bfec-04b092d6710e","sectionTitle":"signup","linkId":"c791021a-950a-4436-b74d-e55d34166647"},{"uid":"20c6339d-eb78-4a87-8396-5654ba429db1","sectionTitle":"stripe popin","linkId":"30dba4ba-26a3-4801-95ee-e8d42cacfd7e"},{"uid":"0d45ff36-4ddf-4506-a484-8c352a132e70","sectionTitle":"user-profile","linkId":"983e0e0f-00ce-40b8-9bc3-261ec5742544"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"52b1d0cb-4398-4a98-8375-18e50f080826","linkId":"52b1d0cb-4398-4a98-8375-18e50f080826","name":"login","folder":"app/pages/auth/","paths":{"fr":"login","default":"login"},"langs":["fr"],"cmsDataSetPath":null,"sections":[{"uid":"c0d671c3-7f55-4e7f-b127-63646f730565","sectionTitle":"login page","linkId":"6bacbd68-c13c-469f-9b1f-6de15f6a425c"},{"uid":"533070b3-fe29-40c2-abe9-1e3d8ab11f19","sectionTitle":"signup","linkId":"9694cbad-1260-4798-96f2-9c9d24a68702"},{"uid":"e4182d32-453d-4042-8fda-8c1ea701d850","sectionTitle":"forgot password","linkId":"821960d3-292a-4b14-b9a9-103c4d56f47f"},{"uid":"51550a63-d362-45a8-9f0d-4dc7cd0eebc7","sectionTitle":"alerting","linkId":"a0e67d90-f730-4e9e-9efd-95e63c17f400"},{"uid":"0b60f2ba-ef4e-4849-93af-0614789aab11","sectionTitle":"Alert","linkId":"54b33cba-5388-4468-a034-abd7f5f4c74a"},{"uid":"5e6097c4-f939-4af3-b643-77ecfa2624df","sectionTitle":"Alert","linkId":"f704af86-39a9-49b6-afcf-88dd5390c97b"}],"pageUserGroups":[],"title":{"fr":"MyCRM login"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"bf0145f0-8263-434b-900a-4dee84209b26","linkId":"bf0145f0-8263-434b-900a-4dee84209b26","name":"payment-failed","folder":"app/pages/payment/","paths":{"fr":"payment-failed","default":"payment-failed"},"langs":["fr"],"cmsDataSetPath":null,"sections":[{"uid":"9da37dc9-face-4b15-8a04-76c361ef1222","sectionTitle":"header","linkId":"f5e95a36-821f-4055-8ff4-f0cb9bfb1c3a"},{"uid":"e18707de-936c-47a5-9584-2edaae118b2f","sectionTitle":"sidemenu","linkId":"e77d0db3-82fb-43f9-a7da-426f654b7299"},{"uid":"aa525fbe-9255-4412-b4b8-7502df9bb6fc","sectionTitle":"right-sidepanel","linkId":"7f1f63ce-6d7f-4ab6-abbb-02d237d4dcef"},{"uid":"38b53e66-fae1-4f39-8a12-e2769f1ee1eb","sectionTitle":"Content header","linkId":"317a2ac9-2c82-42b1-a141-07a121d109fb"},{"uid":"56e32313-5a53-4a33-be5f-abee32375c96","sectionTitle":"Content (do not link)","linkId":"83665404-3bc7-4d93-81e7-74566a0fc32d"},{"uid":"b3bf1341-e311-48c6-9b35-b1e7cabc02f7","sectionTitle":"stripe popin","linkId":"fdb46e40-0c4a-43cc-96b7-8a0da6cecaf6"},{"uid":"18541d27-f4fc-47b0-85f8-a93741b9101e","sectionTitle":"user-profile","linkId":"437cc1d1-e72f-45c2-a1b7-a30e8f15e63b"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"27759bc9-05b3-46a9-8448-6091605a3e08","linkId":"27759bc9-05b3-46a9-8448-6091605a3e08","name":"reference","folder":"app/pages/configuration/","paths":{"fr":"reference","default":"reference"},"langs":["fr"],"cmsDataSetPath":null,"sections":[{"uid":"9da37dc9-face-4b15-8a04-76c361ef1222","sectionTitle":"header","linkId":"f5e95a36-821f-4055-8ff4-f0cb9bfb1c3a"},{"uid":"e18707de-936c-47a5-9584-2edaae118b2f","sectionTitle":"sidemenu","linkId":"e77d0db3-82fb-43f9-a7da-426f654b7299"},{"uid":"49397ffe-faa1-44a1-8424-feea8bd9bb83","sectionTitle":"Content header","linkId":"74cabeba-1a9e-483d-b596-db54ec669f22"},{"uid":"38e0be95-e6dc-4b11-89bc-7a08daf877e1","sectionTitle":"Content (do not link)","linkId":"e5246414-c4db-4023-98f2-ffb14bf29e81"},{"uid":"51550a63-d362-45a8-9f0d-4dc7cd0eebc7","sectionTitle":"alerting","linkId":"a0e67d90-f730-4e9e-9efd-95e63c17f400"},{"uid":"aa525fbe-9255-4412-b4b8-7502df9bb6fc","sectionTitle":"right-sidepanel","linkId":"7f1f63ce-6d7f-4ab6-abbb-02d237d4dcef"},{"uid":"18541d27-f4fc-47b0-85f8-a93741b9101e","sectionTitle":"user-profile","linkId":"437cc1d1-e72f-45c2-a1b7-a30e8f15e63b"},{"uid":"b3bf1341-e311-48c6-9b35-b1e7cabc02f7","sectionTitle":"stripe popin","linkId":"fdb46e40-0c4a-43cc-96b7-8a0da6cecaf6"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"0576bebd-92c2-4173-baf5-63a91152fb0f","linkId":"0576bebd-92c2-4173-baf5-63a91152fb0f","name":"payment-success","folder":"app/pages/payment/","paths":{"fr":"payment-success","default":"payment-success"},"langs":["fr"],"cmsDataSetPath":null,"sections":[{"uid":"9da37dc9-face-4b15-8a04-76c361ef1222","sectionTitle":"header","linkId":"f5e95a36-821f-4055-8ff4-f0cb9bfb1c3a"},{"uid":"e18707de-936c-47a5-9584-2edaae118b2f","sectionTitle":"sidemenu","linkId":"e77d0db3-82fb-43f9-a7da-426f654b7299"},{"uid":"aa525fbe-9255-4412-b4b8-7502df9bb6fc","sectionTitle":"right-sidepanel","linkId":"7f1f63ce-6d7f-4ab6-abbb-02d237d4dcef"},{"uid":"74133f9a-6fdc-4444-a591-cb77f3cac0a9","sectionTitle":"Content header","linkId":"6290cb60-36ad-4b05-a375-b8aa14ec88e0"},{"uid":"ab9a48d5-616b-47a4-8cb0-d03175e48428","sectionTitle":"Content (do not link)","linkId":"d85b03d6-5189-4723-bf76-bc5f9b179bae"},{"uid":"b3bf1341-e311-48c6-9b35-b1e7cabc02f7","sectionTitle":"stripe popin","linkId":"fdb46e40-0c4a-43cc-96b7-8a0da6cecaf6"},{"uid":"18541d27-f4fc-47b0-85f8-a93741b9101e","sectionTitle":"user-profile","linkId":"437cc1d1-e72f-45c2-a1b7-a30e8f15e63b"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"19e05354-cb0d-40c6-932a-682753e46003","linkId":"19e05354-cb0d-40c6-932a-682753e46003","name":"stripe-checkout-page","folder":"app/pages/payment/","paths":{"fr":"stripe_checkout_page","default":"stripe_checkout_page"},"langs":["fr"],"cmsDataSetPath":null,"sections":[],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"275dfc6b-3106-432f-a4c3-02f68977a641","linkId":"275dfc6b-3106-432f-a4c3-02f68977a641","name":"products-big-list","folder":"app/pages/business/","paths":{"fr":"products-big-list","default":"products-big-list"},"langs":["fr"],"cmsDataSetPath":null,"sections":[{"uid":"9da37dc9-face-4b15-8a04-76c361ef1222","sectionTitle":"header","linkId":"f5e95a36-821f-4055-8ff4-f0cb9bfb1c3a"},{"uid":"e18707de-936c-47a5-9584-2edaae118b2f","sectionTitle":"sidemenu","linkId":"e77d0db3-82fb-43f9-a7da-426f654b7299"},{"uid":"ed8ca220-741f-45fb-83b4-c3eba7b4953c","sectionTitle":"header-product-list","linkId":"cea81185-cbe6-4e61-8fbc-f4806b6a8efe"},{"uid":"3aad6f35-48b1-47c0-a9c2-53791b89607c","sectionTitle":"product-list","linkId":"27f7d963-b107-4787-af50-765720fe714c"},{"uid":"51550a63-d362-45a8-9f0d-4dc7cd0eebc7","sectionTitle":"alerting","linkId":"a0e67d90-f730-4e9e-9efd-95e63c17f400"},{"uid":"aa525fbe-9255-4412-b4b8-7502df9bb6fc","sectionTitle":"right-sidepanel","linkId":"7f1f63ce-6d7f-4ab6-abbb-02d237d4dcef"},{"uid":"18541d27-f4fc-47b0-85f8-a93741b9101e","sectionTitle":"user-profile","linkId":"437cc1d1-e72f-45c2-a1b7-a30e8f15e63b"},{"uid":"b3bf1341-e311-48c6-9b35-b1e7cabc02f7","sectionTitle":"stripe popin","linkId":"fdb46e40-0c4a-43cc-96b7-8a0da6cecaf6"}],"pageUserGroups":[{}],"title":{"fr":"MyCRM"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"b3e5f627-90c3-4224-81f9-cde7bae25e11","linkId":"b3e5f627-90c3-4224-81f9-cde7bae25e11","name":"payment-embedded","folder":"app/pages/payment/","paths":{"fr":"payment-embedded","default":"payment-embedded"},"langs":["fr"],"cmsDataSetPath":null,"sections":[{"uid":"9da37dc9-face-4b15-8a04-76c361ef1222","sectionTitle":"header","linkId":"f5e95a36-821f-4055-8ff4-f0cb9bfb1c3a"},{"uid":"e18707de-936c-47a5-9584-2edaae118b2f","sectionTitle":"sidemenu","linkId":"e77d0db3-82fb-43f9-a7da-426f654b7299"},{"uid":"aa525fbe-9255-4412-b4b8-7502df9bb6fc","sectionTitle":"right-sidepanel","linkId":"7f1f63ce-6d7f-4ab6-abbb-02d237d4dcef"},{"uid":"06f2b8cf-cadc-4410-b17f-3052b6eef5b8","sectionTitle":"Content header","linkId":"18322abb-453d-4a54-8bba-59d563db21a0"},{"uid":"cfd89409-40fa-4cfe-b45b-9ca2d8f965c7","sectionTitle":"Content (do not link)","linkId":"245759f4-c648-41b4-88da-368f4b101156"},{"uid":"b3bf1341-e311-48c6-9b35-b1e7cabc02f7","sectionTitle":"stripe popin","linkId":"fdb46e40-0c4a-43cc-96b7-8a0da6cecaf6"},{"uid":"18541d27-f4fc-47b0-85f8-a93741b9101e","sectionTitle":"user-profile","linkId":"437cc1d1-e72f-45c2-a1b7-a30e8f15e63b"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"9b7610f8-4194-4db2-a8df-c02e1c1cfd26","linkId":"9b7610f8-4194-4db2-a8df-c02e1c1cfd26","name":"companies-directory","folder":"app/pages/business/","paths":{"fr":"companies-directory","default":"companies-directory"},"langs":["fr"],"cmsDataSetPath":null,"sections":[{"uid":"9da37dc9-face-4b15-8a04-76c361ef1222","sectionTitle":"header","linkId":"f5e95a36-821f-4055-8ff4-f0cb9bfb1c3a"},{"uid":"e18707de-936c-47a5-9584-2edaae118b2f","sectionTitle":"sidemenu","linkId":"e77d0db3-82fb-43f9-a7da-426f654b7299"},{"uid":"6df124f8-5ad3-4235-807d-c51ebc3ff276","sectionTitle":"header-contact-directory","linkId":"fedec521-a297-42d8-9f2c-6649963bfc58"},{"uid":"900eb45d-4e15-4ce5-a3ce-c10b83a4c6e9","sectionTitle":"companies-list","linkId":"e16f725b-8f3a-4e2f-95f4-56d377660dec"},{"uid":"51550a63-d362-45a8-9f0d-4dc7cd0eebc7","sectionTitle":"alerting","linkId":"a0e67d90-f730-4e9e-9efd-95e63c17f400"},{"uid":"aa525fbe-9255-4412-b4b8-7502df9bb6fc","sectionTitle":"right-sidepanel","linkId":"7f1f63ce-6d7f-4ab6-abbb-02d237d4dcef"},{"uid":"18541d27-f4fc-47b0-85f8-a93741b9101e","sectionTitle":"user-profile","linkId":"437cc1d1-e72f-45c2-a1b7-a30e8f15e63b"},{"uid":"b3bf1341-e311-48c6-9b35-b1e7cabc02f7","sectionTitle":"stripe popin","linkId":"fdb46e40-0c4a-43cc-96b7-8a0da6cecaf6"}],"pageUserGroups":[{},{"userGroup":{"id":"a8571244-3062-4141-9b9a-54f2e5f52cd2","roles":[{"value":"9e865cfc-2b0d-4408-97ef-1177920a085c"}]}},{"userGroup":{"id":"a8571244-3062-4141-9b9a-54f2e5f52cd2","roles":[{"value":"9e865cfc-2b0d-4408-97ef-1177920a085c"}]}}],"title":{"fr":"MyCRM"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"738388d5-0ede-40c5-add1-048e274d32bb","linkId":"738388d5-0ede-40c5-add1-048e274d32bb","name":"products-list","folder":"app/pages/business/","paths":{"fr":"products-list","default":"products-list"},"langs":["fr"],"cmsDataSetPath":null,"sections":[{"uid":"9da37dc9-face-4b15-8a04-76c361ef1222","sectionTitle":"header","linkId":"f5e95a36-821f-4055-8ff4-f0cb9bfb1c3a"},{"uid":"e18707de-936c-47a5-9584-2edaae118b2f","sectionTitle":"sidemenu","linkId":"e77d0db3-82fb-43f9-a7da-426f654b7299"},{"uid":"be38767d-bea4-4495-8b1a-ecdbe1f8905f","sectionTitle":"header-product-list","linkId":"72246b24-18cf-478f-a703-507464504357"},{"uid":"40680644-edde-4a4e-a385-606317c9ba13","sectionTitle":"product-list","linkId":"cfddbb66-60f7-4d7b-a7ab-4b582d454fb8"},{"uid":"51550a63-d362-45a8-9f0d-4dc7cd0eebc7","sectionTitle":"alerting","linkId":"a0e67d90-f730-4e9e-9efd-95e63c17f400"},{"uid":"aa525fbe-9255-4412-b4b8-7502df9bb6fc","sectionTitle":"right-sidepanel","linkId":"7f1f63ce-6d7f-4ab6-abbb-02d237d4dcef"},{"uid":"18541d27-f4fc-47b0-85f8-a93741b9101e","sectionTitle":"user-profile","linkId":"437cc1d1-e72f-45c2-a1b7-a30e8f15e63b"},{"uid":"b3bf1341-e311-48c6-9b35-b1e7cabc02f7","sectionTitle":"stripe popin","linkId":"fdb46e40-0c4a-43cc-96b7-8a0da6cecaf6"}],"pageUserGroups":[{}],"title":{"fr":"MyCRM"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"b3aa5b87-14d2-45e0-a5d4-38b92660fa9b","linkId":"b3aa5b87-14d2-45e0-a5d4-38b92660fa9b","name":"reference-layout","folder":"app/pages/configuration/","paths":{"fr":"reference-copy","default":"reference-copy"},"langs":["fr"],"cmsDataSetPath":null,"sections":[{"uid":"30ecbbb5-a86c-4b72-9b1c-1a01a8fe4720","sectionTitle":"Section","linkId":"a0991970-0de5-4c9f-ac73-5170a797fe35"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"e5479431-bf6b-421a-8468-84e89eb7dbe8","linkId":"e5479431-bf6b-421a-8468-84e89eb7dbe8","name":"contacts-directory","folder":"app/pages/business/","paths":{"fr":"contacts-directory","default":"contacts-directory"},"langs":["fr"],"cmsDataSetPath":null,"sections":[{"uid":"9da37dc9-face-4b15-8a04-76c361ef1222","sectionTitle":"header","linkId":"f5e95a36-821f-4055-8ff4-f0cb9bfb1c3a"},{"uid":"e18707de-936c-47a5-9584-2edaae118b2f","sectionTitle":"sidemenu","linkId":"e77d0db3-82fb-43f9-a7da-426f654b7299"},{"uid":"2b09e832-e2ed-4446-a937-b4b6dc0d3b13","sectionTitle":"header-contact-directory","linkId":"03e40bc8-1a04-4d01-90a5-0801d2386e17"},{"uid":"9bd125d6-6980-4df3-8b63-8c0436cc9f9b","sectionTitle":"contacts grid","linkId":"176562b4-0d91-4e4e-ba4e-2caf77accbf7"},{"uid":"51550a63-d362-45a8-9f0d-4dc7cd0eebc7","sectionTitle":"alerting","linkId":"a0e67d90-f730-4e9e-9efd-95e63c17f400"},{"uid":"aa525fbe-9255-4412-b4b8-7502df9bb6fc","sectionTitle":"right-sidepanel","linkId":"7f1f63ce-6d7f-4ab6-abbb-02d237d4dcef"},{"uid":"18541d27-f4fc-47b0-85f8-a93741b9101e","sectionTitle":"user-profile","linkId":"437cc1d1-e72f-45c2-a1b7-a30e8f15e63b"},{"uid":"b3bf1341-e311-48c6-9b35-b1e7cabc02f7","sectionTitle":"stripe popin","linkId":"fdb46e40-0c4a-43cc-96b7-8a0da6cecaf6"}],"pageUserGroups":[{}],"title":{"fr":"MyCRM"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"61cf8f57-44ac-42d7-8201-090f6fc14c08","linkId":"61cf8f57-44ac-42d7-8201-090f6fc14c08","name":"kpis","folder":"app/pages/business/","paths":{"fr":"kpis","default":"kpis"},"langs":["fr"],"cmsDataSetPath":null,"sections":[{"uid":"9da37dc9-face-4b15-8a04-76c361ef1222","sectionTitle":"header","linkId":"f5e95a36-821f-4055-8ff4-f0cb9bfb1c3a"},{"uid":"e18707de-936c-47a5-9584-2edaae118b2f","sectionTitle":"sidemenu","linkId":"e77d0db3-82fb-43f9-a7da-426f654b7299"},{"uid":"52a189cd-a683-4ccd-bccc-da90122f01f9","sectionTitle":"header-kpi","linkId":"6877ddcc-f098-4025-a391-3c2caa1acec4"},{"uid":"3dead2e6-a8da-4fc6-8ca0-c9ddfcc34121","sectionTitle":"kpis","linkId":"886457f8-5814-4d18-a8e5-83ac84f06fee"},{"uid":"aa525fbe-9255-4412-b4b8-7502df9bb6fc","sectionTitle":"right-sidepanel","linkId":"7f1f63ce-6d7f-4ab6-abbb-02d237d4dcef"},{"uid":"18541d27-f4fc-47b0-85f8-a93741b9101e","sectionTitle":"user-profile","linkId":"437cc1d1-e72f-45c2-a1b7-a30e8f15e63b"},{"uid":"b3bf1341-e311-48c6-9b35-b1e7cabc02f7","sectionTitle":"stripe popin","linkId":"fdb46e40-0c4a-43cc-96b7-8a0da6cecaf6"},{"uid":"51550a63-d362-45a8-9f0d-4dc7cd0eebc7","sectionTitle":"alerting","linkId":"a0e67d90-f730-4e9e-9efd-95e63c17f400"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"2c4ddd2a-d646-4b68-999b-933a4f83c590","linkId":"2c4ddd2a-d646-4b68-999b-933a4f83c590","name":"magic-login","folder":"app/pages/auth/","paths":{"fr":"auth/magic-login","default":"auth/magic-login"},"langs":["fr"],"cmsDataSetPath":null,"sections":[{"uid":"15af0f9d-9588-438a-91c5-2a372eb4359d","sectionTitle":"change-password","linkId":"2097cb0e-6da1-4288-a3d7-b734ae407d5c"}],"pageUserGroups":[],"title":{"fr":"MyCRM"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"00d22f72-1a03-44f8-ad68-c593dc80b543","name":"Stripe","namespace":"stripe"},{"id":"ee24f5ac-e15e-4ddd-baa4-0b4baedf90c9","name":"CSV","namespace":"csv"},{"id":"9c40819b-4a8f-468f-9ba5-4b9699f3361f","name":"Charts","namespace":"chartjs"},{"id":"f5856798-485d-47be-b433-d43d771c64e1","name":"Xano Auth","namespace":"xanoAuth"},{"id":"832d6f7a-42c3-43f1-a3ce-9a678272f811","name":"Date","namespace":"dayjs"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"},{"id":"cd33cf33-e29f-4e8c-ac26-b997fe507ce7","name":"Xano","namespace":"xano"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 72;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        '-staging.' + (process.env.WW_ENV === 'staging' ? process.env.VUE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(process.env.VUE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
