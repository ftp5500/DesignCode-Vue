<template>
    <div @click="toggleDarkMode" class="toggle" :class="isDarkMode ? 'dark-toggle' : 'light-toggle'">
        <div class="toggle-switch" :class="isDarkMode ? 'toggle-right' : 'toggle-left'">
            <img src="../assets/sun.svg" v-show="!isDarkMode">
            <img src="../assets/moon.svg" v-show="isDarkMode">
        </div>
    </div>
</template>

<script>
export default {
    name: "ThemeSwitch",
    computed: {
        isDarkMode() {
            return this.$store.getters.isDarkMode
        }
    },
    methods: {
        toggleDarkMode() {
            this.$store.commit('toggleDarkMode')
        }
    }
}
</script>

<style scoped>

.toggle {
    margin: 50px auto;
    width: 175px;
    border-radius: 10px;
    box-sizing: border-box;

    display: flex;
}

.light-toggle {
    background: linear-gradient(328.85deg, #F7FCFC 0%, #FAFCFA 100%);
    border: 1px solid rgba(0, 0, 0, 0.04);

    box-shadow: inset 0px 5px 10px rgba(0, 0, 0, 0.1)
}

.dark-toggle {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: inset 0px 5px 10px rgba(255, 255, 255, 0.1);
}

.toggle-switch {
    width: 20px;
    border-radius: 8px;
    margin: 2px;
    padding: 15px 35px;

}

.toggle-left {
    transform: translateX(0);
    background: #FFFFFF;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

}

.toggle-right {
    transform: translateX(90%);
    background: #1B233F;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

}

</style>
