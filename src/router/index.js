import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';

// Define routes for the application
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/RegisterPage.vue')
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: () => import('../views/JobsPage.vue')
  },
  // Additional routes can be added here
];

// Create the router instance and pass the `routes` option
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
