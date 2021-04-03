class people {
    constructor(people,extraTime){
        this.people=[]
        people.forEach(person => {
            let totalTime=0;
            console.log(extraTime,person);
            if(extraTime[person]!==undefined){
                totalTime=extraTime[person];
            }
            this.people.push({
                name: person,
                morning:[],
                middle:[],
                night1:[],
                night2:[],
                total:0,
                totalTime:totalTime
            });
        });
        
    }
    add_time(time, day, dayWorker){
        const timeRate={
            morning:1,
            middle:0.5,
            night1:1,
            night2:1.5
        };
        
        this.people.sort((a,b)=>{
            return a.total-b.total
        });
        this.people.sort((a,b)=>{
            return a.totalTime-b.totalTime
        });
        this.people.sort((a,b)=>{
            return a[time].length-b[time].length
        });
        let i=0;
        let worker=this.people[i];
        while(dayWorker.includes(worker.name)){
            i+=1;
            console.log(worker.name)
            worker=this.people[i];
            console.log(worker.name)
        };
        worker[time].push(day);
        worker.total+=1;
        worker.totalTime+=timeRate[time];
        return worker.name;
    };




}

module.exports=people;