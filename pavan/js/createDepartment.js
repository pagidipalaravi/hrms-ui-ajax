async function createDepartment() {
    let status = 0;
    let message = "";

    let departmentId = document.getElementById("departmentId").value;
    let departmentName = document.getElementById("departmentName").value;
    let managerId = document.getElementById("managerId").value;
    let locationId = document.getElementById("locationId").value;

    let jsobject = {"departmentId":departmentId,"departmentName":departmentName,"managerId":managerId,"locationId":locationId};

    let xhttp = new XMLHttpRequest;
    
    let jsonstring = JSON.stringify(jsobject);

    xhttp.open("POST","http://localhost:6010/departments/");

    xhttp.send(jsonstring);

    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200){
            const response = xhttp.response;

            status = response.status;
            message = response.message;
        }
        if(status == 200){
            document.getElementById("result").innerHTML = message;
        }
        else{
            document.getElementById("result").innerHTML = "Department Not Created";
        }
    }

}