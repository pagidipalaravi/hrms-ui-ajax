function main() {
    getJobs();
}
async function getJobs() {
    let header =
        "<tr><th>JOB_ID</th><th>JOB_TITLE</th><th>MIN_SALARY</th><th>MAX_SALARY</th></tr>";
    //create XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    console.log("after new readystate = " + xhr.readyState);
    //open the request to the server
    xhr.open("GET", "http://localhost:6010/jobs/", true);
    console.log("after open readystate " + xhr.readyState);
    //send the XMLHttpRequest to the server
    xhr.send();
    //Has to wait but javascript won't wait because javascript is Synchronous
    console.log("after send readystate " + xhr.readyState);
    // call back function. when the state will change, the below function will be executed.
    xhr.onreadystatechange = function () {
        console.log("onreadystatechange readystate " + xhr.readyState);
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log("readystate " + xhr.readyState);
            const jobsObject = JSON.parse(xhr.response);
            const jobStatus = jobsObject.status;
            const jobMessage = jobsObject.message;
            const jobsArray = jobsObject.result;
            if (jobStatus == 200 && jobMessage == "jobs list with size:19") {
                let rows = "";
                for (let i = 0; i < jobsArray.length; i++) {
                    let jobId = jobsArray[i].jobId;
                    let jobTitle = jobsArray[i].jobTitle;
                    let minSalary = jobsArray[i].minSalary;
                    let maxSalary = jobsArray[i].maxSalary;
                    rows += "<tr><td>" + jobId + "</td><td>" + jobTitle + "</td><td>" + minSalary + "</td><td>" + maxSalary + "</td><td>";
                }
                console.log(rows);
                document.getElementById("jobs").innerHTML = "<table>" + header + "" + rows + "</table>"
            }
        }
    }
}