<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="pageNum"
    :page-sizes="[5, 10, 20, 50]"
    :page-size="pageSize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
    style="margin:15px"
  />
</template>

<script>
import store from '../store/index.js'
export default {
  methods: {
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      store.commit('SET_PAGESIZE',val)
      store.dispatch('select')
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      store.commit('SET_PAGENUM',val)
      store.dispatch('select')
    }
  },
  computed:{
    total(){
      return store.state.tableData.total
    },
    pageNum(){
      return store.state.pageNum
    },
    pageSize(){
      return store.state.pageSize
    }
  }
};
</script>