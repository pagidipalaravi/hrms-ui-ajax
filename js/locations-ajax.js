function main() {
    getLocations();
}
async function getLocations() {
    let header =
        "<tr><th>LOCATION_ID</th><th>STREET_ADDRESS</th><th>POSTAL_CODE</th><th>CITY</th><th>STATE_PROVINCE</th><th>COUNTRY_ID</th></tr>";
    //create XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    console.log("after new readystate = " + xhr.readyState);
    //open the request to the server
    xhr.open("GET", "http://localhost:6010/locations/", true);
    console.log("after open readystate " + xhr.readyState);
    //send the XMLHttpRequest to the server
    xhr.send();
    //Has to wait but javascript won't wait because javascript is Synchronous
    console.log("after send readystate " + xhr.readyState);

    // call back function. when the state will change, the below function will be executed.
    xhr.onreadystatechange = function () {
        console.log("onreadystatechange readystate " + xhr.readyState);
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log("readystate " + xhr.readyState);
            const locationsObject = JSON.parse(xhr.response);
            const locationStatus = locationsObject.status;
            const locationsMessage = locationsObject.message;
            const locationsArray = locationsObject.result;
            if (locationStatus == 200 && locationsMessage == "getting locationsList ") {
                let rows = "";
                for (let i = 0; i < locationsArray.length; i++) {
                    let locationId = locationsArray[i].locationId;
                    let streetAddress = locationsArray[i].streetAddress;
                    let postalCode = locationsArray[i].postalCode;
                    let city = locationsArray[i].city;
                    let stateProvince = locationsArray[i].stateProvince;
                    let countryId = locationsArray[i].countryId;
                    rows += "<tr><td>" + locationId + "</td><td>" + streetAddress + "</td><td>" + postalCode + "</td><td>" + city + "</td><td> " + stateProvince + "</td><td>" + countryId + "</td><td>";
                }
                console.log(rows);
                document.getElementById("locations").innerHTML = "<table>" + header + "" + rows + "</table>"
            }
        }
    }
}