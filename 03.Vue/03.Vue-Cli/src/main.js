import Vue from 'vue';
import App from './App.vue';

//查找index.vue文件
import IndexVue from './components/HelloVue/index.vue'

//引入样式文件
import './assets/css/common.css';
import './assets/css/index.css';


Vue.component('IndexVue', IndexVue);

new Vue({
    el: '#app',
    render: (h) => h(App)
})