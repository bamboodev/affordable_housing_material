import Vue from 'vue'
import App from './App.vue'
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import MaterialKit from "./plugins/material-kit";

Vue.config.productionTip = false

Vue.use(MaterialKit);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')