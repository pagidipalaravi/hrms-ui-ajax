function main(){
	countries();
}
async function countries(){
	let tableHeader = "<tr><th>Country_Id</th><th>Country_Name</th><th>Region_Id</th></tr>";
      let xhr = new XMLHttpRequest()
	xhr.open("GET","http://localhost:6010/countries/",true);
	console.log("after open ready state " +xhr.readyState);
	xhr.send();
    console.log("after send readystate " + xhr.readyState);
	let tableData = "";
	xhr.onreadystatechange = function(){
		console.log("onreadystatechange readystate "+xhr.readyState);
	if(xhr.readyState == 4 && xhr.status == 200){
			console.log("readystate " + xhr.readyState);
			const countriesObject = JSON.parse(xhr.response);
			const countriesArray = countriesObject.result;
			console.log(countriesArray);
			for(let i=0; i<countriesArray.length; i++){
				let countryId =  countriesArray[i].countryId ;
				let countryName = countriesArray[i].countryName;
				let regionId = countriesArray[i].regionId;   
			tableData +="<tr><td>"+countryId+"</td><td>"+countryName+"</td><td>"+regionId+"</td></tr>";
			}
			table = "<table>"+tableHeader+ " "+tableData+"</table>"
			document.getElementById("countries").innerHTML = table;
	}
	 
	}
}