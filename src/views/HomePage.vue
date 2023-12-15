<template>
  <div
    class="layout flex flex-col h-screen overflow-auto items-center justify-center gap-20 pt-20 border border-black bg-gradient-to-b from-slate-400 to-slate-100">
    <NavigationBar />
    <HomeContent/>
    </div>
</template>
  
<script>
// import { ref } from 'vue';
import { mapState } from 'vuex';
import { mapActions } from 'vuex';
import NavigationBar from '@/components/NavigationBar.vue';
import HomeContent from '@/components/HomeContent.vue';
export default {
  name: "HomePage",
  components: { NavigationBar, HomeContent },
  computed: {
    ...mapState(['user', 'loggedIn']) // 'user' and 'otherState' are Vuex state properties
  },
  methods:{
    ...mapActions(['loginUser']),
  },
  setup() {
    // const loggedIn = ref(false);
    // const user = ref({});

    const handleLogout = () => {
      // const userData = null; 
      // const loggedInState = false;
      // this.loginUser(userData,loggedInState);
    };

    const handleLogin = () => {
      // const loggedInState = true;
      // this.loginUser(userData,loggedInState);
      // console.log(userData);
    };

    return {
      handleLogin,
      handleLogout,
    };
  }
};
</script>
  
<style scoped></style>