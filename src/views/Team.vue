<template>
    <div class="container">
        <h2>Team</h2>

        <div class="cards">
            <transition appear appear-active-class="animated flipInX">
                <a class="card card-1" :class="isDarkMode ? 'light-card': 'dark-card'">
                    <img src="../assets/slack.png" alt="" class="card-header"
                         :class="isDarkMode ? 'light-header' : 'dark-header' ">
                    <h3>Slack</h3>
                    <p :class="!isDarkMode ? 'light-text' : 'dark-text'"> Lorem ipsum dolor sit amet. </p>
                </a>
            </transition>
            <transition appear appear-active-class="animated flipInX">
                <a class="card card-2" :class="isDarkMode ? 'light-card': 'dark-card'">
                    <img src="../assets/dropbox.png" alt="" class="card-header"
                         :class="isDarkMode ? 'light-header' : 'dark-header' ">
                    <h3>Dropbox</h3>
                    <p :class="!isDarkMode ? 'light-text' : 'dark-text'"> Lorem ipsum dolor sit amet. </p>
                </a>
            </transition>
            <transition appear appear-active-class="animated flipInX">
                <a class="card card-3" :class="isDarkMode ? 'light-card': 'dark-card'">
                    <img src="../assets/figma.png" alt="" class="card-header"
                         :class="isDarkMode ? 'light-header' : 'dark-header' ">
                    <h3>Figma</h3>
                    <p :class="!isDarkMode ? 'light-text' : 'dark-text'"> Lorem ipsum dolor sit amet. </p>
                </a>
            </transition>
            <transition appear appear-active-class="animated flipInX">
                <a class="card card-4" :class="isDarkMode ? 'light-card': 'dark-card'">
                    <img src="../assets/notion.png" alt="" class="card-header"
                         :class="isDarkMode ? 'light-header' : 'dark-header' ">
                    <h3>Notion</h3>
                    <p :class="!isDarkMode ? 'light-text' : 'dark-text'"> Lorem ipsum dolor sit amet. </p>
                </a>
            </transition>
            <transition appear appear-active-class="animated flipInX">
                <a class="card card-5" :class="isDarkMode ? 'light-card': 'dark-card'">
                    <img src="../assets/contentful.png" alt="" class="card-header"
                         :class="isDarkMode ? 'light-header' : 'dark-header' ">
                    <h3>Contentful</h3>
                    <p :class="!isDarkMode ? 'light-text' : 'dark-text'"> Lorem ipsum dolor sit amet. </p>
                </a>
            </transition>

        </div>
    </div>
</template>

<script>

export default {
    name: "Team",
    computed: {
        isDarkMode() {
            return this.$store.getters.isDarkMode
        }
    },
}
</script>

<style scoped lang="scss">
@import "../global-styles/typography.scss";
@import "../global-styles/colors.scss";

.container {
    margin-left: 25px;
}

h2 {
    @include heading-2;
}

.cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
}

.card {
    height: 400px;
    width: 100%;
    max-width: 300px;
    border-radius: 10px;
    margin: 20px;

}

.card-1 {
    animation-delay: 0.2s;
}

.card-2 {
    animation-delay: 0.4s;
}

.card-3 {
    animation-delay: 0.6s;
}

.card-4 {
    animation-delay: 0.8s;
}

.card-5 {
    animation-delay: 1s;
}

.light-card {
    background: $white;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);

    &:hover {
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
    }
}

.dark-card {
    background: $super-dark-blue;
    box-shadow: 0 20px 40px rgba(255, 255, 255, 0.15);

    &:hover {
        box-shadow: 0 30px 60px rgba(255, 255, 255, 0.35);
    }
}

.card-header {
    width: 100%;
    border-radius: 10px 10px 0 0;

}

h3 {
    @include heading-3;
    margin-bottom: 16px;
}

p {
    font-size: 15px;
    line-height: 24px;
    text-align: left;
    margin-left: 16px;
    margin-top: 0;
}

.light-header {
    background: $light-gray;
}

.dark-header {
    background: #283049;
}
</style>
