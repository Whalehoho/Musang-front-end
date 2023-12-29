// store.js
import Vuex from 'vuex';
import axios from 'axios';
import VuexPersist from 'vuex-persist';

const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: window.localStorage
});

export default new Vuex.Store({
  state: {
    user: null,
    loggedIn: false,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setLoggedIn(state, status) {
      state.loggedIn = status;
    }
  },
  actions: {
    async loginUser({ commit }, { userData, loggedInState }) {
      try {
        if (userData) {
          // Commit any mutations to the state if necessary
          commit('setUser', userData);
          commit('setLoggedIn', loggedInState);
          // console.log(userData.email);
          // const data = {
          //   email: userData.email,
          //   name: userData.name,
          //   picture: userData.picture
          // };
          await axios.post('https://musang-server-8d173f42ebdb.herokuapp.com/musang-users', userData);


        } else {
          // Handle logout logic  
          commit('setUser', null);
          commit('setLoggedIn', false);
        }

      } catch (error) {
        console.error('Error saving user data:', error);
      }
    }
  },
  plugins: [vuexPersist.plugin],
});   
