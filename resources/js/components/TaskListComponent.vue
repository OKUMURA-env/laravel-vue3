<template>
    <div class="container">
        <table class="table table-hover">
            <thead class="thead-light">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">タスク名</th>
                    <th scope="col">内容</th>
                    <th scope="col">担当者</th>
                    <th scope="col">状況</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(task, key) in tasks">
                    <th scope="row">{{ task.id }}</th>
                    <td>{{ task.title }}</td>
                    <td>{{ task.description }}</td>
                    <td>{{ task.person_in_charge }}</td>
                    <td>{{ task.status }}</td>
                    <td>
                        <router-link
                            v-bind:to="{
                                name: 'task.show',
                                params: { taskId: task.id },
                            }"
                        >
                            <button class="btn btn-primary">Show</button>
                        </router-link>
                    </td>
                    <td>
                        <router-link
                            v-bind:to="{
                                name: 'task.edit',
                                params: { taskId: task.id },
                            }"
                        >
                            <button class="btn btn-success">Edit</button>
                        </router-link>
                    </td>
                    <td>
                        <button v-on:click="deleteTask(task.id)" class="btn btn-danger">
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tasks: {},
        };
    },
    mounted() {
        this.getTasks();
    },
    methods: {
        getTasks() {
            axios
                .get("/api/tasks")
                .then((response) => {
                    this.tasks = response.data;
                    console.log(this.tasks);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        deleteTask(id) {
            axios
                .delete("/api/tasks/" + id, this.task)
                .then((response) => {
                    this.getTasks();
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>
