<template>
    <div class="container">
        <table class="table table-hover">
            <thead class="thead-light">
                <tr>
                    <th scope="col"></th>
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
                <tr v-for="(task, key) in tasks" v-bind:style="{ 'background-color': getBackGroundColors(task)}">
                    <th scope="row"></th>
                    <td>{{ task.title }}</td>
                    <td>{{ task.description }}</td>
                    <td>{{ task.person_in_charge }}</td>
                    <td>
                        <select v-model="task.status" v-on:change="updateStatus(task)">
                            <option v-for="(status, key) in statuses" >{{ status.name }}</option>
                        </select>
                    </td>
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
import { getCurrentInstance } from 'vue';

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
                    console.log(response);
                    this.tasks = response.data.tasks;
                    this.statuses = response.data.statuses;
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
        updateStatus(task) {
            console.log(task);
            axios
                .put("/api/tasks/" + task.id, task)
                .then((response) => {
                    this.getTasks();
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getBackGroundColors(task) {
            console.log(task);
             if(task.status == "未着手")
             {
                return 'yellow'
             }
             if(task.status == "着手"){
                return 'aqua'
            }
            if(task.status == "完了"){
                return 'silver'
            }
           
        },
    },
};
</script>

