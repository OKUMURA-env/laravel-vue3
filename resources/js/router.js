import { createRouter, createWebHistory } from 'vue-router';
import TaskListComponent from "./components/TaskListComponent.vue";
import TaskCreateComponent from "./components/TaskCreateComponent.vue";
import TaskShowComponent from "./components/TaskShowComponent.vue";

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
    },
    {
        path: "/tasks/show/:taskId",
        name: "task.show",
        component: TaskShowComponent,
        props: true
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
  });

export default router;
