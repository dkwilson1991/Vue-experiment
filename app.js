const app = Vue.createApp({
  data() {
    return {
      firstName: 'Make a Random',
      lastName: 'User',
      email: 'random@email.com',
      gender: 'male',
      picture: 'http://randomuser.me/api/portraits/men/4.jpg'
    }
  },
  methods: {
    async getUser() {
      const res = await fetch('http://randomuser.me/api')
      const { results } = await res.json()

      this.firstName = results[0].name.first,
      this.lastName = results[0].name.last,
      this.email = results[0].email,
      this.gender = results[0].gender,
      this.picture = results[0].picture.large
    }
  }
})

app.mount('#app')
