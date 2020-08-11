<template>
  <div class="container">
    <div>
      <div class="row">
        <div class="col-xs-offset-2 col-xs-8">
          <div class="page-header">
            <h2>Vue Router Demo</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-2 col-xs-offset-2">
          <div class="list-group">
            <!-- <a class="list-group-item" href="/about">About</a>
            <a class="list-group-item myActive" href="/home" aria-current="page"
              >Home</a
            > -->
            <router-link class="list-group-item" to="/about">About</router-link>
            <router-link class="list-group-item" to="/home">Home</router-link>
          </div>
        </div>
      </div>
    </div>
    <keep-alive exclude='Home'>
    <router-view class="content" content="念念不忘,必有回响"></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.content {
  position: absolute;
  right: 50%;
  top: 130px;
}
.router-link-active {
  color: red !important;
}
</style>
