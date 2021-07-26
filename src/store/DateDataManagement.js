
export default class DayData{

    static getTotal(data){
        if(data)
        return data.income - data.expense
    }

    static getDate(data){
        if(data)
        return String(data.date.getDate()).padStart(2,'0')
            +'/'+String(data.date.getMonth()).padStart(2,'0')
            +'/'+data.date.getFullYear()
    }

    static compare(a, b){
        let d1 = a.date.getFullYear()+a.date.getMonth()+a.date.getDate()
        let d2 = b.date.getFullYear()+b.date.getMonth()+b.date.getDate()
        if(d1 < d2){
            return 1
        }
        else if(d2 < d1){
            return -1
        }
        else return 0
    }
}