const app = new Vue ({
    el: '#app',
    data: {
        newTask: '',
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
        deleteTask(index){
            console.log(this.tasks);
            console.log(index);
            this.tasks.splice(index, 1)
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
            } else if (this.doneTasks.includes(task) && task.done === false){
                let i = this.doneTasks.indexOf(task)
                if (index > -1) {
                    this.doneTasks.splice(index, 1); 
                  }
                console.log(this.doneTasks);
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
        }
    },
    mounted:function(){
        this.doneTask() //method1 will execute at pageload
  },
})