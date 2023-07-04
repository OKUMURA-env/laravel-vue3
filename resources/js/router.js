import { createRouter, createWebHistory } from 'vue-router';
import TaskListComponent from "./components/TaskListComponent.vue";
import TaskCreateComponent from "./components/TaskCreateComponent.vue";

const routes= [
    {
        path: "/list",
        name: "list",
        component: TaskListComponent
    },
    {
        path: "/create",
        name: "create",
        component: TaskCreateComponent
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
  });

export default router;
