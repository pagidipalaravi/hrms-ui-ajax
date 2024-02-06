async function createLocation(){

    let status = 0;
    let message = "";

    let locationId = document.getElementById("locationId").value;
    let streetAddress = document.getElementById("streetAddress").value;
    let postalCode = document.getElementById("postalCode").value;
    let city = document.getElementById("city").value;
    let stateProvince = document.getElementById("stateprovince").value;
    let countryId = document.getElementById("countryId").value;

    let jsobject = {"locationId":locationId,"streetAddress":streetAddress,"postalCode":postalCode,"city":city,"stateProvince":stateProvince,"countryId":countryId};

    let xhttp = new XMLHttpRequest;

    xhttp.open("POST","http://localhost:6010/locations/");

    let jsonString = JSON.stringify(jsobject);

    xhttp.send(jsonString);

    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200){
            const response = JSON.parse(xhttp.response);
            
            status = response.status;
            message = response.message; 
        }
        
        if(status == 200){
            document.getElementById("result").innerHTML = message;
        }
        else{
            document.getElementById("result").innerHTML = "Location Not Created";
        }
    }
}