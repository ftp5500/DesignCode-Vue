<template>
    <div id="nav">
        <router-link to="/">Home</router-link>
        |
        <router-link :to="{name:'Team'}">Team</router-link>
        |
        <router-link :to="{name:'Login'}">Login</router-link>
        |
        <a href="" @click="onClick">Logout</a>
    </div>

</template>

<script>
import {auth} from "@/main";

export default {
    name: "Header",

    methods: {
        onClick() {
            const user = auth.currentUser();
            user
                .logout()
                .then(() => {
                    this.$router.push({
                        name: "login",
                        params: { userLoggedOut: true }
                    });
                })
                .catch(error => {
                    alert("Error: ", error);
                });
        }
    }
}
</script>

<style scoped>

</style>
