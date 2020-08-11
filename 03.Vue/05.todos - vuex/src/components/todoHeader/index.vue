<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model='todoName'
      @keyup.enter='addTodo(todoName)'
    />
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  data(){
    return{
      todoName:'',
    }
  },
  methods:{
    ...mapActions(['addTodo'])
  },
  

};
</script>

<style scoped></style>
