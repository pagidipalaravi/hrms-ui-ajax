async function main(){
    
    let status = 0;
    let message = "";
    let jobs = [];

    //Creating XMLHttpRequest Object
    let xhttp = new XMLHttpRequest();
    console.log("Ready state when the object is created: "+xhttp.readyState);

    //Opening request to the server
    xhttp.open("GET","http://localhost:6010/jobs/", true);
    console.log("Ready state after openning request to the server: "+xhttp.readyState);

    //Send the request to the server
    xhttp.send()

    //Have to wait for response but javascript won't wait because it is synchronous.
    console.log("Ready state after sending request to the server: "+xhttp.readyState);

    //Call back function when the state will change, the below function will be executed.
    xhttp.onreadystatechange = function(){
        console.log("On ready state change: "+xhttp.readyState);

        if(xhttp.readyState == 4 && xhttp.status==200){
            const response = JSON.parse(xhttp.response);
            console.log(response);

            jobs = response.result;
            
            head = `<tr>
                        <th>JOB_ID</th>
                        <th>JOB_TITLE</th>
                        <th>MIN_SALARY</th>
                        <th>MAX_SALARY</th>
                    </tr>`

            data = "";

            for(i=0;i<jobs.length;i++){
                data += `<tr>
                            <td>${jobs[i].jobId}</td>
                            <td>${jobs[i].jobTitle}</td>
                            <td>${jobs[i].minSalary}</td>
                            <td>${jobs[i].maxSalary}</td>
                        </tr>`
            }

            t = "<table>"+head+data+"</table>";
            document.getElementById("result").innerHTML=t;
        }


    }

}
