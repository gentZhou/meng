<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todoHeader />
      <todoMain />
      <todoFooter />
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
      
    };
  },

  components: {
    todoHeader,
    todoMain,
    todoFooter,
  },
};
</script>

<style scoped></style>
