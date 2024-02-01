function createDepartments() {
    let status = "error";
    let departmentName = document.getElementById("departmentName").value;
    let managerIdString = document.getElementById("managerId").value;
    let managerIdNumber = parseInt(managerIdString);
    let locationIdString = document.getElementById("locationId").value;
    let locationIdNumber = parseInt(locationIdString);
    console.log(departmentName);
    console.log(managerIdNumber);
    console.log(locationIdNumber);
    let xhr = new XMLHttpRequest()
    xhr.open("POST", "http://localhost:6010/departments/");
    let javaScriptString = { "departmentName": departmentName, "managerId": managerIdNumber, "locationId": locationIdNumber}
    var myJsonString = JSON.stringify(javaScriptString);
    console.log(myJsonString);
    xhr.send(myJsonString);
    xhr.onreadystatechange = function () {
        console.log("onreadystatechange readystate " + xhr.readyState);
        if (xhr.readyState == 4 && xhr.status == 200) {
            status = "Department created successfully with Department Name = " + departmentName + ", Manager Id = " + managerIdNumber + " and Location Id = " +locationIdNumber;
            document.getElementById("message").innerHTML = status;
            console.log("Department created successfully");
            document.getElementById("departmentName").value = "";
            document.getElementById("managerId").value = "";
            document.getElementById("locationId").value = "";
        }
        else {
            
        }
    }
}