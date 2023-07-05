<template>
    <div>
        <h3 class="text-center">タスクの編集</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="updateTask">
                    <div class="form-group">
                        <label>タスク名</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="task.title"
                        />
                        <label>内容</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="task.description"
                        />
                        <label>担当者</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="task.person_in_charge"
                        />
                    </div>
                    <button type="submit" class="btn btn-primary">
                        更新
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        taskId: String,
    },
    data() {
        return {
            task: {},
        };
    },
    methods: {
        getTask() {
            axios.get("/api/tasks/" + this.taskId).then((res) => {
                console.log(res);
                this.task = res.data;
            });
        },
        updateTask() {
            axios
                .put("/api/tasks/" + this.taskId, this.task)
                .then((res) => {
                    console.log(res);
                    this.$router.push({ name: "tasks.list" });
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    mounted() {
        this.getTask();
    },
};
</script>
