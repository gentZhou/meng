<template>
  <li @mouseenter="isShow=true" @mouseleave="isShow=false">
    <label>
      <input type="checkbox" />
      <span>{{ todo.content }}</span>
    </label>
    <button class="btn btn-danger" v-if="isShow" >
      删除
    </button>
  </li>
</template>

<script>
import { mapGetters, mapState ,mapMutations} from "vuex";

export default {
  data(){
    return{
      isShow:false,
    }
  },
  props: ["todo"],

  methods:{
    ...mapMutations(['ENTER','LEAVE'])
  },

  // computed: {
  //   ...mapState(["isShow"]),
  // },
};
</script>

<style scoped></style>
