const People=require('../models/people.model');
const Calendar=require('../models/calendar.model');

exports.calculate=(req,res)=>{
    const people=new People(req.body.people);
    const {year, month,holiday, extraTime}=req.body;
    console.log(year);
    const calendar=new Calendar(year,month,holiday);
    
    console.log(calendar);

    calendar.date.forEach(date => {
        const timeList=['morning','middle','night1','night2'];
        timeList.forEach(time => {
            people.add_time(time,date);    
        });
        
    });
    console.log(people);
    res.status(200).send(people)
    return
};