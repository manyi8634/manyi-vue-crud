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
      <el-row type="flex" justify="center" align="center">
        <el-col :span="12" >
          <el-button type="primary" icon="el-icon-search" @click="handleSearch(form)">查询</el-button>
          <el-button type="primary" icon="el-icon-plus" @click="handleAdd">新增</el-button>
          <el-button type="danger" icon="el-icon-delete" :disabled="multipleSelection.length===0" @click="handleDelete">批量删除</el-button>
          <el-button icon="el-icon-refresh" @click="resetForm('ruleForm')">重置</el-button>
        </el-col>
      </el-row>
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
    store.dispatch('handleSearch',this.form)
  },
  methods: {
    handleSearch(){
      store.dispatch('handleSearch',this.form)
    },
    handleAdd(){
      console.log("新增")
    },
    handleDelete(){
      this.$confirm('此操作将永久删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const params = store.state.multipleSelection.map(item=>item.id)
        console.log('批量删除参数',params)

        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(e=>{})
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
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

<style>
</style>