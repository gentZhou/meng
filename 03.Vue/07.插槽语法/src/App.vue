<template>
  <div>
    <h2>内容A</h2>
    <A>
      <p>我从小就很A</p>
    </A>
    <h2>内容B</h2>
    <B>
      <p class="p1">哈哈哈哈哈哈</p>
      <template v-slot:t1>
        <span>BBBB</span>
      </template>
    </B>
    <h2>内容C</h2>
    <C>
      <p>{{ contentC }}</p>
      <template #hello='slotProps'>
        <span>{{ slotProps.title }}</span>
      </template>
    </C>
  </div>
</template>

<script>
import A from "./A";
import B from "./B";
import C from "./C";

export default {
  data() {
    return {
      contentC: "春江花月,使人愁",
    };
  },
  components: {
    A,
    B,
    C,
  },
};
</script>

<style scoped>
.p1 {
  font-size: 50px;
  color: blueviolet;
}
</style>
