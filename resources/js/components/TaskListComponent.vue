 <template>
     <div class="container">
         <table class="table table-hover">
             <thead class="thead-light">
             <tr>
                 <th scope="col">#</th>
                 <th scope="col">Title</th>
                 <th scope="col">Show</th>
                 <th scope="col">Edit</th>
                 <th scope="col">Delete</th>
             </tr>
             </thead>
             <tbody>
             <tr v-for="(task,key) in tasks">
                 <th scope="row">{{ task.id }}</th>
                 <td>{{ task.title }}</td>
                 <td>
                     <button class="btn btn-primary">Show</button>
                 </td>
                 <td>
                     <button class="btn btn-success">Edit</button>
                 </td>
                 <td>
                     <button class="btn btn-danger">Delete</button>
                 </td>
             </tr>
             </tbody>
         </table>
     </div>
 </template>
 
 <script>
     export default {
     data(){
            return {
                tasks:{}
            }
     },
     mounted(){
        this.getTasks()
    },
    methods:{
        getTasks(){
            axios.get('/api/tasks')
            .then(response=>{
                this.tasks = response.data;
            }).catch(error=>{
                console.log(error)
            })
        },
    },
}

 </script>