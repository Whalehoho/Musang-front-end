import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import HomePage from '../views/HomePage.vue';
import JobCard from '../components/JobCard.vue';
import JobsPage from '../views/JobsPage.vue';
import ProjectPage from '../views/ProjectPage.vue';
import HirePage from '../views/HirePage.vue';

// Define routes for the application
const routes = [
  {
    path: '/l',
    name:'Login',
    component:LoginPage
  },
  {
    path: '/j',
    name:'JobCard',
    component:JobCard,
    props:true
  },
  {
    path: '/h',
    name:'Home',
    component:HomePage
  },
  {
    path: '/',
    name:'Jobs',
    component:JobsPage
  },
  {
    path: '/p/title/:title/descr/:description/daysLeft/:daysLeft/payment/:payment/tags/:tags/location/:location/rewards/:rewards/reqs/:reqs/deadline/:deadline',
    name:'Project',
    component:ProjectPage,
    props:true
  },
  {
    path: '/h',
    name:'Hire',
    component:HirePage,
    props:true
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: HomePage
  // },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: () => import('../views/LoginPage.vue')
  // },
  // {
  //   path: '/register',
  //   name: 'Register',
  //   component: () => import('../views/RegisterPage.vue')
  // },
  // {
  //   path: '/jobs',
  //   name: 'Jobs',
  //   component: () => import('../views/JobsPage.vue')
  // },
  // Additional routes can be added here
];

// Create the router instance and pass the `routes` option
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
