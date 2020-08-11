import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    count: 0,
}

const getters = {
    oddOrEven(state) {
        return (state.count & 1) === 0 ? '偶数' : '奇数';
    },
};

/* 
    包含n个用来间接修改state的方法对象
        用来触发mutation函数的调用
        发送ajax请求
*/
const actions = {
    increment(context) {
        context.commit('INCREMENT');
    },
    decrement({ commit }) {
        commit('DECREMENT');
    },
    incrementIfodd({ commit, state }) {
        if ((state.count & 1) === 0) return;
        commit('INCREMENT');
    },
    incrementAsync({ commit }) {
        setTimeout(function () {
            commit('INCREMENT');
        }, 1000)
    }
}

const mutations = {
    INCREMENT(state) {
        state.count++;
    },
    DECREMENT(state) {
        state.count--;
    }
}

const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
})

export default store