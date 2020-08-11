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
        <CommentAdd :addComment="addComment" />
      </div>
      <div class="col-md-8">
        <CommentList :comments="comments" :delComment="delComment" />
      </div>
    </div>
  </div>
</template>
<script>
import CommentAdd from "./components/CommentAdd";
import CommentList from "./components/CommentList";

export default {
  data() {
    return {
      comments: [
        { id: 1, name: "baicai", content: "哦,天啊,你今天好帅哦" },
        { id: 2, name: "sanye", content: "你说这是你的天性" },
      ],
      id: 3,
    };
  },
  methods: {
    addComment({ name, content }) {
      this.comments.unshift({
        id: this.id++,
        name: name,
        content: content,
      });
    },
    delComment(id) {
      this.comments = this.comments.filter((comment) => comment.id !== id);
    },
    //this.addComment({ name:name, content:content});
  },
  components: {
    CommentAdd,
    CommentList,
  },
};
</script>
<style></style>
