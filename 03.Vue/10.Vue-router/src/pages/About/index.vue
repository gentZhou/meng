<template>
  <div>
    about...absolute-center
  </div>
</template>

<script>
export default {
  name:'About',
  props: ["content"],
  created() {
    console.log("about created", this);
  },
  beforeDestroy(){
    console.log('about befroeDestroy')
  }
};
</script>

<style scoped></style>
