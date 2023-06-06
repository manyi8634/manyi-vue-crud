import Vue from 'vue'
import Vuex from 'vuex'
import mockData from './mock.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    multipleSelection:[],// table 选中的数据
    tableData:{ // 接口返回的数据
      total:0,
      data:[]
    },
    pageNum:1, // 当前页
    pageSize:10, // 每页条数
    form:{}, // 表单数据
    loading:false // 数据加载loading
  },
  mutations: {
    SET_MULTIPLESELECTION(state,payload){
      state.multipleSelection = payload
    },
    SET_TABLEDATA(state,payload){
      state.tableData = payload
    },
    SET_PAGENUM(state,payload){
      state.pageNum = payload
    },
    SET_PAGESIZE(state,payload){
      state.pageSize = payload
    },
    SET_FORM(state,payload){
      state.form = payload
    },
    SET_LOADING(state,payload){
      state.loading = payload
    }
  },
  // CRUD 接口调用
  actions:{
    delete({dispatch},payload){
      if(Array.isArray(payload)){
        console.log('批量删除参数',payload)
      }else{
        console.log('删除参数',payload)
      }
      // 删除成功后调用查询，需重置分页数据
      dispatch('select',{resetPage:true})
    },
  
    
    select({commit,state},payload){
      // 初始化/点击查询时，重置分页数据并保存查询参数，其他场景payload为undefined不保存
      if(payload?.form){
        commit('SET_FORM',payload)
      }
      if(payload?.resetPage){
        commit('SET_PAGENUM',1)
        commit('SET_PAGESIZE',10)
      }
      const params = {
        pageNum:state.pageNum,
        pageSize:state.pageSize,
        ...state.form
      }
      console.log('查询参数',params)
      commit('SET_LOADING',true)
      // 模拟接口返回延时
      setTimeout(()=>{
        commit('SET_LOADING',false)
        commit('SET_TABLEDATA',mockData)
      },800)
    },
    
  }
})

export default store