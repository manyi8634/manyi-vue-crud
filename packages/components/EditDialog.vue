<template>
  <el-dialog title="用户编辑" :visible.sync="dialogFormVisible">
    <el-form :model="form">
      <el-form-item label="ID" :label-width="formLabelWidth">
        <el-input v-model="form.id" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="ID" :label-width="formLabelWidth">
        <el-input v-model="form.id" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="ID" :label-width="formLabelWidth">
        <el-input v-model="form.id" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="ID" :label-width="formLabelWidth">
        <el-input v-model="form.id" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
  </el-dialog>

</template>

<script>
export default {
  data(){
    return{
      dialogFormVisible:false,
      form:{
      },
      formLabelWidth: '120px'
    }
  }

}
</script>