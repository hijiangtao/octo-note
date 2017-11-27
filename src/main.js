import Vue from 'vue'
import router from './router'
import store from './store'
import * as init from './api/init'

import * as VueTouch from 'vue-touch'
import 'weui'

Vue.use(VueTouch, {
	name: 'v-touch'
})
Vue.config.productionTip = false
import App from './App'

if (!init.detectEnv()) {
	alert('Sorry! No Web Storage support...');
}

const app = new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})
app;

// service worker
(() => {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('/octo-note/service-worker.js');
	}
})();
