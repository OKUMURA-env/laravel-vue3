<template>
    <div class="container-fluid bg-dark mb-3">
        <div class="container">
            <nav class="navbar navbar-dark">
                <span class="navbar-brand mb-0 h1">Vue Laravel3</span>
                <div>
                    <router-link>
                        <button class="btn btn-success">一覧</button>
                    </router-link>
                     <router-link v-bind:to="{name: 'create'}">
                        <button class="btn btn-success">新規登録</button>
                    </router-link>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {};
</script>
