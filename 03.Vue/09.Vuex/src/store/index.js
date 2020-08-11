//使用vuex
import Vue from 'vue';
//Vuex是Vue的插件
import Vuex from 'vuex';

//使用插件
Vue.use(Vuex);

//用来集中式管理多个组件共享的状态数据(data数据)
const state = {
    count: 0,
};

//用来集中式管理多个组件共享的状态数据(计算属性)
const getters = {
    oddOrEven(state) {
        return (state.count & 1) === 0 ? "偶数" : "奇数";

    }
}


//包含n个用来间接修改state的方法
const actions = {
    // increment(context,number) {
    //     //commit方法一旦调用,就会触发相应的mutation函数
    //     context.commit('INCREMENT',number)
    //     console.log(number);
    // },
    // decrement({ commit },number) {
    //     commit('DECREMENT',number);
    // },
    incrementIfOdd({ commit, state },number) {
        if ((state.count & 1) === 0) return;
        commit('INCREMENT',number);
    },
    incrementAsync({ commit },number) {
        setTimeout(function () {
            commit('INCREMENT',number);
        }, 1000)
    }

};



//包含n个用来直接修改state的方法
const mutations = {
    INCREMENT(state,payload) {
        //state是整个状态对象
        state.count+=payload;
    },
    DECREMENT(state,payload) {
        //state是整个状态对象
        state.count-=payload;
    },
};

/* 
    store对象
        就有所有的状态数据和更新状态数据的方法
*/

const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
})

export default store