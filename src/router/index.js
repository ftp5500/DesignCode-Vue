import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "@/views/SignInFlow/Login";
import Team from "@/views/Team"
import Recover from "@/views/SignInFlow/Recover";
import Request from "@/views/SignInFlow/Request";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/team",
        name: "Team",
        component: Team
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
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
