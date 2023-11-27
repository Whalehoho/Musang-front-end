import { createStore } from 'vuex';

// Create a new store instance
const store = createStore({
  state () {
    return {
      userLoggedIn: false,
      jobsList: []
    }
  },
  mutations: {
    loginUser(state) {
      state.userLoggedIn = true;
    },
    logoutUser(state) {
      state.userLoggedIn = false;
    },
    setJobsList(state, jobs) {
      state.jobsList = jobs;
    }
  },
  actions: {
    fetchJobs({ commit }) {
      // Here you would fetch jobs from an API and commit them to state
      // For now, we'll use mock data
      const mockJobs = [
        { id: 1, title: 'Frontend Developer', companyName: 'Tech Co', description: 'We are looking for a Vue.js developer...', type: 'Full-time' },
        // ...other job listings
      ];
      commit('setJobsList', mockJobs);
    }
  }
})

export default store;
