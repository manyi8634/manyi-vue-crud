<template>
  <el-form ref="ruleForm" :model="form" label-width="80px">
    <el-row>
      <el-col :span="6">
        <el-form-item label="用户名:" prop="userName">
          <el-input v-model="form.userName" />
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="邮箱:" prop="email">
          <el-input v-model="form.email" />
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="手机号:" prop="phoneNum">
          <el-input v-model="form.phoneNum" />
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="状态:" prop="status">
          <el-select v-model="form.status" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"/>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item>
      <div style="display: flex;justify-content: center;align-items: center;">
        <el-button type="primary" icon="el-icon-search" @click="handleSearch">查询</el-button>
        <el-button type="primary" icon="el-icon-plus" @click="handleAdd">新增</el-button>
        <el-button type="danger" icon="el-icon-delete" :disabled="multipleSelection.length===0" @click="handleDelete">批量删除</el-button>
        <el-button icon="el-icon-refresh" @click="resetForm('ruleForm')">重置</el-button>
      </div>
    </el-form-item>
   
  </el-form>
</template>

<script>
import store from '../store/index.js';
export default {
  data() {
    return {
      form: {
        userName: "",
        email: "",
        phoneNum: "",
        status: "1",
      },
      options:[
        {
          label:'正常',
          value:'1'
        },
        {
          label:'离职',
          value:'2'
        }
      ]
    };
  },
  mounted(){
    // 初始化查询
    store.dispatch('select',{form:this.form,resetPage:true})
  },
  methods: {
    // 用户点击查询
    handleSearch(){
      store.dispatch('select',{form:this.form,resetPage:true})
    },
    // 用户点击新增
    handleAdd(){
      console.log("新增")
    },
    // 用户点击批量删除
    handleDelete(){
      this.$confirm('确认批量删除吗？, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const params = store.state.multipleSelection.map(item=>item.id)
    
        store.dispatch('delete',params)
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(e=>{})
    },
    // 用户点击重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  computed:{
    multipleSelection(){
      return store.state.multipleSelection
    }
  }
};
</script>