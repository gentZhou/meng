<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todoHeader :addTodo="addTodo" />
      <todoMain :todos="todos" :delTodo="delTodo" :updateTodo="updateTodo" />
      <todoFooter
        :allTodos="todos.length"
        :completedNum="completedNum"
        :allCompleted="allCompleted"
        :delCompletedTodo="delCompletedTodo"
      />
    </div>
  </div>
</template>

<script>
import todoHeader from "./components/todoHeader";
import todoMain from "./components/todoMain";
import todoFooter from "./components/todoFooter";

export default {
  data() {
    return {
      todos: [
        { id: 1, content: "滑雪", isCheck: false },
        { id: 2, content: "赛车", isCheck: true },
        { id: 3, content: "蹦迪", isCheck: false },
        { id: 4, content: "攀爬", isCheck: true },
        { id: 5, content: "冲浪", isCheck: false },
      ],
    };
  },
  methods: {
    addTodo(todo) {
      this.todos.unshift({ id: Date.now(), isCheck: false, ...todo });
    },

    delTodo(id) {
      this.todos = this.todos.filter((todo) => {
        if (todo.id !== id) {
          return todo;
        }
      });
    },
    updateTodo(id, isCheck) {
      this.todos = this.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCheck };
        }
        return todo;
      });
    },
    allCompleted(isCheck) {
      this.todos = this.todos.map((todo) => ({ ...todo, isCheck }));
    },
    delCompletedTodo() {
      this.todos = this.todos.filter((todo) => {
        return todo.isCheck !== true;
      });
    },
  },

  computed: {
    completedNum() {
      return this.todos.reduce((p, c) => {
        p = p + Number(c.isCheck);
        // console.log(p);
        return p;
      }, 0);
    },
  },

  components: {
    todoHeader,
    todoMain,
    todoFooter,
  },
};
</script>

<style scoped></style>
