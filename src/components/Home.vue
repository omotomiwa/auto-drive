<template>
<v-main>

  <!-- <v-container>
    <v-layout row>
      <v-flex>
        <v-card
    class="mx-10 hidden-md-and-down"
    max-width="344"
    height= "340"
     
    
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

      <v-flex>
         <v-carousel style="width:40%;height:340px;border-radius:3px;">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
      </v-flex>
    </v-layout>
  </v-container> -->

  <v-container class="mx-1" >
    <v-layout col>
      <v-flex >
                <v-card
    class="mx-10 hidden-xs-only"
    width="330"
    height= "500"
     
    
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

      <v-flex xs12 md8 >
         <v-carousel  style="border-radius:4px;" >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition">
      </v-carousel-item>
  </v-carousel>
      </v-flex>
      <v-flex>
                <v-card
    class="mx-10 hidden-md-and-down"
    width="400"
    height= "300"
    
     
    
    >
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

 
  
  </v-main>
  
     
        
       
  
</template>

<script>
  export default {
    name: "Helloworld",
    data () {
      return {
        items: [
          {
            src: 'https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
  }
</script>

<style>
  p{
    color:red;
    margin-top: 0;
  }

</style>
