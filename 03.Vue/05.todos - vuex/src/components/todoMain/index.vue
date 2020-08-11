<template>
  <ul class="todo-main">
    <todoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </ul>
</template>

<script>
import todoItem from "../todoItem";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["todos"]),
  },
  components: {
    todoItem,
  },
};
</script>

<style scoped></style>
