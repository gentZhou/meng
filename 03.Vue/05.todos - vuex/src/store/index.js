import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const state = {
    todos: [
        { id: 1, content: "滑雪", isCheck: false },
        { id: 2, content: "赛车", isCheck: true },
        { id: 3, content: "蹦迪", isCheck: false },
        { id: 4, content: "攀爬", isCheck: true },
        { id: 5, content: "冲浪", isCheck: false },
    ],


};

const getters = {
};

const actions = {
    addTodo({ commit }, todoName) {
        if (!todoName.trim()) {
            alert('爱好不能为空');
            return
        }
        commit('ADDTODO', todoName);
    }
};

const mutations = {
    ADDTODO(state, payload) {
        state.todos.unshift({
            id: Date.now(),
            content: payload,
            isCheck: false,
        })

    }

};

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})

export default store;