import Vue from 'vue'
import App from './App.vue'
import '../src/style.css'
import SimplebarVue from '../src'

Vue.use(SimplebarVue, { name: 'simplebar-vue' })
new Vue({
    el: '#app',
    render: h => h(App)
})
