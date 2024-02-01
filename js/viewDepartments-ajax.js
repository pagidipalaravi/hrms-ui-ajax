function main() {
    getDepartments();
}

async function getDepartments() {
    let header = "<tr><th>DEPARTMENT_ID</th><th>DEPARTMENT_NAME</th><th>MANAGER_ID</th><th>LOCATION_ID</th></tr>";
    //create XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    console.log("after new readystate = " + xhr.readyState);
    //open the request to the server
    xhr.open("GET", "http://localhost:6010/departments/", true);
    console.log("after open readystate " + xhr.readyState);
    //send the XMLHttpRequest to the server
    xhr.send();
    //Has to wait but javascript won't wait because javascript is Synchronous
    console.log("after send readystate " + xhr.readyState);
    // call back function. when the state will change, the below function will be executed.
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200);
        console.log("readystate " + xhr.readyState);
        let departmentsObject = JSON.parse(xhr.response);
        let departmentStatus = departmentsObject.status;
        let departmentMessage = departmentsObject.message;
        let departmentsArray = departmentsObject.result;
        if (departmentStatus == 200 && departmentMessage == "getting departments list") {
            let rows = "";
            for (let i = 0; i < departmentsArray.length; i++) {
                let departmentId = departmentsArray[i].departmentId;
                let departmentName = departmentsArray[i].departmentName;
                let managerId = departmentsArray[i].managerId;
                let locationId = departmentsArray[i].locationId;
                rows += "<tr><td>" + departmentId + "</td><td>" + departmentName + "</td><td>" + managerId + "</td><td>" + locationId + "</td></tr>";
            }
            document.getElementById("departments").innerHTML = "<table>" + header + "" + rows + "</table>";
        }
    }
}