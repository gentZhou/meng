<template>
  <div>
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="!this.comments.length">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <CommentDel
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
      />
    </ul>
  </div>
</template>
<script>
import CommentDel from "../CommentDel";

export default {
   data() {
    return {
      comments: [
        { id: 1, name: "baicai", content: "哦,天啊,你今天好帅哦" },
        { id: 2, name: "sanye", content: "你说这是你的天性" },
      ],
    };
  },
  methods:{
   addComment(content){
     this.comments.unshift(content);
   },
   delComment(id){
     this.comments=this.comments.filter((comment)=>{
       return comment.id!==id
     })
   }
  },
  mounted(){
    this.$bus.$on("addComment",this.addComment);
    this.$bus.$on("delComment",this.delComment);

  },
  beforeDestroy(){
    this.$bus.$off("addComment",this.addComment);
    this.$bus.$off("delComment",this.delComment);
  },
  components:{
    CommentDel
  }


};
</script>
<style></style>
