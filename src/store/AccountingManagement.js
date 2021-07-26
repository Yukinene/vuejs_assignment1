import Vue from 'vue'
import Vuex from 'vuex'
import DateData from './data.json'
import DateManage from './DateDataManagement'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    dateDataList: [],
    total: {
      amount: 0
    }
  },
  getters:{
    dateDataList: (state) => state.dateDataList,
    accountTotal: (state)=> state.total
  },
  mutations: {
    fetchSetOfData(state){
      let {list} = DateData
      if(list){
        state.dateDataList = []
        for(let i=0;i<list.length;i++){
          insertDataFunc(state, list[i])
        }
      }
    },
    insertData(state, {date, income, expense, detail}){
      insertDataFunc(state, {date, income, expense, detail})
    },
    updateTotal(state){
      state.total.amount = 0
      for(let i=0;i<state.dateDataList.length;i++){
        state.total.amount += DateManage.getTotal(state.dateDataList[i])
      }
    }
  },
  actions: {
      insertData({commit},data){
        if(data){
          let {date, income, expense, detail} = data
          let err = errorCheck(date, income, expense, detail)
          if(!err)
            commit('insertData', data)
          else 
            return err
        }
      },
      fetchSetOfData({commit}){
        commit('fetchSetOfData')
      },
      updateTotal({commit}){
        commit('updateTotal')
      }
  },
  modules: {
  }
})

function insertDataFunc(state, {date, income, expense, detail}){
  let error = errorCheck(date, income, expense, detail)
  if(!error){
    let d
    if(!date){
      d = new Date(Date.now())
    }else d = new Date(date)
    state.dateDataList.push({date: d, income, expense, detail})
    state.dateDataList = state.dateDataList.sort(DateManage.compare)
  }
  else
      console.log(error)
}

function errorCheck(dateString, income, expense, detail){
  let date = new Date(dateString)
  if(date && income && expense && detail){
      if(date == 'Invalid Date' && dateString)
      {
          return "ข้อมูล วัน/เดือน/ปี ไม่ถูกต้อง"
      }
      else if(0 > income || !(/^\d+$/.test(income))){
          return "กรุณากรอกข้อมูลรายรับเป็นเลขจำนวนบวก"
      }
      else if(0 > expense || !(/^\d+$/.test(expense))){
          return "กรุณากรอกข้อมูลรายจ่ายเป็นเลขจำนวนบวก"
      }
  }
  else
    return "กรุณากรอกข้อมูลให้ครบ"
}