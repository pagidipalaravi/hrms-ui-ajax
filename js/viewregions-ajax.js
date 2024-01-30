function main(){
	regions();
}
async function regions(){
	let tableHeader = "<tr><th>regionId</th><th>regionName</th></tr>";
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
			const regionObject = JSON.parse(xhr.response);
			const regionArray = regionObject.result;
			console.log(regionArray);
			for(let i=0; i<regionArray.length; i++){
				let regionId =  regionArray[i].regionId ;
				let regionName = regionArray[i].regionName; 
			tableData +="<tr><td>"+regionId+"</td><td>"+regionName+"</td></tr>";
			}
		table = "<table>"+tableHeader+ " "+tableData+"</table>"
		document.getElementById("regions").innerHTML = table;
	}
}
}