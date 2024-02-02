import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        user: JSON.parse(sessionStorage.getItem("user")) || null,
        baseImageUrl : "https://yusuferen.sirv.com/TwitterApi/"
    },
    actions: {
        openSession({ commit }, { token, user }) {
            commit("SET_USER", { token, user });
          },
    },
    mutations: {
        SET_USER(state, { token, user }) {
            state.user = { token, user };
            // sessionStorage'a kullanıcı bilgilerini kaydet
            sessionStorage.setItem("user", JSON.stringify({ token, user }));
          },
    },
    getters:{
        getUser(state){
            return state.user;
        },
        getBaseProfileUrl(state){
            return state.baseImageUrl
        },
        isAuthenticated: (state) => !!state.user,
    }
})