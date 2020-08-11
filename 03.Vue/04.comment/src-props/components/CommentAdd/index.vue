<template>
  <div>
    <form class="form-horizontal" @submit.prevent="submit">
      <div class="form-group">
        <label>用户名</label>
        <input
          type="text"
          class="form-control"
          placeholder="用户名"
          v-model="name"
        />
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea
          class="form-control"
          rows="6"
          placeholder="评论内容"
          v-model="content"
        ></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-default pull-right">
            提交
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  props: ["addComment"],
  data() {
    return {
      name: "",
      content: "",
    };
  },
  methods: {
    submit() {
      const name = this.name.trim();
      const content = this.content.trim();
      if (!name) {
        alert("请输入用户名");
        return;
      }
      if (!content) {
        alert("评论不能为空");
        return;
      }
      this.addComment({ name:name, content:content});
      this.name='';
      this.content='';
    },
  },
};
</script>
<style></style>
