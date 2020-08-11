<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <div class="col-md-4">
        <CommentAdd />
      </div>
      <div class="col-md-8">
        <CommentList  />
      </div>
    </div>
  </div>
</template>
<script>
import CommentAdd from "./components/CommentAdd";
import CommentList from "./components/CommentList";

export default {
 
  
  components: {
    CommentAdd,
    CommentList,
  },
};
</script>
<style></style>
