<template>
    <div>
        <label for="income">รายรับ (Income): </label>
        <input type="text" v-model="form.income"><br>
        <label for="expense">รายจ่าย (Expense): </label>
        <input type="text" v-model="form.expense"><br>
        <label for="detail">รายละเอียด: </label>
        <input type="text" v-model="form.detail"><br>
        <label for="option">Optional: </label><br>
        <label for="date">วันที่: </label>
        <input type="date" v-model="form.date"><br>
                <p>{{err}}</p>
        <button v-on:click="updateData()">ตกลง</button>
    </div>

</template>

<script>
import ACM from '@/store/AccountingManagement'
export default {
    data(){
        return{
            formDefault:{
                "date": "", 
                "income": "", 
                "expense": "", 
                "detail": ""
            },
            form: {
                "date": "", 
                "income": "", 
                "expense": "", 
                "detail": ""
            },
            err: ""
        }
    },
    methods:{
        updateData(){
            ACM.dispatch('insertData',this.form).then((err)=>{
                this.err = err
                ACM.dispatch('updateTotal')
            })
            this.resetForm()
        },
        resetForm(){
            this.form = JSON.parse(JSON.stringify(this.formDefault))
        }
    }
}
</script>

<style>

</style>