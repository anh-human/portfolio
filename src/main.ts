import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import { MotionPlugin } from '@vueuse/motion';

const app = createApp(App);
app.use(MotionPlugin);
app.mount('#root');
