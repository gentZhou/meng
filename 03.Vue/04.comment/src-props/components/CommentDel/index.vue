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
  props: ["comment", "delComment"],
  methods: {
    del() {
      if (!confirm(`你确定要删除${this.comment.name}的评论嘛`)) return;
      this.delComment(this.comment.id);
    },
  },
};
</script>
<style></style>
