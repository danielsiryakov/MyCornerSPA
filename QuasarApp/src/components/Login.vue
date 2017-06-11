<template>
  <div class="" style="padding-left: 20px; padding-right: 20px">
    <h3>Log In</h3>
    <p>Log in to your account to get some great quotes.</p>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="Enter your username"
        v-model="username"
      >
    </div>
    <div class="form-group">
      <input
        type="password"
        class="form-control"
        placeholder="Enter your password"
        v-model="password"
      >
    </div>
    <button class="btn btn-primary" @click="submit()">Access</button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    data () {
      return {
        username: '',
        password: '',
        email: ''
      }
    },
    methods: {
      ...mapActions([
        'login'
      ]),
      submit () {
        this.login(
          {
            'username': this.username,
            'password': this.password,
            'email': 'danielsiryakov@gmail.com'
          })
        this.$emit('submit')
      }
    }
  }
</script>
