import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import * as netlifyIdentityWidget from "netlify-identity-widget"
import GoTrue from "gotrue-js";
Vue.config.productionTip = false;
//  Initialize Netlify Identify
netlifyIdentityWidget.init();

//  Initialize Gotrue
export const auth =  new GoTrue({
    APIUrl: "https://vue-aljabri.netlify.app/.netlify/identity",
    setCookie: true
})

new Vue({
    router,
    store,

    render: h => h(App)
}).$mount("#app");
