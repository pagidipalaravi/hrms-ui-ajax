function main() {
    let regionsArray = [];
    let header =
        "<tr><th>Region_ID</th><th>REGION_NAME</th></tr>";
    $.getJSON("../json/regions.json", function(response){
        regionsArray = response;
        console.log(regionsArray);
    });
    let rows = "";

    for(let i=0;i<regionsArray.length;i++){
        let regionId = locationsArray[i].regionId;
        let regionName = locationsArray[i].regionName;
        let row = "<td>"+regionId+"</td><td>"+regionName+"</td>";
        rows = rows + row;
    }
    document.getElementById("regions").innerHTML = "<table>" + header + "" + rows + "</table>"
    }