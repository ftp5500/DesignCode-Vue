<template>
    <div class="home">
        <Header/>
        <HelloWorld msg="Hello World"/>
    </div>
</template>

<script>
// @ is an alias to /src

import HelloWorld from "@/components/HelloWorld";
import Header from "@/components/Header";


export default {
    name: "Home",
    components: {
        Header,
        HelloWorld,

    }
};
</script>
