<template>
  <div>
    <h1 v-if="isFirstView">请输入要搜索的内容</h1>

    <h1 v-else-if="isLoading">loading....</h1>
    <div class="row" v-else-if="users">
      <div class="card">
        <a href="https://github.com/reactjs" target="_blank">
          <img
            src="https://avatars.githubusercontent.com/u/6412038?v=3"
            style="width: 100px"
          />
        </a>
        <p class="card-text">reactjs</p>
      </div>
    </div>
    <p v-else>{{ error }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      isFirstView: true,
      isLoading: false,
      users: null,
      error: "",
    };
  },
  methods: {
    search(searchName) {
      console.log(searchName);
      this.isFirstView = false;
      this.isLoading = true;
      axios
        .get("https://www.baidu.com/")
        .then((result) => {
          this.isLoading = false;
          //   this.users = result.data.items;
        })
        .catch((err) => {
          this.isLoading = false;
          this.users = null;
          this.error = "网络出现故障...";
        });
    },
  },
  mounted() {
    this.$bus.$on("search", this.search);
  },
  beforeDestroy() {
    this.$bus.$off("search", this.search);
  },
};
</script>

<style scoped></style>
