<template>
 
<v-container>
   <v-card
    class="mx-auto my-12 emptyCart"
    max-width="374"
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
    <p  v-for="(carts,i) in cart"
      :key="i"
      >{{carts.Name}}</p>


   

    <v-card-actions>
      
    </v-card-actions>
  </v-card>
 

</v-container>

</template>
<style>
.cart{
  margin-left: 100px;
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