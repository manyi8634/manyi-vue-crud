<template>
  <el-table
    :data="tableData"
    max-height="500"
    style="width: 100%"
    border
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
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          type="text"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
 
  </el-table>
</template>

<script>
export default{
  props:{
    tableData:{
      default:()=>[],
      type:Array
    }
  },
  methods:{
    handleEdit(){
      console.log('编辑')
    },
    handleDelete(){
      this.$confirm('此操作将永久删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(e=>{})
    }
  }
}
</script>