<template>
  <div>
    <h1>home...</h1>
    <ul class="home">
      <li>
        <router-link to="/home/news">News</router-link>
      </li>
      <li>
        <router-link to="/home/messages">messages</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'Home',
  props: ["content"],
  created() {
    console.log("home", this);
  },
  beforeDestroy(){
    console.log('hoem beforeDestroy')
  }
};
</script>

<style scoped>
.home li {
  float: left;
  list-style: none;
  background: pink;
  margin-right: 10px;
  font-weight: bold;
}
</style>
