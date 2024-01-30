function main(){
	employees();
}
async function employees(){
	let tableHeader = "<tr><th>employeeId</th><th>firstName</th><th>lastName</th><th>email</th><th>phoneNumber</th><th>hireDate</th><th>salary</th><th>jobId</th><th>commisionPct</th><th>managerId</th><th>departmentId</th></tr>";
      let xhr = new XMLHttpRequest()
	xhr.open("GET","http://localhost:6010/employees/",true);
	console.log("after open ready state " +xhr.readyState);
	xhr.send();
    console.log("after send readystate " + xhr.readyState);
	let tableData = "";
	xhr.onreadystatechange = function(){
		console.log("onreadystatechange readystate "+xhr.readyState);
	if(xhr.readyState == 4 && xhr.status == 200){
			console.log("readystate " + xhr.readyState);
			const employeesObject = JSON.parse(xhr.response);
			const employeesArray = employeesObject.result;
			console.log(employeesArray);
			for(let i=0; i<employeesArray.length; i++){
				let employeeId =  employeesArray[i].employeeId ;
				let firstName = employeesArray[i].firstName;
				let lastName = employeesArray[i].lastName;
				let email = employeesArray[i].email; 
				let phoneNumber = employeesArray[i].phoneNumber;
				let hireDate = employeesArray[i].hireDate;
				let salary = employeesArray[i].salary;
				let jobId = employeesArray[i].jobId;
				let commisionPct = employeesArray[i].commisionPct;
				let managerId  = employeesArray[i].managerId;
				let departmentId =employeesArray[i].departmentId; 
			tableData +="<tr><td>"+employeeId+"</td><td>"+firstName+"</td><td>"+lastName+"</td><td>"+email+"</td><td>"+phoneNumber+"</td><td>"+hireDate+"</td><td>"+salary+"</td><td>"+jobId+"</td><td>"+commisionPct+"</td><td>"+managerId+"</td><td>"+departmentId+"</td></tr>";
			}
			table = "<table>"+tableHeader+ " "+tableData+"</table>"
			document.getElementById("employees").innerHTML = table;
	}
	 
	}
}