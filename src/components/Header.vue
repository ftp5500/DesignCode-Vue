<template>
    <div id="nav">
        <router-link to="/">Home</router-link>
        |
        <router-link :to="{name:'Team'}">Team</router-link>
        |
        <router-link :to="{name:'Login'}">Login</router-link>
    </div>

</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>

</style>
