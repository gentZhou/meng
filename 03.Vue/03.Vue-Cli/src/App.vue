<template>
  <!-- HTML代码 -->
  <div>
    <h1 @click="handleClick" class="title">{{ title }}</h1>
    <!-- <button v-on:click=''>按钮</button> -->
    <IndexVue />
    <IndexVue />
    <IndexVue />

  </div>
</template>
<script>
export default {
  data: function() {
    return {
      title: "今天又是如此的困呐",
    };
  },
  methods: {
    handleClick() {
      console.log(111);
    },
  },
};
</script>
<style>
/* .title {
  color: white;
} */
</style>
