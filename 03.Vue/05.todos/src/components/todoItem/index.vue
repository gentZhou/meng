<template>
  <li @mouseenter="isShow = true" @mouseleave="isShow = false">
    <label>
      <input type="checkbox" v-model="isCheck" />
      <span>{{ todo.content }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="handleDel">
      删除
    </button>
  </li>
</template>

<script>
export default {
  props: ["todo", "delTodo", "updateTodo"],
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    handleDel() {
      const { content, id } = this.todo;
      if (!confirm(`你确定要删除${content}嘛`)) return;
      this.delTodo(id);
    },
  },
  computed: {
    isCheck: {
      get() {
        return this.todo.isCheck;
      },
      set(val) {
        this.updateTodo(this.todo.id, val);
      },
    },
  },
};
</script>

<style scoped></style>
