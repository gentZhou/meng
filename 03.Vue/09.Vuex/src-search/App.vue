<template>
  <div class="container">
    <Search />
    <List />
  </div>
</template>

<script>
import Search from "./Search";
import List from "./List";

export default {
  components: {
    Search,
    List,
  },
};
</script>

<style scoped></style>
