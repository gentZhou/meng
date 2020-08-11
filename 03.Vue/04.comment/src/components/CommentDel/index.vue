<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="del">删除</a>
    </div>
    <p class="user">
      <span>{{ comment.name }}</span
      ><span>说:</span>
    </p>
    <p class="centence">{{ comment.content }}!</p>
  </li>
</template>
<script>
export default {
  props:['comment'],
  methods:{
    del(){
      const id=this.comment.id;
      if(!confirm('你确定要删除评论内容嘛?'))return
      this.$bus.$emit('delComment',id);
    }
  }
};
</script>
<style></style>
