import { createRouter, createWebHistory } from 'vue-router';
import TaskListComponent from "./components/TaskListComponent.vue";
import TaskCreateComponent from "./components/TaskCreateComponent.vue";

const routes= [
    {
        path: "/tasks",
        name: "tasks.list",
        component: TaskListComponent
    },
    {
        path: "/tasks/create",
        name: "task.create",
        component: TaskCreateComponent
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
  });

export default router;
