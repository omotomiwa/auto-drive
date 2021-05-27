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
        Price: ${{cars.price}}
      </div>

     <div class="text--primary quantity">
        <span  class="material-icons"  style="font-size:17px;">arrow_back_ios</span>
        <span class="counter">1</span>
 <span class="material-icons"  style="font-size:17px;">
arrow_forward_ios
</span>
      </div>
    </div>
    </v-card-text>
     <v-btn
        color="orange"
        text
      >
        Remove
      </v-btn>

  </v-card>
  
        <h4 class="cartTotal">Total:</h4>
       
        </v-container>






</template>
<style>
.cart{
  margin-left: 100px;
}
.quantity{
  float: right;
}
.price{
  display:inline;
}

.cartTotal{
  text-align: center;
  

}
.counter{
  font-size: 19px;
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
       
    },
    methods:{
      //let empty =  document.querySelector(".emptyCart");

      created: function() {
  window.addEventListener('load',alert("hello"));
},


            

    },
    data(){
        return{
        // cart:[]
        }
    },
    
}
</script>