<template>
  <div>
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="!this.comments.length">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <CommentDel
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
        :delComment="delComment"
      />
    </ul>
  </div>
</template>
<script>
import CommentDel from "../CommentDel";

export default {
  props: {
    comments: Array,
    delComment: Function,
  },
  components: {
    CommentDel,
  },
};
</script>
<style></style>
