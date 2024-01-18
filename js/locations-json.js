function main() {
    let locationsArray = [];
    let header =
        "<tr><th>Location_Id</th><th>Street_Address</th><th>Postal Code</th><th>City</th><th>State_Province</th><th>Country_Id</th></tr>";
    $.getJSON("../json/locations.json", function(response){
        locationsArray = response;
        console.log(locationsArray);
    });
    let rows = "";

    for(let i=0;i<locationsArray.length;i++){
        let locationId = locationsArray[i].locationId;
        let streetAddress = locationsArray[i].streetAddress;
        let postalCode = locationsArray[i].postalCode;
        let city = locationsArray[i].city;
        let countryId = locationsArray[i].countryId;
        let row = "<td>"+locationId+"</td><td>"+streetAddress+"</td><td>"+postalCode+"</td><td>"+city+"</td><td>"+countryId+"</td>";
        rows = rows + row;
    }
    document.getElementById("locations").innerHTML = "<table>" + header + "" + rows + "</table>"
    }