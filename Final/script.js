const taskTitle = document.getElementById("task_Title"); // input
const titleName = document.getElementById("title_Name");
const addDashborad = document.getElementById("add_dashborad");
const inputInner = document.getElementById("input_inner");

function closeBtn() {
    if (inputInner.style.display === "block") {
        inputInner.style.display = "none";
    }
    else {
        inputInner.style.display = "block";
    }
}

addDashborad.addEventListener("click", function (e) {
    e.preventDefault();

    if (inputInner.style.display === "none") {
        inputInner.style.display = "block";
    }
    else {
        inputInner.style.display = "block";
    }

    const fatch_data = taskTitle.value;
    console.log(fatch_data)
    titleName.innerHTML += `<p>${fatch_data} </p>`


});


// --------------------------------------------
// --------------------------------------------

const taskForm = document.getElementById("task_form");
const displayArea = document.getElementById("display_area");
let taskCount = 0;

function add_task() {

    if (taskForm.style.display === "none") {
        taskForm.style.display = "block";

    }
    else (taskForm.style.display = "block");
}
function form_Close() {
    if (taskForm.style.display === "block") {
        taskForm.style.display = "none";

        taskForm.addEventListener("submit", function (e) {
            e.preventDefault();
            taskCount++;
            const nameInput = document.getElementById("name_input");
            const emailInput = document.getElementById("email_input");
            const numberInput = document.getElementById("number_input");

            fatch_nameInput = nameInput.value;
            fatch_emailInput = emailInput.value;
            fatch_numberInput = numberInput.value;

            displayArea.innerHTML += `<p><b>Task ${taskCount} </b> Name: ${fatch_nameInput}  |  Email: ${fatch_emailInput}  |  number: ${fatch_numberInput}</p>`
        })



    }
    else (displayArea.style.display = "none");
}



