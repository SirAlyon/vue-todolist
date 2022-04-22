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
            this.tasks.splice(index, 1)
        },
        addNewTask(){
            const newTaskObject = {
                text: this.newTask,
                done: false
            }
            console.log(newTaskObject);
            this.tasks.push(newTaskObject)
        }
    }
})