// Validate form input
function validFormFieldInput() {
    // Validate task name input
    const newTaskNameInput = document.querySelector('#newTaskNameInput');
    const name = newTaskNameInput.value;
    if (name == "") {
      alert("Please enter a task name"); 
      return false;
    } else {
        console.log("Name:  " + name);
    }
    // Validate task description input
    const newTaskDescriptionInput = document.querySelector('#newTaskDescriptionInput');
    const description = newTaskDescriptionInput.value;
    if (description == "") {
      alert("Please enter a task description"); 
      return false;
    } else {
        console.log("Description:  " + description);
    }
    // Validate task due date input
    const newTaskDueDateInput = document.querySelector('#newTaskDueDateInput');
    const dueDate = newTaskDueDateInput.value;
    if (dueDate == "") {
      alert("Please enter a task due date"); 
      return false;
    } else {
        console.log("Due Date:  " + dueDate);
    }
    // Validate task assigned to input
    const newTaskAssignedToInput = document.querySelector('#newTaskAssignedToInput');
    const assignedTo = newTaskAssignedToInput.value;
    if (assignedTo == "") {
      alert("Please assign the task"); 
      return false;
    } else {
        console.log("Assigned to:  " + assignedTo);
    }
};
