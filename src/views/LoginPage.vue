<template>
    <div>
         <div class="container">
            <div class="row">
                <div class="col-6 offset-3">
                    <div class="card">
                        <div class="card-body">
                            <h1>Login Page</h1>
                            <form action="">
                                <div class="form-group text-start mb-3">
                                    <label for="">Email</label>
                                    <input type="email" placeholder="email" class="form-control mt-1" v-model="user.email">
                                </div>
                                <div class="form-group text-start mb-3">
                                    <label for="">Password</label>
                                    <input type="password" placeholder="password" class="form-control mt-1" v-model="user.password">
                                </div>
                                <button class="btn btn-primary float-start" type="button" @click="loginPage()">Login</button>
                                <button class="btn btn-danger ms-3 float-start" type="button" @click="logoutPage()">Logout</button>
                                <button class="btn btn-success" @click="alert()">Message</button>
                            </form>
                            <br>
                            <h3 class="text-success">{{ $store.state.name }}</h3>
                            <!-- <h2 class="text-info">{{ getMyName }}</h2> -->
                            <h3 class="text-info">{{ name }}</h3>
                            <h5 class="text-danger">getUserCount = {{ $store.getters.getUserCount }}</h5>
                            <h5 class="text-success">doneJob = {{ $store.getters.doneJob[0].name }}</h5>
                            <h5 class="text-success">unDoneJobCount = {{ $store.getters.unDoneJobCount }}</h5>
                            <button class="btn btn-warning" @click="alertCount()">getters</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapGetters } from "vuex";
    
    export default {
        name: 'LoginPage',
        data () {
            return {
                user: {
                    email: "",
                    password: "",
                }
            }
        },
        // computed: { //method 1
        //     getMyName () {
        //         return this.$store.state.name;
        //     }
        // },
        // computed: mapState({ getMyName: (state) => state.name }),//method 2
        // computed: mapState(['name']),//method 3
        computed: {
            ...mapState(['name']),//method 4
            ...mapGetters(['getUserCount', 'doneJob', 'unDoneJobCount']),
            otherMethod () {
                return this.data
            }
        },
        methods: {
            loginPage () {
                if(this.user.email != "" && this.user.password != ""){
                    localStorage.setItem("vueAuth","true");
                }else{
                    alert('empty information .....');
                }
            },
            logoutPage () {
                localStorage.setItem("vueAuth","false");
            },
            alert() {
                console.log(this.$store.state.name);
            },
            alertCount() {
                alert(this.getUserCount);
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>
