<template>
  <div class="wrap">
    <h1 class="title">{{title}}</h1>
  </div>
</template>

<script>
export default{
  name: 'manyi-crud',
  props:{
    title:{
      default:'测试标题',
      type:String
    }
  },
  install (Vue) {
    Vue.component(this.name, this)
  }
}
</script>
<style lang="scss" scoped>
.wrap{
  background: #eee;
  width: 200px;
  height: 200px;
  .title{
    color: blue;
  }
}
</style>