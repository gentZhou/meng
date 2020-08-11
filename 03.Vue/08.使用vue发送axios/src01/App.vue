<template>
  <div>
    <p>
      clicked:{{ $store.state.count }} times, count is{{
        $store.getters.oddOrEven
      }}
    </p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfodd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      //更新vuex,先要触发actions
      //actions会自动触发mutations
      //mutations会更新数据
      this.$store.dispatch("increment");
    },
    decrement() {
      this.$store.dispatch("decrement");
    },
    incrementIfodd() {
      this.$store.dispatch("incrementIfodd");
    },
    incrementAsync() {
      this.$store.dispathc("incrementAsync");
    },
  },
};
</script>

<style scoped></style>
