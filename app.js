const app = new Vue ({
    el: '#app',
    data: {
        newTask: '',
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
        doTask(index){
            //console.log(this.tasks[index].done);
            if (this.tasks[index].done){
                this.tasks[index].done = false
                
            } else {
                this.tasks[index].done = true
            }
            console.log(index);
        },
    }
})