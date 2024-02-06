async function createRegion(){

    let status = 0;
    let message ="";

    let regionid = document.getElementById("regionId").value;
    let regionName = document.getElementById("regionName").value;
    
    let jsobject = {"regionid":regionid,"regionName":regionName};
    
    let xhttp = new XMLHttpRequest;
    
    xhttp.open("POST","http://localhost:6010/regions/create");

    let jsonstring = JSON.stringify(jsobject);

    xhttp.send(jsonstring);

    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4 && xhttp.status == 200){

            const response = JSON.parse(xhttp.response);

            status = response.status;
            message = response.message;

            console.log(status);
            console.log(message);
        }
        
        if(status == 200){
            document.getElementById("result").innnerHTML = message;
        }
        else{
            document.getElementById("result").innerHTML = "Region NOT created";
        }
    }

}