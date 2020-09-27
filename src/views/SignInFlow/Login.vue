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
            <h4 :class="isDarkMode ? 'light-text' : 'dark-text'">Sign into Design+Code HQ</h4>
            <label>
                <input
                    type="email"
                    placeholder="E-mail"
                    :class="isDarkMode ? 'light-field' : 'dark-field'"/>
            </label>

            <label>
                <input
                    type="password"
                    placeholder="password"
                    :class="isDarkMode ? 'light-field' : 'dark-field'"/>
            </label>

            <button type="submit">Sign in</button>

            <router-link
                :class="isDarkMode ? 'light-link' : 'dark-link'"
                to="/recover">
                Forgotten your password?
            </router-link>
            <ThemeSwitch/>

        </div>
    </div>
</template>

<script>

import RequestAccount from "@/components/RequestAccount";
import ThemeSwitch from "@/components/ThemeSwitch";

export default {
    name: "Login",
    components: {ThemeSwitch, RequestAccount},


    computed: {
        isDarkMode() {
            return this.$store.getters.isDarkMode
        }
    },
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
}



</style>
