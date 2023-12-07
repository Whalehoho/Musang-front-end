import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { plugin, defaultConfig } from '@formkit/vue';
import { generateClasses } from '@formkit/themes';
import myTailwindTheme from '../tailwind-theme.js';
import './assets/tailwing.css';
import vue3GoogleLogin from 'vue3-google-login';

const CLIENT_ID = "1048814953891-iv9gli2bjtb9qs58mp7pt5f2cjics4tt.apps.googleusercontent.com";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(vue3GoogleLogin, {
  clientId: CLIENT_ID
})
app.use(
  plugin,
  defaultConfig({
    config: {
      classes: generateClasses(myTailwindTheme),
    },
  })
);

app.mount('#app');