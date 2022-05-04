import Vue from 'vue';
import Vuex from 'vuex'
import authState from './modules/authState'

Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        authState
    }
})