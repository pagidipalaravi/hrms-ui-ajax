function main() {
    let departmentsArray = [];
    let header =
    "<tr> <th>Departments_Id</th><th>Department_Name</th><th>HOD_Id</th>	   <th>Location</th></tr>";
    $.getJSON("../json/departments.json", function(response){
        departmentsArray = response;
        console.log(departmentsArray);
    });
    let rows = "";
    for(let i=0;i<departmentsArray.length;i++){
        let Department_Id = departmentsArray[i].Department_Id;
        let Department_Name = departmentsArray[i].Department_Name;
        let HOD_Id = departmentsArray[i].HOD_Id;
        let Location = departmentsArray[i].Location;
        let row = "<td>"+departmentId+"</td><td>"+Department_Name+"</td><td>"+HOD_Id+"</td><td>"+Location+"</td>";
        rows = rows + row;
    }
    document.getElementById("departments").innerHTML = "<table>" + header + "" + rows + "</table>"
    }