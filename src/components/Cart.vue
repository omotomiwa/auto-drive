<template>
 
<v-container>
   <v-card
    class="mx-auto my-12"
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