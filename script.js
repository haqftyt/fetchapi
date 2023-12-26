let show=document.getElementById("showAll");
show.addEventListener('click',function(){
  // alert()
   allEmployees()
})

function allEmployees(){
    fetch("https://type.fit/api/quotes").then(data=>{
        return data.json();
    }).then(val=>{
        console.log(val[0].author);
        let storedata='';
        val.map((values)=>{
            storedata += ` <div class="col-md-4 py-3">
            <div class="card bg-primary">
                <div class="card-body">
                    <p><strong>Text: </strong>${values.text}</p>
                    <p><strong>Author: </strong>${values.author}</p>
                </div>
            </div>
         </div>`
        });
        document.getElementById('allList').innerHTML=storedata;
    })
}
