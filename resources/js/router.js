import { createRouter, createWebHistory } from 'vue-router';
import TaskCreateComponent from "./components/TaskCreateComponent.vue";

const routes= [
    {
        path: "/create",
        name: "create",
        component: TaskCreateComponent
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
  });

export default router;
