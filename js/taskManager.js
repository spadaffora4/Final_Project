//Taskmanager class created
class TaskManager { 
    constructor(currentId=0) {
        this.tasks =[];
        this.currentId = currentId;
    }

//addTask method created
    addTask(taskName, description, assignedTo, dueDate){
        const task = {
            id: this.currentId++, //increments currentId
            name: taskName,
            assignedTo: assignedTo,
            description: description,
            dueDate: dueDate,
            status: 'TODO'
            };
        this.tasks.push(task); //pushing task
        }
    }
    





