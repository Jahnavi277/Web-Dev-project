
function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "student" && pass === "1234") {
        window.location.href = "index.html";
    } else {
        document.getElementById("error").innerText = "Invalid login!";
    }
}


function addCourse(button) {

    const course = button.parentElement; //grabs li element so that we can access it's data attribute
    const name = course.dataset.name;
    const time = course.dataset.time;

    const schedule = document.getElementById("schedule");
    const items = schedule.querySelectorAll("li"); 

    for (let item of items) {
        if (item.dataset.time === time) {
            alert("Schedule conflict detected!");
            return;
        }
    }

    const li = document.createElement("li");//creates a new empty list
    li.textContent = name + " (" + time + ")"; //set it's text
    li.dataset.time = time;

    schedule.appendChild(li);
}
