<template>
  <div>
      <table>
          <thead>
              <tr>
                  <th>วัน/เดือน/ปี (Date)</th>
                  <th>รายรับ (Income)</th>
                  <th>รายจ่าย (Expense)</th>
                  <th>รวม (Total)</th>
                  <th>รายละเอียด (Detail)</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(dateData, i) in dateList " :key="i">
                  <td>{{DateManage.getDate(dateData)}}</td>
                  <td>{{dateData.income}}</td>
                  <td>{{dateData.expense}}</td>
                  <td>{{DateManage.getTotal(dateData)}}</td>
                  <td>{{dateData.detail}}</td>
              </tr>
          </tbody>
      </table>
      <p>รวมเป็นเงิน (Total Amount) {{total.amount}}</p>
  </div>
</template>

<script>
import ACM from '@/store/AccountingManagement'
import DateManage from '@/store/DateDataManagement.js'
export default {
    data(){
        return{
            dateList: [],
            DateManage,
            total: 0
        }
    },
    created(){
        this.fetchDateData()
    },
    methods:{
        fetchDateData(){
            ACM.dispatch('fetchSetOfData')
            this.dateList = ACM.getters.dateDataList
            this.total = ACM.getters.accountTotal
            ACM.dispatch('updateTotal')
        }
    }
}
</script>

<style>
    
</style>