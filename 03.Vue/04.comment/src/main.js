import Vue from 'vue';

import App from './App.vue';

//查找index.vue文件
Vue.config.productionTip = false; // 关闭生产提示


new Vue({
    //将组件渲染到页面上
    el: '#app',
    beforeCreate(){
        Vue.prototype.$bus=this;
    },
    render: (h) => h(App),
    
})