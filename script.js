showAll.addEventListener('click',function(){
   // alert();
   allEmployees()
})

function allEmployees(){
    var allshow='';
    var xmlhttp= new XMLHttpRequest();
    var url="https://dummy.restapiexample.com/api/v1/employees";
    xmlhttp.open('GET',url,true);
    xmlhttp.onload = function(){
        if(this.readyState == 4 && this.status == 200){
            allshow=JSON.parse(this.responseText);
        }
        console.log(allshow);
    }
    xmlhttp.send();
}
