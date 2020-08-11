<template>
  <div>
    <p v-if="isLoading">isLoading...</p>
    <h1 v-else>
      Most Star repo is<a :href='repo.url'>{{repo.name}}</a>
    </h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      repo: {},
      isLoading: false,
    };
  },
  created() {
    this.isLoading = true;

    axios
      .get("http://localhost:12138/api")
      .then((result) => {
        console.log(result);
        this.isLoading = false;
        if (result.data.code === 10000) {
          this.repo = result.data.data;
        } else {
          alert("请求失败了~");
        }
      })
      .catch((err) => {
        this.isLoading = false;
        console.log(err);
        // alert()
      });
  },
};
</script>

<style scoped></style>
