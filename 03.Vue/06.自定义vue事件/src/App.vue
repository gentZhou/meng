<template>
  <div class="todo-container">
    <p v-for="person in persons" :key="person.id" >{{person.name}}</p>
    <Child ref="child" />
  </div>
</template>

<script>
import Child from "./Child";

const VueComponent=Vue.extend({
  data() {
    return {
      persons: [{ id: 1, name: "zhou" }],
    };
  },
  methods: {
    addPerson(person) {
      this.persons.push(person);
    },
  },
  mounted() {
    this.$refs.child.$on("addPerson", this.addPerson);
    console.log('App',this);

  },
  // beforeDestroy(){
  //   this.$refs.child.$off('addPerson',this.addPerson)
  // },

  components: {
    Child,
  },
});
console.log('VueComponent',VueComponent.prototype)
export default VueComponent
</script>

<style scoped></style>
