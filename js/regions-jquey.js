function main() {
    let regionsArray = [];
    let header =
        "<tr><th>Region_ID</th><th>REGION_NAME</th></tr>";
    $.getJSON("http://localhost:6010/regions/", function(response){
        regionsArray = response;
        console.log(regionsArray);
		let rows = "";
		for(let i=0;i<regionsArray.length;i++){
			let regionid = regionsArray[i].regionid;
			let regionName = regionsArray[i].regionName;
			let row = "<tr><td>"+regionid+"</td><td>"+regionName+"</td></tr>";
			rows = rows + row;
		}
		document.getElementById("regions").innerHTML = 
		"<table>" + header + "" + rows + "</table>"
    });
}