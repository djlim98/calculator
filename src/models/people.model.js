class people {
    constructor(people){
        this.people=[]
        people.forEach(person => {
            this.people.push({
                name: person,
                morning:[],
                middle:[],
                night1:[],
                night2:[],
                total:0,
                totalTime:0
            });
        });
    }
    add_time(time, day){
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
        this.people[0][time].push(day);
        this.people[0].total+=1;
        this.people[0].totalTime+=timeRate[time];
    };




}

module.exports=people;