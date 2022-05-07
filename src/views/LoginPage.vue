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
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>
