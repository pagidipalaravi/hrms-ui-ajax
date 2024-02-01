function main() {
    getCountries();
}

async function getCountries() {
    let header = "<tr><th>COUNTRY_ID</th><th>COUNTRY_NAME</th><th>REGION_ID</th></tr>";
    //create XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    console.log("after new readystate = " + xhr.readyState);
    //open the request to the server
    xhr.open("GET", "http://localhost:6010/countries/", true);
    console.log("after open readystate " + xhr.readyState);
    //send the XMLHttpRequest to the server
    xhr.send();
    //Has to wait but javascript won't wait because javascript is Synchronous
    console.log("after send readystate " + xhr.readyState);
    // call back function. when the state will change, the below function will be executed.
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200);
        console.log("readystate " + xhr.readyState);
        let countriesObject = JSON.parse(xhr.response);
        let countriesStatus = countriesObject.status;
        let countriesMessage = countriesObject.message;
        let countriesArray = countriesObject.result;
        if (countriesStatus == 200 && countriesMessage == "getting countries list ") {
            let rows = "";
            for (let i = 0; i < countriesArray.length; i++) {
                let countryId = countriesArray[i].countryId;
                let countryName = countriesArray[i].countryName;
                let regionId = countriesArray[i].regionId;
                rows += "<tr><td>" + countryId + "</td><td>" + countryName + "</td><td>" + regionId + "</td></tr>";
            }
            document.getElementById("countries").innerHTML = "<table>" + header + "" + rows + "</table>";
        }
    }
}