Vue.createApp({

// Todas las aplicaciones Vue tienen un método data() que debe retornar un objeto con el estado de la aplicación 
    data() {
      return {
        todos: [],
        addTaskName: '',
        filterTodoText: ''
      }
    },

    methods: {
        addTodo(){
            console.log(this.addTaskName);
            if(!this.addTaskName){
                return;
            };
            // añadir un objeto nuevo con las siguientes propiedades a 'todos'
            // id: uuidv4();
            // text: con el texto del todo
            // isCompleted: que valor debería al crear el objeto?
            this.todos.push({
                id: uuidv4(),
                text: this.addTaskName,
                isCompleted: false
            });



            this.addTaskName = '';
        },
        toggleTodo(id){
            console.log(id);
        // Actualizar la variable de estado y poner la propiedad de tarea identificada con el 'id' isCompleted true<-->false.
        
            this.todos = this.todos.map(todo=>{
                if (todo.id == id) {
                    return{
                        ...todo, // copiame todas las propiedades del objeto
                        isCompleted: !todo.isCompleted // y esta me la modificas
                    }   
                }
            return todo;
            })
        }
    }
  }).mount('#app')