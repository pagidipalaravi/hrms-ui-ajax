/*function main() {
    document.getElementById("tr1").innerHTML = 
    "<td>1000</td><td>1297</td><td>Via Cola di Rie</td><td>00989</td><td>Roma</td><td>IT</td>";
}
//TODO: use AJAX to get the data from the middleware

//http://localhost:6010/locations/
*/
function main(){
	locations();
}
async function locations(){
	let tableHeader = "<tr><th>locationId</th><th>streetAddress</th><th>postalCode</th><th>city</th><th>stateProvince</th><th>countryId</th></tr>";
	let xhr = new XMLHttpRequest();
	xhr.open("GET","http://localhost:6010/locations/",true);
	console.log("after open ready state " +xhr.readyState);
	xhr.send();
    console.log("after send readystate " + xhr.readyState);
	let tableData = "";
	xhr.onreadystatechange = function(){
		console.log("onreadystatechange readystate "+xhr.readyState);
	if(xhr.readyState == 4 && xhr.status == 200){
			console.log("readystate " + xhr.readyState);
			const responseObject = JSON.parse(xhr.response);
			const responseArray = responseObject.result;
			console.log(responseArray);
			for(let i=0; i<responseArray.length;i++){
				let locationId = responseArray[i].locationId ;
				let streetAddress = responseArray[i].streetAddress;
				let postalCode = responseArray[i].postalCode;
				let city = responseArray[i].city;
				let stateProvince = responseArray[i].stateProvince;
				let countryId = responseArray[i].countryId;
	 tableData +="<tr><td>"+locationId+"</td><td>"+streetAddress+"</td><td>"+postalCode+"</td><td>"+city+"</td><td>"+stateProvince+"</td><td>"+countryId+"</td></tr>";
			}
			table = "<table>"+tableHeader+tableData+"</table>"
			document.getElementById("tr1").innerHTML = table;
	}
	 
	}
}
			