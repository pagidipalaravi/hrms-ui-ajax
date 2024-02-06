async function createEmployee() {
    let status = 0;
    let message = "";

    let employeeId = document.getElementById("employeeId").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let hireDate = document.getElementById("hireDate").value;
    let salary = document.getElementById("salary").value;
    let jobId = document.getElementById("jobId").value;
    let commisionPct = document.getElementById("commisionPct").value;
    let managerId = document.getElementById("managerId").value;
    let departmentId = document.getElementById("departmentId").value;

    let xhttp = new XMLHttpRequest;

    let jsobject = {
                    "employeeId":employeeId,
                    "firstName":firstName,
                    "lastName":lastName,
                    "email":email,
                    "phoneNumber":phoneNumber,
                    "hireDate":hireDate,
                    "salary":salary,
                    "jobId":jobId,
                    "commisionPct":commisionPct,
                    "managerId":managerId,
                    "departmentId":departmentId
                }

    xhttp.open("POST","http://localhost:6010/employees/");

    let jsonstring = JSON.stringify(jsobject);

    xhttp.send(jsonstring);

    xhttp.onreadystatechange = function() {
        if(xhttp.readyState == 4 && xhttp.status == 200){
            let result = xhttp.response;

            status = result.status;
            message = result.message
        }
        if(status == 200){
            document.getElementById("res").innerHTML = message;
        }
        else{
            document.getElementById("res").innerHTML = "Employee NOT created";
        }
    }

}