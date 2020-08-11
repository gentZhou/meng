<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model="content"
      @keyup.enter="handleEnter"
    />
  </div>
</template>

<script>
export default {
  props: ["addTodo"],
  data() {
    return {
      content: "",
    };
  },
  methods: {
    handleEnter() {
      const content = this.content.trim();
      if (!content) {
        alert("爱好不能为空");
        return;
      }
      this.addTodo({ content });
      this.content = "";
    },
  },
};
</script>

<style scoped></style>
