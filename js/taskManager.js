// TASK 6 createTaskHTML = (id, name, dueDate)
/* <div class="card" id="tasks-not-started">
    <div class="card-body">
        <h5 class="card-title">Review pull requests</h5>
            <p class="card-text">Group meeting on Jul 17 at 4:00pm EST to approve and merge code</p>
            <p>ASSIGNED TO: All <br> DUE DATE: Jul 17, 2022</p>
            <span class="badge badge-danger">Not Started</span>
</div> */

//TaskManager class created
class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }

  //createTaskHtml arrow function create
  createTaskHtml = (name, description, assigtedTo, dueDate, status) => {
    const html = `<div class="col-3 form">
    <form id="newTaskForm" action="" onsubmit="return validFormFieldInput()">
      
        <label for="task-name">Task Name:</label><br>
        <input type="text" name="task-name" id="newTaskNameInput"><br><br>

        <label for="description">Description:</label><br>
        <input type="text" name="description" id="newTaskDescriptionInput"><br><br>

        <label for="status">Status:</label><br>
        <select type="text" name="status" id="status">
            <option value="not-started">Not Started</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
        </select><br><br>

        <label for="due">Due Date:</label><br>
        <input type="date" name="due" id="newTaskDueDateInput"><br><br>

        <label for="assigned">Assigned To:</label><br>
        <select type="text" name="assigned" id="newTaskAssignedToInput">
            <option value=""></option>
            <option value="all">All</option>
            <option value="angelica">Angelica</option>
            <option value="david">David</option>
            <option value="shailean">Shailean</option>
            <option value="shrikant">Shrikant</option>
            <option value="talitha">Talitha</option>
            <option value="teresa">Teresa</option>
        </select><br><br>

        <!--button-->
        <button type="submit" value="Add" class="btn">Add</button>
    </div>`;
  };

  //addTask method created
  addTask(name, description, dueDate, assignedTo) {
    const task = {
      id: this.currentId++, //increments currentId
      name,
      description,
      dueDate,
      assignedTo,
      status: "Not Started",
    };
    this.tasks.push(task); //pushing task
    //console.log(this.tasks); //to test the code
  }
  render() {
    //call the createTaskHtml function
  }
}
