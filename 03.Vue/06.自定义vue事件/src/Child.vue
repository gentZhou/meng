<template>
<div>
    Child...
    <button @click='add'>按钮</button>
</div>
</template>

<script>
export default {
    methods:{
        add(){
            this.$emit('addPerson',{id:Date.now(),name:'jack'})
        }
    },
    mounted(){
        console.log('Child',this)
    }

}
</script>

<style scoped>

</style>