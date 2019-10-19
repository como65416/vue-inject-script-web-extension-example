import Vue from 'vue';
import App from './src/InjectApp.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 插入一個div 並將vue component mount 上去
let ramdon_id = "app-" + Math.random().toString(36).substr(2);
let new_div = document.createElement("div");
new_div.innerHTML = "";
new_div.id = ramdon_id;
document.body.appendChild(new_div);

Vue.use(ElementUI);

new Vue({
  render: h => h(App)
}).$mount("#" + ramdon_id)