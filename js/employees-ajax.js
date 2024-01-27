function main() {
    getEmployees();
}

async function getEmployees() {
    let header = "<tr><th>EMPLOYEE_ID</th><th>FIRST_NAME</th><th>LAST_NAME</th><th>EMAIL</th><th>PHONE_NUMBER</th><th>HIRE_DATE</th><th>JOB_ID</th><th>SALARY</th><th>COMMISSION_PCT</th><th>MANAGER_ID</th><th>DEPARTMENT_ID</th></tr>";
    //create XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    console.log("after new readystate = " + xhr.readyState);
    //open the request to the server
    xhr.open("GET", "http://localhost:6010/employees/", true);
    console.log("after open readystate " + xhr.readyState);
    //send the XMLHttpRequest to the server
    xhr.send();
    //Has to wait but javascript won't wait because javascript is Synchronous
    console.log("after send readystate " + xhr.readyState);
    // call back function. when the state will change, the below function will be executed.
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200);
        console.log("readystate " + xhr.readyState);
        let employeesObject = JSON.parse(xhr.response);
        let employeesStatus = employeesObject.status;
        let employeesMessage = employeesObject.message;
        let employeesArray = employeesObject.result;
        if (employeesStatus == 200 && employeesMessage == "getting employees list ") {
            let rows = "";
            for (let i = 0; i < employeesArray.length; i++) {
                let employeeId = employeesArray[i].employeeId;
                let firstName = employeesArray[i].firstName;
                let lastName = employeesArray[i].lastName;
                let email = employeesArray[i].email;
                let phoneNumber = employeesArray[i].phoneNumber;
                let hireDate = employeesArray[i].hireDate;
                let salary = employeesArray[i].salary;
                let jobId = employeesArray[i].jobId;
                let commissionPct = employeesArray[i].commissionPct;
                let managerId = employeesArray[i].managerId;
                let departmentId = employeesArray[i].departmentId;
                rows += "<tr><td>" + employeeId + "</td><td>" + firstName + "</td><td>" + lastName + "</td><td>" + email + "</td><td>" + phoneNumber + "</td><td>" + hireDate + "</td><td>" + salary + "</td><td>" + jobId + "</td><td>" + commissionPct + "</td><td>" + managerId + "</td><td>" + departmentId + "</td></tr>";
            }
            document.getElementById("employees").innerHTML = "<table>" + header + "" + rows + "</table>";
        }
    }
}