import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "@/views/SignInFlow/Login";
import Team from "@/views/Team"
import Recover from "@/views/SignInFlow/Recover";
import Request from "@/views/SignInFlow/Request";
import * as netlifyIdentityWidget from "netlify-identity-widget";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/login",
            name: "Login",
            component: Login
        },
        {
            path: "/team",
            name: "Team",
            component: Team,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/recover",
            name: "Recover",
            component: Recover
        },
        {
            path: "/request",
            name: "Request",
            component: Request
        }
    ],
});

// // const router = new VueRouter({
//     mode: "history",
//     base: process.env.BASE_URL,
//     routes
// });

router.beforeEach(( to, from, next ) => {
    const currentUser = netlifyIdentityWidget.currentUser()
    const requiresAuth = to.matched.some(record => {
    return record.meta.requiresAuth;
    })
    if(requiresAuth && !currentUser){
        next("Login")
    }else{
        next()
    }

})
export default router;
