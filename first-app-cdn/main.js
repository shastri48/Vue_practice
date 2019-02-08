Vue.component('product', {
  props: ["shipping"],
  template: `<h1> Shipping: {{ shipping }} </h1>`,
})



Vue.component('cart-item', {
  template: `
    <form @submit.prevent = "handleSubmit">
      <input v-model="name">
      <input v-model.number="rating">
      <input type="submit" value="submit">
    </form>
  `,
  data() {
    return {
      name:null,
      rating:null,
    }
  },
  methods: {
    handleSubmit(){
      var formData = {
        name: this.name,
        rating: this.rating
      }
      this.$emit('form-data', formData);
      this.name= null;
      this.rating=null;
    }
  }
})



// Vue.component('cart-item', {
//   template: `<p>check</p>`,
// })

// var cart = new Vue({
//   el:'#cart',
//   data: {
//     cart: 0
//   },
//   methods: {
//     addToCart(){
//       console.log("fired")
//       this.cart+=1;
//     }
//   }
// })


var app = new Vue({
  el: '#app',
  data: {
    product:"socks",
    brand: "nike",
    image: './image/head.png',
    url: 'https://www.google.com/',
    inventry: 0,
    onSale:true,
    cart: 0,
    premium: true,
    details: ['cotton', 'polyster', 'mixed fabric'],
    variants: [
      {
        id: 1111,
        color: "red"
      },
      {
        id: 2222,
        color: "blue"
      },
      {
        id: 3333,
        color: "green"
      }
    ],
    sizes: ['X', 'XL', 'S', 'XS'],
    linethrough: "linethrough",

  },
  methods: {
    addToCart() {
      this.$emit('add-cart');
      this.cart+=1;
    },
    removeFromCart(){
      this.cart-=1;
    },
    handleFormData(){
      console.log(formData);
    }
  },
  computed: {
    title() {
      return this.brand+ " " + this.product;
    },
    printString(){
      return this.brand + " " + this.product;
    },
    shipping(){
      if(this.premium)return 'Free';
      else return '2.99$';
    },
  }
})