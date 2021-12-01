import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Message from './components/Message.vue';

import './style.css';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', component: Message },
		{ path: '/login', component: {} },
	]
});

const app = createApp(App);

app.use(router);

app.mount('#app');
