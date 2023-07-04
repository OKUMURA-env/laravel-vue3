<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-sm-6">
        <form @submit.prevent="submit">
          <div class="form-group row">
            <label for="title" class="col-sm-3 col-form-label">タスク名</label>
            <input type="text" class="col-sm-9 form-control" id="title" v-model="task.title"/>
          </div>
          {{ title }}
          <div class="form-group row">
            <label for="content" class="col-sm-3 col-form-label">タスク内容</label>
            <input type="text" class="col-sm-9 form-control" id="content" v-model="task.content"/>
          </div>
          {{ content }}
          <div class="form-group row">
            <label for="person-in-charge" class="col-sm-3 col-form-label">担当者</label>
            <input type="text" class="col-sm-9 form-control" id="person-in-charge" v-model="task.person_in_charge"/>
            {{ person_in_charge }}
          </div>
          <button type="submit" class="btn btn-primary">作成</button>
        </form>
      </div>
    </div>
  </div>
</template>
   
<script>
export default {
  data() {
    return {
      task: {}
    }
  },
  methods: {
    submit() {
      axios.post('/api/tasks', this.task)
        .then((res) => {
          this.$router.push('/tasks')
        })
      }
  },
};
</script>