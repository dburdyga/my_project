<template>
        <div class="task">
            <button class="table-button">
                Add
            </button>
            <!--<div>-->
                <!--<ul is="transition-group">-->
                <!--<li v-for="user in users" class="user" :key="user['.key']">-->
                <!--<span>{{user.name}} - {{user.email}}</span>-->
                <!--<button v-on:click="removeUser(user)">X</button>-->
                <!--</li>-->
                <!--</ul>-->
                <!--<form id="form" v-on:submit.prevent="addUser">-->
                <!--<input type="text" v-model="newUser.name" placeholder="Username">-->
                <!--<input type="email" v-model="newUser.email" placeholder="email@email.com">-->
                <!--<input type="submit" value="Add User">-->
                <!--</form>-->
                <!--<ul class="errors">-->
                <!--<li v-show="!validation.name">Name cannot be empty.</li>-->
                <!--<li v-show="!validation.email">Please provide a valid email address.</li>-->
                <!--</ul>-->
            <!--</div>-->
        </div>
</template>

<script lang="ts">

    // import Vue from 'vue';

    // let emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //
    // let config = {
    //     apiKey: "AIzaSyAi_yuJciPXLFr_PYPeU3eTvtXf8jbJ8zw",
    //     authDomain: "vue-demo-537e6.firebaseapp.com",
    //     databaseURL: "https://vue-demo-537e6.firebaseio.com"
    // };
    // firebase.initializeApp(config)
    //
    // let usersRef = firebase.database().ref('users')
    //
    //
    //
    // export default Vue.extend({
    //     data: {
    //         newUser: {
    //             name: '',
    //             email: ''
    //         }
    //     },
    //
    //     firebase: {
    //         users: usersRef
    //     },
    //     computed: {
    //         validation: function () {
    //             return {
    //                 name: !!this.newUser.name.trim(),
    //                 email: emailRE.test(this.newUser.email)
    //             }
    //         },
    //         isValid: function () {
    //             var validation = this.validation
    //             return Object.keys(validation).every(function (key) {
    //                 return validation[key]
    //             })
    //         }
    //     },
    //     methods: {
    //         addUser: function () {
    //             if (this.isValid) {
    //                 usersRef.push(this.newUser)
    //                 this.newUser.name = ''
    //                 this.newUser.email = ''
    //             }
    //         },
    //         removeUser: function (user) {
    //             usersRef.child(user['.key']).remove()
    //         }
    //     }
    // });


</script>

<style lang="scss" scoped>


</style>

