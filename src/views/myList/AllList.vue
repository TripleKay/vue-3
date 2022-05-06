<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-6 offset-3">
                    <div class="card">
                        <div class="card-body">
                            <h1>Todo List Page</h1>
                            <li class="list-group-item mx-5">
                                <List></List>
                                <List></List>
                                <List></List>
                                <List></List>
                                <List></List>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import List from "./EachList.vue";
    export default {
        name: "AllList",
        components: { List },
    }
</script>

<style lang="stylus" scoped>

</style>
