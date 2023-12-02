import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { plugin, defaultConfig } from '@formkit/vue';
import { generateClasses } from '@formkit/themes';
import myTailwindTheme from '../tailwind-theme.js';
import './assets/tailwing.css';


// const app = createApp(App);

// app.use(router);
// app.use(store);
//  app.use(plugin, defaultConfig);

// app.mount('#app');

const app=createApp(App);
app.use(router);
app.use(store);
app.use(
    plugin,
    defaultConfig({
      config: {
        classes: generateClasses(myTailwindTheme),
      },
    })
  );

app.mount('#app');