async function main() {
    let xhttp = new XMLHttpRequest;
    
    xhttp.open("GET","http://localhost:6010/locations/",true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(xhttp.readyState ==4 && xhttp.status==200){
            const response = JSON.parse(xhttp.response);

            locations = response.result;

            console.log(locations);

            head = `<tr>
			            <th>Location_Id</th>
			            <th>Street_Address</th>
			            <th>Postal Code</th>
			            <th>City</th>
			            <th>State_Province</th>
			            <th>Country_Id</th>
		            </tr>`;

            data = "";
            
            for(i=0;i<locations.length;i++){
                data += `<tr>
                            <td>${locations[i].locationId}</td>
                            <td>${locations[i].streetAddress}</td>
                            <td>${locations[i].postalCode}</td>
                            <td>${locations[i].city}</td>
                            <td>${locations[i].stateProvince}</td>
                            <td>${locations[i].countryId}</td>
                        </tr>`
            }

            t = "<table>" + head + data + "</table>";

            document.getElementById("result").innerHTML = t;

        }
    }
}
