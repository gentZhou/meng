<template>
  <ul class="todo-main">
    <todoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      :delTodo='delTodo'
      :updateTodo='updateTodo'
    />
  </ul>
</template>

<script>
import todoItem from "../todoItem";
export default {
  props: ["todos", 'delTodo','updateTodo'],
  components: {
    todoItem,
  },
};
</script>

<style scoped></style>
