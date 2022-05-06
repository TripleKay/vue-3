<template>
  <div>
    <h1>This is an about page testing</h1>
    <h4 class="text-primary">{{ this.$route.params.name }}</h4>
    <h4 class="text-danger">{{ this.$route.params.age }}</h4>

    <button class="btn btn-primary" @click="goHome()">Go to Home</button>
    <button class="btn btn-info ms-3 text-white" @click="goList()">Go to All List</button>
  </div>
</template>

<script>
  export default {
    name: "AboutView",
    methods: {
      goHome(){
        this.$router.push("/");
      },
      goList(){
        this.$router.push({ name: "allList"});
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
