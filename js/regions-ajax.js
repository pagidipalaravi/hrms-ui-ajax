function main() {
<<<<<<< Updated upstream
    document.getElementById("tr1").innerHTML = "<td>1</td><td>Europe</td>";
}
=======
    let header =
        "<tr><th>Region_ID</th><th>REGION_NAME</th></tr>";
    let data = "<tr><td>1</td><td>Europe</td></tr>";
    data += "<tr><td>2</td><td>Americas</td></tr>";
    data += "<tr><td>3</td><td>Asia</td></tr>";
    data += "<tr><td>4</td><td>Middle East and Africa</td></tr>";
    document.getElementById("regions").innerHTML = "<table>" + header + "" + data + "</table>"
}
//TODO: use AJAX to get the data from the middleware

//http://localhost:6010/regions/
>>>>>>> Stashed changes
