import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    multipleSelection:[],
    tableData:[],
    loading:false
  },
  mutations: {
    SET_MULTIPLESELECTION(state,payload){
      state.multipleSelection = payload
    },
    SET_TABLEDATA(state,payload){
      state.tableData = payload
    },
    SET_LOADING(state,payload){
      state.loading = payload
    }
  },
  actions:{
    handleSearch({commit},payload){
      console.log('查询参数',payload)
      commit('SET_LOADING',true)

      const mockData =  [
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
        }
      ]

      // 模拟接口返回延时
      setTimeout(()=>{
        commit('SET_LOADING',false)
        commit('SET_TABLEDATA',mockData)
      },1000)
    }
  }
})

export default store