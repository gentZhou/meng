<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isallCheck" />
    </label>
    <span>
      <span>已完成{{ completedNum }}</span> / 全部{{ allTodos }}
    </span>
    <button class="btn btn-danger" v-show="!!completedNum" @click="handleDel">
      清除已完成任务
    </button>
  </div>
</template>

<script>
export default {
  //completedNum
  props: ["allTodos", "completedNum", "allCompleted", "delCompletedTodo"],
  // data(){
  //   return{
  //     allCheck:false,
  //   }
  // },
  methods: {
    handleDel() {
      if (!confirm("你确定要删除已完成爱好嘛?")) return;
      this.delCompletedTodo();
    },
  },
  computed: {
    isallCheck: {
      get() {
        return this.allTodos === this.completedNum;
        // return true;
      },
      set(val) {
        this.allCompleted(val);
      },
    },
  },
};
</script>

<style scoped></style>
