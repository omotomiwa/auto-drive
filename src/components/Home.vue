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
  export default {
    name: "Helloworld",
    data () {
      
      return {
        
          computed: {
      height () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 220
          case 'sm': return 400
          case 'md': return 500
          case 'lg': return 600
          case 'xl': return 800
        }
      },
    },
      
        items: [
          {   src: 'https://images.pexels.com/photos/6335848/pexels-photo-6335848.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        
          },
          {
            src: 'https://images.pexels.com/photos/4038045/pexels-photo-4038045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          },
          {
            src: "https://media.ed.edmunds-media.com/mercedes-benz/c-class/2019/oem/2019_mercedes-benz_c-class_sedan_c-300_fq_oem_1_815.jpg",
            
          },
          { src: "https://media.ed.edmunds-media.com/land-rover/range-rover-sport/2020/oem/2020_land-rover_range-rover-sport_4dr-suv_p525-autobiography_fq_oem_2_815.jpg",
          },
        ],
        gallery:[
          { Name: "Mercedes", model:"C300", year:"2019", image:"https://media.ed.edmunds-media.com/mercedes-benz/c-class/2019/oem/2019_mercedes-benz_c-class_sedan_c-300_fq_oem_1_815.jpg", price: "32,500" },
          { Name: "Jaguar", model:"XE-P300", year:"2020", image:"https://media.ed.edmunds-media.com/jaguar/xe/2020/oem/2020_jaguar_xe_sedan_s_fq_oem_1_1600.jpg", price: "47,290"},
          { Name: "BMW", model:"750i", year:"2020", image:"https://www.cnet.com/a/img/ghsbIRPZlbUUoh7Vte-0gwh2zA8=/1200x675/2019/04/02/faf2e652-4d9d-4c8e-93ee-b9fd1c39f898/2020-bmw-750li-xdrive-1.jpg", price: "94,445"}, 
          { Name: "Audi", model:"RS7", year:"2020", image:"https://www.slashgear.com/wp-content/uploads/2019/09/RS7_0000015-1280x720.jpg", price: "120,000"}, 
          { Name: "Range Rover", model:"Velar", year:"2021", image:"https://m.media-amazon.com/images/I/412WMvLC6bL.jpg", price: "56,900"}, 
          { Name: "Porsche", model:"Panamera", year:"2019", image:"https://di-uploads-pod15.dealerinspire.com/porscheofneworleans/uploads/2019/01/mlp-01.png", price: "127,960"}, 
          { Name: "Bentley", model:"Bentayga", year:"2019", image:"https://cdn.motor1.com/images/mgl/mV46R/s1/2019-bentley-bentayga-v8-review.jpg", price: "230,000"}, 



          { Name: "Mercedes", model:"G Wagon", year:"2020", image:"https://www.cnet.com/a/img/on1lXEG-_fTUTtpd0Xpx06eZ60U=/1200x675/2020/10/07/8aa56ed8-69ff-4b50-ae8e-b4cf7dde2189/2020-mercedes-amg-g63-001.jpg", price: "130,900" },
          { Name: "Jaguar", model:"F-Type", year:"2019", image:"https://cimg0.ibsrv.net/ibimg/hgm/1920x1080-1/100/649/jaguar-f-type_100649396.jpg", price: "60,750"},
          { Name: "BMW", model:"M5", year:"2018", image:"https://www.cnet.com/a/img/ngqmbVIb7D6CHJiKEz3ZOoYBPaI=/2018/09/13/b083d90e-2cf6-4194-9866-2aa4669e5ac5/bmw-m5-2018-ogi-1403.jpg", price: "102,600"}, 
          { Name: "Audi", model:"Q8", year:"2020", image:"https://www.dekhnews.com/wp-content/uploads/2019/11/Audi-Q8.jpg", price: "68,200"}, 
          { Name: "Range Rover", model:"Evogue", year:"2021", image:"https://www.motortrend.com/uploads/sites/5/2020/11/2021-Range-Rover-Evoque-12.jpg?fit=around%7C480:270", price: "44,350"}, 
          { Name: "Porsche", model:"Cayenne", year:"2018", image:"https://blog.dupontregistry.com/wp-content/uploads/2017/08/New-Cayenne-Feature.jpg", price: "66,800"},
          { Name: "Bentley", model:"Continental GT", year:"2020", image:"https://www.cnet.com/a/img/aGE3tsNtH2kRLDjvQ3G2E-Quw2Q=/770x433/2020/01/20/57e817f0-76e3-4bf1-b18f-8ca12204056c/2020-bentley-continental-gt-coupe-001.jpg", price: "202,500"}, 

          { Name: "Mercedes", model:"S550", year:"2021", image:"https://cdn.carbuzz.com/gallery-images/2021-mercedes-benz-s-class-sedan-rear-angle-view-carbuzz-749558.jpg", price: "109,800" },
          { Name: "Jaguar", model:"F-Pace", year:"2021", image:"https://www.cnet.com/a/img/4DDWh5oO3I3PVBrw1NTiH8rBf9k=/2020/12/01/f13c8385-46d9-4eb2-8730-f47a5dc43547/2021-jaguar-f-pace-svr-113-ogi.jpg", price: "51,145"},
          { Name: "BMW", model:"X6", year:"2019", image:"https://media.ed.edmunds-media.com/bmw/x6/2018/oem/2018_bmw_x6_4dr-suv_xdrive50i_fq_oem_10_500.jpg", price: "42,999"}, 
          { Name: "Audi", model:"S8", year:"2020", image:"https://cimg2.ibsrv.net/ibimg/hgm/1920x1080-1/100/706/audi-s8_100706826.jpg", price: "148,045"}, 
          { Name: "Range Rover", model:"Sport", year:"2020", image:"https://media.ed.edmunds-media.com/land-rover/range-rover-sport/2020/oem/2020_land-rover_range-rover-sport_4dr-suv_p525-autobiography_fq_oem_2_815.jpg", price: "114,500"}, 
          { Name: "Porsche", model:"Carrera", year:"2021", image:"https://cdn.carbuzz.com/gallery-images/2021-porsche-911-carrera-rear-angle-view-carbuzz-504559.jpg", price: "99,200"},
          { Name: "Bentley", model:"Mulsanne", year:"2020", image:"https://www.motortrend.com/uploads/sites/5/2020/03/5-2020-bentley-mulsanne.jpg", price: "304,670"}, 


          { Name: "Mercedes", model:"GLE 450", year:"2021", image:"https://media.ed.edmunds-media.com/mercedes-benz/gle-class-coupe/2021/oem/2021_mercedes-benz_gle-class-coupe_4dr-suv_amg-gle-53_fq_oem_1_1600.jpg", price: "76,500" },
          { Name: "Jaguar", model:"XJ", year:"2019", image:"https://i.ytimg.com/vi/fI5boW0PAps/maxresdefault.jpg", price: "75,700"},
          { Name: "BMW", model:"X3", year:"2020", image:"https://www.motortrend.com/uploads/sites/5/2019/11/2020-BMW-X3M-Competition-front-three-quarter-in-motion-1.jpg?fit=around%7C875:492.1875", price: "43,500"}, 
          { Name: "Audi", model:"RS3", year:"2019", image:"https://s1.cdn.autoevolution.com/images/gallery/AUDI-RS3-Sedan-5817_6.jpg", price: "56,200"}, 
          { Name: "Range Rover", model:"Autobiography", year:"2021", image:"https://mediacloud.carbuyer.co.uk/image/private/s--Tz6aGUgA--/v1579627451/carbuyer/range-rover-autobiography.jpg", price: "152,500"}, 
          { Name: "Porsche", model:"Cayman", year:"2019", image:"https://www.hdcarwallpapers.com/walls/2019_porsche_718_cayman_gts_4k-HD.jpg", price: "60,673"},
          { Name: "Bentley", model:"Flying Spur", year:"2019", image:"https://carsalesbase.com/wp-content/uploads/2020/02/Bentley_Flying_Spur-auto-sales-statistics-Europe.jpg", price: "200,00"}, 

          { Name: "Cheverolet", model:"Camaro", year:"2019", image:"https://www.ccarprice.com/products/Chevrolet-Camaro-SS-Convertible-2019.png", price: "67,270"}, 
          { Name: "Mercedes", model:"CLA 45", year:"2020", image:"https://www.cnet.com/a/img/zLuqMKOwIAFLN8sMHwHpq1uMjMM=/2020/04/20/e779edbc-2feb-417a-ba99-3836c119621a/ogi1-2020-mercedes-amg-cla45-001.jpg", price: "55,350" },
          { Name: "Jaguar", model:"XF", year:"2020", image:"https://cdn.static-carhp.com/images/car/Jaguar/old_Jaguar_XF_2019_Sedan_5dc01a522491c.jpg", price: "68,200"},
          { Name: "BMW", model:"i8", year:"2019", image:"https://cdn.motor1.com/images/mgl/Q23P7/s1/2019-bmw-i8-roadster-review.jpg", price: "147,500"}, 
          { Name: "Audi", model:"Q7", year:"2021", image:"https://images.hgmsites.net/hug/2021-audi-q7_100746712_h.jpg", price: "58,000"}, 
          { Name: "Range Rover", model:"HSE", year:"2019", image:"https://www.cnet.com/a/img/oQQjVpS37CUd5dH7f8bmmr-6yPM=/2019/04/22/f4c85084-4ab1-45fb-842b-7b8b77a3f0a1/2019-land-rover-range-rover-p400e-3829.jpg", price: "89,160"}, 
          { Name: "Porsche", model:"Maycan", year:"2021", image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-porshe-macan-mmp-1-1605306737.jpg", price: "72,100"},
          { Name: "Lexus", model:"LC500", year:"2019", image:"https://images.hgmsites.net/hug/lexus-lc_100690171_h.jpg", price: "92,950"}, 

          { Name: "Dodge", model:"Charger", year:"2020", image:"https://cdn.carbuzz.com/gallery-images/840x560/795000/900/795980.jpg", price: "30,245"}, 
          { Name: "Mercedes", model:"E350", year:"2021", image:"http://lbimg.in.com/LiveBlog/img/2021/03/e78f5c1df876858a312bb0c460f79554.jpg", price: "56,780" },
          { Name: "Jaguar", model:"I-Pace", year:"2021", image:"https://blog.consumerguide.com/wp-content/uploads/sites/2/2019/06/front-1024x550.png", price: "99,200"},
          { Name: "BMW", model:"M550i", year:"2019", image:"https://www.bmw.co.uk/content/dam/bmw/marketGB/bmw_co_uk/bmw-cars/5-series/5series-saloon-2020-modelcard-890x501.jpg", price: "37,972"}, 
          { Name: "Audi", model:"R8", year:"2019", image:"https://images.hgmsites.net/med/audi-r8_100723110_m.jpg", price: "248,900"}, 
          { Name: "Range Rover", model:"Discovery", year:"2020", image:"https://www.ccarprice.com/products/Land_Rover_Discovery_Sport_S_R-Dynamic_4WD_2020.jpg", price: "52,300"}, 
          { Name: "Porsche", model:"911", year:"2021", image:"http://images.summitmedia-digital.com/topgear/images/2020/04/11/2020-porsche-911-turbo-s-05-1586596091.jpg", price: "99,200"},
        ]
      }
    },
  }
</script>

<style>
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