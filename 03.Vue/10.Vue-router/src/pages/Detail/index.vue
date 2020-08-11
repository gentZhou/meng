<template>
  <div>
    <ul>
      <li>{{ detail.id }}</li>
      <li>{{ detail.title }}</li>
      <li>{{ detail.content }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["sex", "id", "name", "age"],
  data() {
    return {
      detail: [],
    };
  },
  created() {
    setTimeout(() => {
      const messages = [
        { id: 1, title: "messsage001", content: "message001 content~~~" },
        { id: 2, title: "messsage002", content: "message002 content~~~" },
        { id: 3, title: "messsage003", content: "message003 content~~~" },
        { id: 4, title: "messsage004", content: "message004 content~~~" },
      ];
      this.messages = messages;
      console.log("detail", this);
      console.log(this.$route.params.id);
      const id = +this.$route.params.id;
      const detail = messages.find((message) => message.id === id);
      this.detail = detail;
    }, 1000);
  },
    watch: {
      $route(newValue) {
        const id = +newValue.params.id;
        const detail = this.messages.find((message) => message.id === id);
        this.detail = detail;
      },
    },
  beforeRouteUpdate(to, from, next) {
    // react to route changes...
    // don't forget to call next()
    console.log(to, from, next);
    //to 下一个地址信息对象
    //from 上一次地址信息对象
    const id = +to.params.id;
    const detail = this.messages.find((message) => message.id === id);
    this.detail = detail;
    next();
    //next 代表执行后面的代码
  },
};
</script>

<style scoped></style>
