function createRegion() {
    let status = "error";
    let regionIdString = document.getElementById("regionId").value;
    let regionIdNumber = parseInt(regionIdString);
    let regionName = document.getElementById("regionName").value;
    console.log(regionId);
    console.log(regionName);
    let xhr = new XMLHttpRequest()
    xhr.open("POST", "http://localhost:6010/regions/create");
    let javaScriptString = { "regionid": regionIdNumber, "regionName": regionName }
    var myJsonString = JSON.stringify(javaScriptString);
    console.log(myJsonString);
    xhr.send(myJsonString);
    xhr.onreadystatechange = function () {
        console.log("onreadystatechange readystate " + xhr.readyState);
        if (xhr.readyState == 4 && xhr.status == 200) {
            status = "region created successfully with region Id = " + regionIdNumber + " and region name = " + regionName;
            document.getElementById("message").innerHTML = status;
            console.log("region created successfully");
            document.getElementById("regionId").value = "";
            document.getElementById("regionName").value = "";
        }
        else {
            
        }
    }
}