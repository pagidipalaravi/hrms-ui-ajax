function main() {
    let header =
        "<tr><th>Location_Id</th><th>Street_Address</th><th>Postal Code</th><th>City</th><th>State_Province</th><th>Country_Id</th></tr>";
    let data = "<td>1000</td><td>1297</td><td>Via Cola di Rie</td><td>00989</td><td>Roma</td><td>IT</td>";
    document.getElementById("locations").innerHTML = "<table>" + header + "" + data + "</table>"
}