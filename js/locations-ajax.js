async function main() {
<<<<<<< Updated upstream

    let locations = [];

    let xhttp = new XMLHttpRequest;

    xhttp.open("GET","http://localhost:6010/locations/");

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4 && xhttp.status == 200){
            const text = JSON.parse(xhttp.response);

            locations = text.result;

            head = `<tr>
                        <th>LOCATIONS ID</th>
                        <th>STREET ADDRESS</th>
                        <th>POSTAL CODE</th>
                        <th>CITY</th>
                        <th>STATE PROVINCE</th>
                        <th>COUNTRY ID</th>
                    </tr>`

            data = "";

=======
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
            
>>>>>>> Stashed changes
            for(i=0;i<locations.length;i++){
                data += `<tr>
                            <td>${locations[i].locationId}</td>
                            <td>${locations[i].streetAddress}</td>
                            <td>${locations[i].postalCode}</td>
                            <td>${locations[i].city}</td>
                            <td>${locations[i].stateProvince}</td>
                            <td>${locations[i].countryId}</td>
<<<<<<< Updated upstream
                        </tr>`
            }

            t = "<table>" + head + data + "</table>";

            document.getElementById("result").innerHTML = t;

=======
                         <tr>`
            }

            t = "<table>"+head+data+"</table>";
            document.getElementById("result").innerHTML=t;
>>>>>>> Stashed changes
        }
    }
}
