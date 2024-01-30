function main(){
	getDepartments();
}
async function getDepartments(){
	let header = "<tr><th>departmentId</th><th>departmentName</th><th>managerId</th><th>locationId</th></tr>";
	
	let xhr = new XMLHttpRequest();
	xhr.open("GET","http://localhost:6010/departments/",true);
	console.log("after open ready state " +xhr.readyState);
	xhr.send();
	console.log("after send ready "+ xhr.readyState);
	let rows = "";
	xhr.onreadystatechange = function(){
		console.log("onreadystatechange readystate "+xhr.readyState);
		if(xhr.readyState == 4 && xhr.status == 200){
			console.log("readystate " + xhr.readyState);
			const responseObject = JSON.parse(xhr.response);
			const responseArray = responseObject.result;
			console.log(responseArray);
			for(let i=0; i<responseArray.length;i++){
				let departmentId = responseArray[i].departmentId;
				let departmentName = responseArray[i].departmentName;
				let managerId = responseArray[i].managerId;
				let locationId = responseArray[i].locationId;
	rows +="<tr><td>"+departmentId+"</td><td>"+departmentName+"</td><td>"+managerId+"</td><td>"+locationId+"</td></tr>";
			
			}
		table ="<table>"+header+rows+"</table>";
		document.getElementById("departments").innerHTML = table;
		}
	}
	
}