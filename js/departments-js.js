function main() {
    let header =
        "<tr><th>DEPARTMENT_ID</th><th>DEPARTMENT_NAME</th><th> HOD_ID</th><th>LOCATIONS</th></tr>";
    let data = "<td>1001</td><td>MCA</td><td>221</td><td>vemanapuram</td>";
    document.getElementById("locations").innerHTML = "<table>" + header + "" + data + "</table>"
} 
