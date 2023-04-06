url=fetch("https://kontests.net/api/v1/all")
console.log(url)
url.then((v)=>{
    return v.json()

}).then((v)=>{
    ihtml=""
    console.log(v)
    for(item in v){
        
        ihtml +=  ` 
         <div id="card">
        <div id="card_tittle">
           
        
        
        
        
        
        ${v[item].name}

        </div>
        
        <p>
        ${v[item].start_time}
        </p>
       
       
        
        <p id="card body">
        ${v[item].end_time}

        </p>
        
        <button><a href=" ${v[item].url}" id="visit">visit ${v[item].name}</a></button>
    </div>`
} 
document.getElementById("con").innerHTML=ihtml
})