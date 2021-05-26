<template>
 
<v-main>
  <v-container class="mx-0">
     <v-text-field 
         class="hidden-md-and-up"
          width="50"
          label="Search Gallery..."
          >
          </v-text-field>
          <span><v-btn plain 
          class="hidden-md-and-up"
          >search</v-btn></span>

  </v-container>
   

  <v-container  class="mx-0">
    
    <v-layout >
      <v-flex >
                <v-card 
    class="mx-10 hidden-xs-only"
    width="302"
    height= "400"
     
    
    >
    <v-card-text>
      <h1 class="lg--text text--primary">
        Check out Hot Deals! <span class="material-icons red--text">
        local_fire_department
        </span><br><br>
      </h1>
      <v-list>
        <v-list-item>
          <v-list-item-icon >
            <v-icon class="grey--text">local_shipping</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class=" grey--text">Efficient Shipping</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list>
        <v-list-item>
          <v-list-item-icon >
            <v-icon class="grey--text">moped</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class=" grey--text">Express Delivery</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list>
        <v-list-item>
          <v-list-item-icon >
            <v-icon class="grey--text">directions_car</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class=" grey--text">Eco Friendly Automobiles</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
   
  </v-card>
      </v-flex>


      <v-flex xs12 md8  lg6 >
         <v-carousel  style="border-radius:4px; "  height="400px" class="slides">
    <v-carousel-item
      class="slides"
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition" 
      
      >
       <v-list-item-title   class="d-flex flex-column justify-end align-left fill-height white--text "><h4>Shop Now</h4></v-list-item-title>
      </v-carousel-item>
     
  </v-carousel>
      </v-flex>
      <v-flex>
                <v-card 
    class="mx-10 hidden-md-and-down"
    width="300"
    height= "350">
    <v-card-text >
      <h3 class="lg--text text--primary mx-10">
        YOUR N0.1 AUTO SHOP<br><br>
      </h3>
      <h4 class="black--text  mx-10"><b>Brands:</b></h4>
      <v-list class="mx-10">Mercedes</v-list>
      <v-list class="mx-10">Jaguar</v-list>
      <v-list class="mx-10">BMW</v-list>
      <v-list class="mx-10">Range Rover</v-list>
      <v-list class="mx-10">Porshe</v-list>

    </v-card-text>
   
  </v-card>
      </v-flex>

    </v-layout>

 </v-container>


  
 <v-container class="mx-0 ">
   <h5 class="mx-6 check">Check out deals of the day!</h5>
   </v-container> 
 <v-layout  row wrap class="my-5">
   <v-flex  v-for="(cars, j) in gallery" :key =j xs12 md6  lg4>
     
      <v-card
    

    class="mx-14 my-10"
    max-width="370"
   
   
  >
    <v-img
     
      class="white--text align-end"
      height="220px"
      :src=cars.image
    >
      
    </v-img>
    <v-card-title >{{cars.Name}}</v-card-title>

    <v-card-subtitle class="pb-0" >
      Model: {{cars.model}}
    </v-card-subtitle>

    <v-card-text class="pb-0"  >
      <div>Year: {{cars.year}}</div>
    </v-card-text>

    <v-card-text class="text--primary">
      <div>Price: ${{cars.price}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
        v-on:click="addItemToCart(cars)"
      >
        ADD TO CART
      </v-btn>
    </v-card-actions>
  </v-card>
     

   </v-flex>
 </v-layout>

 

  

 
  
  </v-main>
  
     
        
       
  
</template>

<script>
import { mapState } from 'vuex'
  export default {
    name: "Helloworld",
    computed:{
        ...mapState([
            "gallery",
            "items",
            "cart"
        ]),
       
    },
    methods:{
             //...mapMutations([ "addItemToCart"]),
             addItemToCart(cars){
               this.cart.push(cars)
               console.log(this.cart)
             }

    },
    data(){
        return{
        // cart:[]
        }
    },
    
    }
    
  
</script>

<style scoped>
  p{
    color:red;
    margin-top: 0;
  }
  
  .slides{
    background-size: cover;
  background-position: center;
  }
  .check{
    position: relative;
    top: 50px;
  }
</style>