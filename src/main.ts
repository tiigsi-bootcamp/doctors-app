import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Login from './pages/Login.vue';
import Doctors from './pages/Doctors.vue';
import Home from './pages/Home.vue';

import './style.css';

const router = createRouter({
	routes: [
		{ path: '/', component: Home },
		{ path: '/login', component: Login },
		{ path: '/doctors', component: Doctors },
	],
	history: createWebHistory()
});

const app = createApp(App);

// Tell the application to use the router.
app.use(router);

app.mount('#app');
