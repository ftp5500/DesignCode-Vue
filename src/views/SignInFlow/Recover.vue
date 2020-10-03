<template>
    <div class="container" :class="isDarkMode ? 'dark-background' : 'light-background'">
        <RequestAccount/>

        <div class="login">

            <img
                src="@/assets/DCHQ.svg"
                alt=""
                v-show="isDarkMode">
            <img
                src="@/assets/DCHQ-dark.svg"
                alt=""
                v-show="!isDarkMode">
            <h4 :class="isDarkMode ? 'light-text' : 'dark-text'">Recover Account</h4>
            <form @submit.prevent="onSubmit">
                <label>
                    <input
                        type="email"
                        placeholder="E-mail"
                        :class="isDarkMode ? 'light-field' : 'dark-field'"
                        v-model="loginForm.email"
                        required
                    />
                </label>


                <button type="submit">Send Email</button>
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

import RequestAccount from "@/components/RequestAccount";
import ThemeSwitch from "@/components/ThemeSwitch";
import {auth} from "@/main";

export default {
    name: "Recover",
    components: {ThemeSwitch, RequestAccount},
    data() {
        return {
            loginForm: {
                email: null,
                password: null
            },
            hasText: false,
            text: ""
        };
    },

    computed: {
        isDarkMode() {
            return this.$store.getters.isDarkMode
        }
    },

    methods: {


        onSubmit() {
            const email = this.loginForm.email
            auth.requestPasswordRecovery(email)
                .then(() => {
                    this.$router.push({
                        name: "Login",
                        params: {
                            userRecoveredAccount: true,
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
            this.text = `You have logged out!`
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
