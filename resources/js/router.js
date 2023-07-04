import { createRouter, createWebHistory } from 'vue-router';
import TaskListComponent from "./components/TaskListComponent.vue";
import TaskCreateComponent from "./components/TaskCreateComponent.vue";
import TaskShowComponent from "./components/TaskShowComponent.vue";
import TaskEditComponent from "./components/TaskEditComponent.vue";

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
    },
    {
        path: "/tasks/:taskId/edit",
        name: "task.edit",
        component: TaskEditComponent,
        props: true
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
  });

export default router;
