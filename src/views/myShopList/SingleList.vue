<template>
    <div>
        <div class="shadow p-2 my-3" v-for="(task,index) in tasks" :key="index">
            {{ task.name }}
        </div>
    </div>
</template>

<script>
    export default {
        name : 'SingleList',
        data () {
            return {
                title: "This is all list",
                tasks: [
                    {
                        name: "Task One",
                        status: false
                    },
                    {
                        name: "Task Two",
                        status: false
                    },
                    {
                        name: "Task Three",
                        status: false
                    },
                ]
            }
        },
    }
</script>

<style lang="stylus" scoped>

</style>
