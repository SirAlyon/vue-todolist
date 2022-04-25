const app = new Vue ({
    el: '#app',
    data: {
        newTask: '',
        deletedTasks: [],
        doneTasks: [],
        tasks: [
            {
                text: 'Learn HTML',
                done: true,
            },
            {
                text: 'Learn CSS',
                done: true,
            },
            {
                text: 'Learn JS',
                done: false,
            },
            {
                text: 'Learn VueJS',
                done: false,
            },
            {
                text: 'Learn PHP',
                done: false,
            },
            {
                text: 'Learn SQL',
                done: false,
            }
        ]
    },
    methods: {
        deleteTask(task){
            task.deleted = true
            console.log(task);
            this.deletedTasks.push(task)
            console.log(this.deletedTasks, task.deleted);
        },
        addNewTask(){
            const newTaskObject = {
                text: this.newTask,
                done: false
            }
            console.log(newTaskObject);
            if (!this.newTask == ''){
                this.tasks.unshift(newTaskObject)
                this.newTask = ''
            } 
        },
        doTask(index, task){
            //console.log(this.tasks[index].done);
            if (this.tasks[index].done){
                this.tasks[index].done = false
                
            } else {
                this.tasks[index].done = true
            }

            if(task.done){
                this.doneTasks.push(task)
            }
            console.log(index, this.doneTasks);
        },
        doneTask(){
            this.tasks.forEach(task => {
                if (task.done){
                    this.doneTasks.push(task)
                    console.log(this.doneTasks);
                    //console.log(this.tasks);
                } else {

                }
            });
        },
        redoTask(task){
            if (this.doneTasks.includes(task)){
                let i = this.doneTasks.indexOf(task)
                if (i > -1) {
                    this.doneTasks.splice(i, 1); 
                    task.done = false
                  }
                console.log(this.doneTasks);
            }
        },
        restoreTask(task){
            if (this.deletedTasks.includes(task)){
                let i = this.deletedTasks.indexOf(task)
                if (i > -1) {
                    this.deletedTasks.splice(i, 1); 
                    task.done = true
                    task.deleted = false
                  }
            }
        },
        emptyTrash(){
            this.deletedTasks.splice(0, this.deletedTasks.length)
        }
    },
    mounted:function(){
        this.doneTask() //method1 will execute at pageload
  },
})