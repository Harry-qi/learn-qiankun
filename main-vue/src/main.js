import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'reactApp',
    entry: '//localhost:3000', // 自己可以在son-react/package.json配置
    container: '#sub-view',
    activeRule: '/app-react',
  },
  {
    name: 'vueApp',
    entry: '//localhost:8081', // 自己可以在son-vue/package.json配置
    container: '#sub-view',
    activeRule: '/app-vue',  // **重要** 这里的activeRule要和子应用的new VueRouter中的base一致
  },
]);
// 启动 qiankun
start()

new Vue({
  render: h => h(App),
}).$mount('#app')
