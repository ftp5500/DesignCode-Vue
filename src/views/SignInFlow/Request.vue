<template>
    <div class="container" :class="isDarkMode ? 'dark-background' : 'light-background'">
        <div class="login">
            <img
                src="@/assets/DCHQ.svg"
                alt=""
                v-show="isDarkMode">
            <img
                src="@/assets/DCHQ-dark.svg"
                alt=""
                v-show="!isDarkMode">
            <h4 :class="isDarkMode ? 'light-text' : 'dark-text'">Request Account</h4>
            <form @submit.prevent="onSubmit">
                <label>
                    <input
                        type="email"
                        placeholder="E-mail"
                        :class="isDarkMode ? 'light-field' : 'dark-field'"
                        v-model="email"
                        required
                    />
                </label>


                <button type="submit">Request Account</button>
            </form>

            <router-link
                :class="isDarkMode ? 'light-link' : 'dark-link'"
                to="/login">
                Already have an account? Sign in now
            </router-link>
            <ThemeSwitch/>

        </div>
    </div>
</template>

<script>

import ThemeSwitch from "@/components/ThemeSwitch";
// import {auth} from "@/main";


export default {
    name: "Request",
    components: {ThemeSwitch},
    data() {
        return {
            email: null,
            hasText: false,
            text: "",

        };
    },

    computed: {
        isDarkMode() {
            return this.$store.getters.isDarkMode
        }
    },

    methods: {


        onSubmit() {
            const email = this.email

            //   Slack API logic
            let slackURL = new URL('https://slack.com/api/chat.postMessage');

            const data = {
                token: 'xoxb-1428741051648-1405108817715-WPZ4B0pzsNmfWo7hvqKctqdr',
                channel: 'hq',
                text: `${email} has requested admin access to HQ. Please go to netlify to invite them`
            }

            slackURL.search = new URLSearchParams(data)
            fetch(slackURL).then(() => {
                this.$router.push({
                    name: "Login",
                    params: {
                        userRequestedAccount: true,
                        email: email
                    }
                })
                .catch(err=>{
                    console.log(err);
                })
            })

        }
    },
    mounted() {
        const params = this.$route.params
        if (params.userLoggedOut) {
            this.hasText = true
            this.text = "You have logged out!"
        }
    }


}
</script>


<style scoped lang="scss">
@import "../../global-styles/colors.scss";
@import "../../global-styles/typography.scss";

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

}

.login {
    width: 400px;
    text-align: center;
    margin-left: 16px;
    margin-right: 16px;
}


</style>
