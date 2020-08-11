<template>
  <div>
    <p>clicked: {{ $store.state.count }} times, count is {{ $store.getters.oddOrEven }}</p>
    <select v-model='number'>
      <option :value='1'>1</option>
      <option :value='2'>2</option>
      <option :value='3'>3</option>

    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment id odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      number:1,
    }
  },
  
  methods: {
    increment() {
      //更新vuex,先要触发actions
      //actions会自动触发mutations
      //mutation会更新数据
      //this.$store.dispatch(type,data)
      //type 是action函数名称,data传给actions函数的数据

      this.$store.dispatch('increment',this.number)
      console.log(this);
    },
    decrement() {
      this.$store.dispatch('decrement',this.number)
      
    },
    incrementIfOdd() {
      this.$store.dispatch('incrementIfOdd',this.number);
    },
    incrementAsync() {
      this.$store.dispatch('incrementAsync',this.number);
    },
  },
  // computed: {
  //   oddOrEven() {
  //     return (this.count & 1) === 0 ? "偶数" : "奇数";
  //   },
  // },
};
</script>

<style scoped></style>
