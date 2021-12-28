<template>
 
<v-container>
   <v-card
    class="mx-auto my-12 emptyCart"
    max-width="374"
    v-if="cart.length === 0"
  >
 <v-icon right class="material-icons-outlined cart grey--text"  size="150" justify="center">shopping_cart
    </v-icon>  

    <v-card-title class="justify-center grey--text">Cart is Empty!</v-card-title>

    <v-card-text>


      <div>Already have an account? <router-link to="/Login" style="color:blue; text-decoration: none;">Login</router-link> to see the items in your cart.
     </div>
    </v-card-text>
    <router-link to="/" style="text-decoration: none;">
       <v-btn class="justify-center dark"
     color="orange"
     text
    >Start Shopping</v-btn>

    </router-link>
    <v-divider class="mx-4"></v-divider>
  </v-card>

   <v-card
    class="mx-auto my-4"
    max-width="344"
    v-else
     v-for="(cars, k) in cart" :key =k xs12 md6  lg4
    
    
  >
    <v-card-text>
     <p class="display-1 text--primary">
        {{cars.Name}}
      </p>
       <v-img
      class="white--text align-end"
      height="200px"
      :src="cars.image"
    >

    </v-img><br>
     
      <div class="text--primary">
        Model: {{cars.model}}
      </div>
      <div class="text--primary">
        Year: {{cars.year}}
      </div>
     
      <div class="price">
       <div class="text--primary">
        Price: <b>$ {{Number(cars.price).toLocaleString()}}</b>
      </div>

     <div class="text--primary quantity" >
        <span  class="material-icons decrease arrow" v-on:click= "remove(cars)"  style="font-size:17px;">arrow_back_ios</span>
        <span><input type="number" class="counter"  :value="cars.quantity"/></span>
 <span class="material-icons increase arrow" v-on:click= "add(cars)" style="font-size:17px;">
arrow_forward_ios
</span>
      </div>
    </div>
    </v-card-text>
     <v-btn
        color="orange"
        text
          v-on:click="removeFromCart(cars)" 
      >
        Remove
      </v-btn>

  </v-card>
  <v-container v-show="cart.length != 0 ">
  <div class = "wrap">
   <span class="cartTotal">Total: </span><span class="amount">$ {{sum.toFixed(2).replace(/(^\d{1,3}|\d{3})(?=(?:\d{3})+(?:$|\.))/g, '$1,')}}</span>
  
  </div>
   
  </v-container>

   <v-container>
   <div class="wrapper">
     <router-link to="/Checkout" style="text-decoration: none;">
      <v-btn v-show="cart.length != 0 " depressed class="checkout" color="orange">Checkout</v-btn>

     </router-link>
   

   </div>
    
  </v-container>
  
  

       
        </v-container>
        
         
        
       






</template>
<style >
.cart{
  margin-left: 100px;
}
.quantity{
  float: right;
}
.price{
  display:inline;
}
.wrap{
  text-align: center;
}
.cartTotal{
  text-align: center;
   position: relative;
  bottom: 15px;
  font-size: 20px;
  font-weight: 700;
  

}
.amount{
  text-align: center;
   position: relative;
  bottom: 15px;
  font-weight: 500;

}
.arrow{
  cursor: pointer;
}
.counter{
  font-size: 19px;
  position: relative;
  bottom: 3px;
  width: 12px;
}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
.wrapper{
  text-align: center;
}
.checkout{
   position: relative;
  bottom: 27px;

}
</style>


<script>
import { mapState } from 'vuex'
export default{
    name: "Cart",
  computed:{
        ...mapState([
            "cart",
            
        ]),
         sum(){
  let total = 0;
  this.cart.forEach((cars) => {
       total += parseFloat( cars.price * cars.quantity);
  });
  return total;
 }
  },

  

     methods: {
        add(cars) {
      cars.quantity++;
    },

     remove(cars) {
      cars.quantity--;
    },
     

      removeFromCart(cars) {
      this.cart.splice(this.cart.indexOf(cars),1);
   
      } 

    

     
      
      
    }, 
  



            

     data(){
        return {
           
            
        }        
    },
    
}
</script>