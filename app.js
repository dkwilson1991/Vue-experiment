const app = Vue.createApp({
  data() {
    return {
      firstName: 'Keita',
      lastName: 'Wilson',
      email: 'dkwilson1991@gmail.com',
      gender: 'male',
      picture: 'http://randomuser.me/api/portraits/men/1.jpg',
    }
  }
})

app.mount('#app')
