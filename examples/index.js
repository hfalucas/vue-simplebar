import Vue from 'vue'
import App from './App.vue'
import '../src/style.css'
import VueSimplebar from '../src'

Vue.use(VueSimplebar, { name: 'vue-simplebar' })
new Vue({
    el: '#app',
    render: h => h(App)
})
