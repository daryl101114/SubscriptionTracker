import axios from 'axios'
import jwt_decode from 'jwt-decode'
import router from '@/router'

//STATE
const state = {
    activeUser: '',
    token: null,
    sessionInfo: {
        isAuthorized: false,
        expiresIn: null
    },
    error: null
}
//MUTATION
const mutations = {
    'SET_TOKEN'(state, token) {
        state.token = token
    },
    'SET_USER'(state, data) {
        state.activeUser = data
    },
    'SET_SESSION'(state, data) {
        state.sessionInfo = data
    },
    'SET_ERROR'(state, error) {
        state.error = error;
    },
}
//ACTIONS
const actions = {
    async setLogin({ commit, state }, data) {
        return await axios.post('https://localhost:3000/api/users/login', data)
            .then(res => {
                console.log(res);
            }).catch(error => {
                console.log(error)
            })
    }
}
//GETTERS
const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
}