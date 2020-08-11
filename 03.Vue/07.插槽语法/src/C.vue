<template>
  <div>
    <slot name='hello' :title="title"></slot>
    <p>------</p>
    <slot></slot>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "三叶",
    };
  },
};
</script>

<style scoped></style>
