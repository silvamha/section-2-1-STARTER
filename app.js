const vm = Vue.createApp({
  data() {
    return {
      firstName: "John",
      middleName: "",
      lastName: "Doe",
      url: "https://google.com",
      raw_url: '<a href="https://google.com" target="_blank">Google</a>',
      age: 20,
    };
  },
  methods: {


    increment() {
      this.age++;
    },

    updateLastName(msg, e) {
      // console.log(msg);
      this.lastName = e.target.value;
    },

    updateMiddleName(e) {
      this.middleName = e.target.value;
    },
  },
  computed:{
    fullName() {
      console.log('Full name computed property was called!')
      return `${this.firstName} ${
        this.middleName
      } ${this.lastName.toUpperCase()}`;
    },
  }
}).mount("#app");

// const vm2 = Vue.createApp({
//     data(){
//         return {
//             firstName: 'Bob',
//             lastName: 'Smith'
//         }
//     }
// }).mount('#app2')

// setTimeout(() => {
// vm.firstName = 'Bob';
// }, 2000);
