<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>詳細</h4>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-12 mb-2">
                            <label>Title</label>
                            <p>{{ task.title }}</p>
                        </div>
                    </div>
                </div>
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
            task: {
                title: "",
            },
        };
    },
    mounted() {
        this.showTask();
    },
    methods: {
        showTask() {
            axios
                .get("/api/tasks/" + this.taskId)
                .then((response) => {
                    this.task = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>
