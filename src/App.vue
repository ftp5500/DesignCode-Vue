<template>
    <div id="app">

        <router-view/>
    </div>
</template>

<style lang="scss">
@import "global-styles/colors.scss";
@import "global-styles/typography.scss";

*{
    transition: 0.8s cubic-bezier(0.2,0.8,0.2,1);
}
body {
    background-color: $dark-blue;
}
h1{
    @include  heading-1;
}
p{
    @include  large-text-bold($purple);
}
#app {
    font-family: $system-font-family,
    Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    color: $white;

}



#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #42b983;

        &.router-link-exact-active {
            color: $white;
        }
    }
}

/*Theme*/
.light-background {
    background-color: $light-gray;
}

.dark-background {
    background-color: $dark-blue;
}

.light-text {
    color: $white
}

.dark-text {
    color: $black
}

.light-field {
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.2);

    &::placeholder {
        color: rgba(255, 255, 255, 0.3);
    }
}

.dark-field {
    background: rgba(198, 208, 235, 0.2);
    border: 1px solid rgba(198, 208, 235, 0.2);

    &::placeholder {
        color: rgba(0, 0, 0, 0.3)
    }
}


h4 {
    margin: 0;
    line-height: 34px;
    font-size: 24px;
    text-align: center;
    color: white;
}

input {
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 4px;
    height: 60px;
    width: 100%;
    margin-top: 20px;
    color: white;
    padding-left: 15px;
    font-size: 20px;

    &::placeholder {
        color: rgba(255, 255, 255, 0.4);
    }

}

button {
    margin-top: 20px;
    height: 60px;
    width: 100%;
    background: #0488b3;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    color: white;
    font-weight: 600;
    font-size: 20px;
    /* identical to box height */
    text-align: center;
    border: none;
    margin-bottom: 40px;

}

a {
    line-height: 25px;
    font-size: 16px;
    text-align: center;

    text-decoration: none;
}

.dark-link {
    color: rgba(0, 0, 0, 0.5);
}

.light-link {
    color: rgba(255, 255, 255, 0.3);
}
</style>
<script>


export default {
    components: {


    },

    mounted() {
        const isDarkMode = this.$store.getters.isDarkMode ;

        document.body.style.backgroundColor = isDarkMode ? "$dark-blue" : "$light-grey"

    }
}


</script>



