function main() {
    getRegions();
}
async function getRegions() {
    let header =
        "<tr><th>Region_ID</th><th>REGION_NAME</th></tr>";
    //create XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    console.log("after new readystate = " + xhr.readyState);
    //open the request to the server
    xhr.open("GET", "http://localhost:6010/regions/", true);
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
            const responseArray = JSON.parse(xhr.response);
            console.log(responseArray);
            let rows = "";
            for (let i = 0; i < responseArray.length; i++) {
                let regionid = responseArray[i].regionid;
                let regionName = responseArray[i].regionName;
                rows += "<tr><td>" + regionid + "</td><td>" + regionName + "</td></tr>";
                //rows = rows + row;
            }
            console.log(rows);
            document.getElementById("regions").innerHTML = "<table>" + header + "" + rows + "</table>"
        }
    }
}