import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
//  Initial State

if(window.matchMedia("(prefers-color-scheme: dark)").matches){
    window.localStorage.setItem("isDarkMode","true")
}
const userSelectDarkMode = window.localStorage.getItem('isDarkMode') === 'true';

const state = {
    isDarkMode: userSelectDarkMode
}

//  Getters
const getters = {
    isDarkMode( state ) {
        return state.isDarkMode
    }
}

//  Mutations
const mutations = {
    toggleDarkMode( state ) {
        if (state.isDarkMode === true) {
            state.isDarkMode = false
            document.body.style.backgroundColor = '#f0f3f5'
            window.localStorage.setItem('isDarkMode', 'false')
        } else if (state.isDarkMode === false) {
            state.isDarkMode = true
            document.body.style.backgroundColor = `#212c4f`
            window.localStorage.setItem('isDarkMode', 'true')
        }
    }

}


//  Actions
const actions = {
    triggerDarkMode( context ) {
        context.commit('toggleDarkMode')
    }
}


export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {}
});
