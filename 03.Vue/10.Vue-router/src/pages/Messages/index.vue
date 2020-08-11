<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.id">
        <!-- <router-link
          :to="`/home/messages/detail/${message.id}?name=jack&age=18`"
          >{{ message.content }}</router-link
        > -->
        <router-link
          :to="{  
            name: 'detail',
            params: { id: message.id },
            query: {
              name: 'jack',
              age: 18,
            },
          }"
          >{{ message.content }}</router-link
        >
        <!-- 
            ?name=jack&age=18
            通过this.$route.query
         -->
        <button @click="$router.push(`/home/messages/detail/${message.id}`)">
          push
        </button>
        <button @click='$router.replace(`/home/messages/detail/${message.id}`)'>replace</button>
      </li>
    </ul>
    <button @click='$router.back()'>back</button>
    <button @click='$router.forward()'>forward</button>
    <router-view sex="不知不觉的放开手"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
    };
  },
  created() {
    setTimeout(() => {
      const messages = [
        { id: 1, content: "message001" },
        { id: 2, content: "message002" },
        { id: 3, content: "message003" },
        { id: 4, content: "message004" },
      ];
      this.messages = messages;
      console.log(this);
    }, 1000);
  },
};
</script>

<style scoped></style>
