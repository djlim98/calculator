const People=require('../models/people.model');
const Calendar=require('../models/calendar.model');

exports.calculate=(req,res)=>{
    const {people,year, month,holiday, extraTime}=req.body;
    const peopleObj=new People(people,extraTime);
    const calendar=new Calendar(year,month,holiday);
    
    console.log(peopleObj);

    calendar.date.forEach(date => {
        const timeList=['morning','middle','night1','night2'];
        const dayWorker=[];
        timeList.forEach(time => {
            const worker=peopleObj.add_time(time,date, dayWorker);
            dayWorker.push(worker);
            calendar.workSchedule[date][time]=worker;
        });
        console.log(dayWorker);
        
    });
    console.log(calendar);
    peopleObj.people.sort(function(a, b) { 
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });
    console.log(peopleObj.people);
    res.status(200).send({people:peopleObj.people, workSchedule:calendar.workSchedule});
};
