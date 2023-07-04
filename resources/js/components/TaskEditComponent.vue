<template>
    <div>
        <h3 class="text-center">Edit Article</h3>
        <div class="row">
            <div class="col-md-6">
                <form>
                    <div class="form-group">
                        <label>Title</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="task.title"
                        />
                    </div>
                    <button type="submit" class="btn btn-primary">
                        Update
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
            axios
            .get("/api/tasks/" + this.taskId)
            .then((res) => {
                console.log(res);
                this.task = res.data;
            });
        }
        
    },
    mounted() {
    this.getTask();
  }
};
</script>
