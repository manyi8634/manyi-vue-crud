<template>
  <div class="manyi-wrap">
    <Form/>
    <Table/>
    <Pagination class="manyi—Pagination"/>
  </div>
</template>

<script>
import Form from './components/Form'
import Table from './components/Table'
import Pagination from './components/Pagination'
export default{
  name: 'my-crud',
  components:{Form,Table,Pagination},
  props:{
    tableData:{
      default:()=>[],
      type:Array
    }
  },
  install (Vue) {
    Vue.component(this.name, this)
  }
}
</script>
<style lang="scss" scoped>
.manyi-wrap{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .manyi—Pagination{
    align-self: flex-end;
  }
}
</style>