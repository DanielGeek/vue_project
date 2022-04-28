const app = Vue.createApp({
  // template: `
  // <h1> Hola mundo</h1>
  // <p> Desde app.js </p>
  // `

  data() {
    return {
      quote: "I'm Batman",
      author: 'Bruce Wayne'
    }
  },
  methods: {
    changeQuote() {
      console.log( 'Hello World' );
      this.author = 'Daniel Ángel'

      this.capitalize()
    },
    capitalize() {
      this.quote = this.quote.toUpperCase()
    }
  }
})

app.mount('#myApp')