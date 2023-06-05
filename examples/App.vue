<template>
  <div id="app">
    <my-crud :tableData="tableData"/>
  </div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return{
      tableData: [
        {
          id: '1',
          userName: '王小虎',
          email: 'manyicode@163.com',
          phoneNum: '13818721446',
          status: '1',
          createTime: '2023-06-05'
        },
        {
          id: '2',
          userName: '李大虎',
          email: '863412757@qq.com',
          phoneNum: '18713825335',
          status: '2',
          createTime: '2023-06-05'
        },
        {
          id: '3',
          userName: '喜马拉雅',
          email: '823645129@qq.com',
          phoneNum: '18672953119',
          status: '2',
          createTime: '2023-05-05'
        },
        {
          id: '3',
          userName: '喜马拉雅',
          email: '823645129@qq.com',
          phoneNum: '18672953119',
          status: '2',
          createTime: '2023-05-05'
        },
        {
          id: '3',
          userName: '喜马拉雅',
          email: '823645129@qq.com',
          phoneNum: '18672953119',
          status: '2',
          createTime: '2023-05-05'
        },
        {
          id: '3',
          userName: '喜马拉雅',
          email: '823645129@qq.com',
          phoneNum: '18672953119',
          status: '2',
          createTime: '2023-05-05'
        },
        {
          id: '3',
          userName: '喜马拉雅',
          email: '823645129@qq.com',
          phoneNum: '18672953119',
          status: '2',
          createTime: '2023-05-05'
        },
        {
          id: '3',
          userName: '喜马拉雅',
          email: '823645129@qq.com',
          phoneNum: '18672953119',
          status: '2',
          createTime: '2023-05-05'
        },
        {
          id: '3',
          userName: '喜马拉雅',
          email: '823645129@qq.com',
          phoneNum: '18672953119',
          status: '2',
          createTime: '2023-05-05'
        },
        {
          id: '3',
          userName: '喜马拉雅',
          email: '823645129@qq.com',
          phoneNum: '18672953119',
          status: '2',
          createTime: '2023-05-05'
        },
        {
          id: '3',
          userName: '喜马拉雅',
          email: '823645129@qq.com',
          phoneNum: '18672953119',
          status: '2',
          createTime: '2023-05-05'
        },
        {
          id: '3',
          userName: '喜马拉雅',
          email: '823645129@qq.com',
          phoneNum: '18672953119',
          status: '2',
          createTime: '2023-05-05'
        },
        {
          id: '3',
          userName: '喜马拉雅',
          email: '823645129@qq.com',
          phoneNum: '18672953119',
          status: '2',
          createTime: '2023-05-05'
        },
        {
          id: '3',
          userName: '喜马拉雅',
          email: '823645129@qq.com',
          phoneNum: '18672953119',
          status: '2',
          createTime: '2023-05-05'
        },
        {
          id: '3',
          userName: '喜马拉雅',
          email: '823645129@qq.com',
          phoneNum: '18672953119',
          status: '2',
          createTime: '2023-05-05'
        },
        {
          id: '3',
          userName: '喜马拉雅',
          email: '823645129@qq.com',
          phoneNum: '18672953119',
          status: '2',
          createTime: '2023-05-05'
        },
      ]
    }
  }
}
</script>
<style scoped>
#app{
  /* background: pink; */
  width: 1000px;
  min-height: 500px;
  border:1px dotted red;
}

</style>