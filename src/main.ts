import Vue from 'vue'
import App from './App.vue'
import ModalViewer from './ModalViewer'

Vue.config.productionTip = false
Vue.use(ModalViewer);

new Vue({
  render: h => h(App),
}).$mount('#app')
