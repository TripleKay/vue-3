<template>
    <div>
        <input type="text" class="form-control my-3" v-model="listText" v-if="isEdit" @keyup.enter="saveText()">
        <span v-else @dblclick="editText()" class="my-3">{{ listText }}</span>
    </div>
</template>

<script>
    export default {
        name: 'EachList',
        data () {
            return {
                listText: "",
                isEdit: true,
            }
        },
        methods: {
            saveText () {
              this.isEdit = false;  
            },
            editText () {
                this.isEdit = true;
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>
