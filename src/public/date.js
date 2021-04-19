const TAB = ' '; 
function prettyJson(jsonText) { 
    if(!jsonText) { return jsonText; } 
    var prettyJson = new Array(); 
    var depth = 0; 
    var currChar; 
    var prevChar; 
    var doubleQuoteIn = false; 
    for(var i = 0; i < jsonText.length; i++)
     { currChar = jsonText.charAt(i); 
        if(currChar == '\"') { 
            if(prevChar != '\\')
             { doubleQuoteIn = !doubleQuoteIn; } } 
             switch(currChar) { 
                 case '{': prettyJson.push(currChar);
                 if(!doubleQuoteIn)
                  { prettyJson.push('\n');
                   insertTab(prettyJson, ++depth);
                 } break; 
                 case '}': if(!doubleQuoteIn) { prettyJson.push('\n'); insertTab(prettyJson, --depth); } prettyJson.push(currChar); break; case ',': prettyJson.push(currChar); if(!doubleQuoteIn) { prettyJson.push('\n'); insertTab(prettyJson, depth); } break; default: prettyJson.push(currChar); break; } prevChar = currChar; } return prettyJson.join(''); } function insertTab(prettyJson, depth) { for(var i = 0; i < depth; i++) { prettyJson.push(TAB); } }


async function sendData(){
    let people=document.querySelector('[name=people]').value;
    let year=document.querySelector('[name=year]').value;
    let holiday=document.querySelector('[name=holiday]').value;
    let extraTime=document.querySelector('[name=extraTime]').value;
    console.log(people,year,holiday,extraTime);
    
    people=people.split(', ');
    
    year=year.split('-');
    
    holiday=holiday.split(', ');
    holiday=holiday.map(x=>Number(x));

    const time={};
    extraTime=extraTime.split(', ');
    extraTime.forEach(element => {
        element=element.split(':');
        time[element[0]]=Number(element[1])
    });

    const data ={
        people:people,
        year:Number(year[0]),
        month:Number(year[1]),
        holiday:holiday,
        extraTime:time
    };
    console.log(data);
    
    const rdata=await fetch('/calculate',{
        method: "POST",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify(data),})
    .then((response) => {
        const data=response.json();
        console.log(data);
        return data;
    })   
    .catch((error) => console.log("error:", error));

    console.log(rdata);

    document.querySelector('[name=result]').value=prettyJson(JSON.stringify(rdata));
};