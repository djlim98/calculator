class calendar{
    constructor(year, month, holiday){
    this.year=year;
    this.month=month;
    let temp=new Date(year,month-1);
    this.date=[];
    while (temp.getMonth()===month-1) {
        if (temp.getDay()!==6 && temp.getDay()!==0){
            this.date.push(temp.getDate());
        } 
        temp.setDate(temp.getDate()+1);
    };
    this.date=this.date.filter(x=>!holiday.includes(x));
    };
}

module.exports=calendar;