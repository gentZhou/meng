<template>
  <div>
    <p class="title">{{ p }}</p>
    <h1 @click="handleClick">{{title}}</h1>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      title: "这不是我想要的结果",
      p: "p里面的内容",
    };
  },
  methods: {
    handleClick() {
      console.log("handleClick触发了");
    },
  },
};
</script>
<style>
.title {
  color: rgb(78, 9, 61);
}
</style>
