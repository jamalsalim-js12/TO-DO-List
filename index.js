const taskInput = document.getElementById("input");
const addTask = document.getElementById("btn");
const taskList = document.getElementById("taskList");

//Add a task
addTask.addEventListener("click", ()=>{
    if (taskInput.value === ""){
        alert("Write something")
    } else {
        createTask();
    }
})

//Create a new task
function createTask() {
    const taskItem = document.createElement("li");   
    taskItem.innerHTML = `<input type="checkbox" id="completed"><span> ${taskInput.value} </span><button class="delete"><i class="fa-solid fa-trash fa-2xl"></i></button>`;

    taskList.appendChild(taskItem);

    taskInput.value = ""

    //Delete Task
    const deleteBtn = taskItem.querySelector(".delete");
    deleteBtn.addEventListener("click", ()=>{
    taskItem.remove();
    })



    //Completed Task
    taskList.addEventListener("change", ()=>{
        taskItem.classList.toggle('completed')
    })
}
