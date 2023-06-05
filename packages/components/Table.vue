<template>
  <el-table
    v-loading="loading"
    element-loading-text="拼命加载中"
    :data="tableData"
    max-height="500"
    style="width: 100%"
    border
    @selection-change="handleSelectionChange"
  >
    <el-table-column
      type="selection"
      width="55"
      align="center"
    />
    <el-table-column
      prop="id"
      label="ID"
      align="center"
    />
    <el-table-column
      prop="userName"
      label="用户名"
      align="center"
    />
    <el-table-column
      prop="email"
      label="邮箱"
      align="center"
      width="200"
    />
    <el-table-column
      prop="phoneNum"
      label="手机号"
      align="center"
      width="150"
    />
    <el-table-column
      prop="status"
      label="状态"
      align="center"
    >
      <template slot-scope="scope">
        <el-tag v-if="scope.row.status==='1'" type="success">正常</el-tag>
        <el-tag v-if="scope.row.status==='2'" type="info">离职</el-tag>
      </template>
    </el-table-column>
    <el-table-column
      prop="createTime"
      label="创建时间"
      width="150"
      align="center"
    />
    <el-table-column label="操作" width="120" align="center">
      <template slot-scope="scope">
        <el-button
          type="text"
          @click="handleEdit(scope.row)">编辑</el-button>
        <el-button
          type="text"
          @click="handleDelete(scope.row)">删除</el-button>
      </template>
    </el-table-column>
 
  </el-table>
</template>

<script>
import store from '../store/index.js'
export default{
  data(){
    return{
      multipleSelection:[]
    }
  },
  methods:{
    handleEdit(){
      console.log('编辑')
    },
    handleDelete(row){
      this.$confirm('此操作将永久删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log('删除参数',row.id)
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(e=>{})
    },
    handleSelectionChange(val) {
      store.commit('SET_MULTIPLESELECTION',val)
    },
    
  },
  computed:{
    tableData(){
      return store.state.tableData
    },
    loading(){
      return store.state.loading
    }
  }
}
</script>