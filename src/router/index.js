import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import HomePage from '../views/HomePage.vue';
import JobsPage from '../views/JobsPage.vue';
import ProjectPage from '../views/ProjectPage.vue';
import HirePage from '../views/HirePage.vue';
import ProfilePage from '../views/ProfilePage.vue';
import MyProjectPage from '../views/MyProjectPage.vue';

// Define routes for the application
const routes = [
  {
    path: '/l',
    name:'Login',
    component:LoginPage
  },
  {
    path: '/',
    name:'Home',
    component:HomePage
  },
  {
    path: '/jobs',
    name:'Jobs',
    component:JobsPage
  },
  {
    path: '/p/id/:id?/title/:title?/descr/:description?/daysLeft/:daysLeft?/payment/:payment?/tags/:tags?/location/:location?/rewards/:rewards?/reqs/:reqs?/deadline/:deadline?/client/:client?',
    name:'Project',
    component:ProjectPage,
    props:true
  },
  {
    path: '/p/id/:id?/title/:title?/descr/:description?/daysLeft/:daysLeft?/payment/:payment?/tags/:tags?/location/:location?/rewards/:rewards?/reqs/:reqs?/deadline/:deadline?/appliers/:appliers?/job_taker/:job_taker?',
    name:'MyProject',
    component:MyProjectPage,
    props:true
  },
  {
    path: '/hire',
    name:'Hire',
    component:HirePage,
    props:true
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfilePage
  },
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
