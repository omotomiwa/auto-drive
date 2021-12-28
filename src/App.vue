<template>
  <v-app class="dark lighten-4">

    <v-main>
      <Navbar/>
      <router-view/>
      <Footer/>
    </v-main>
  </v-app>
</template> 

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'App',

  components: {
   
    Navbar,
    Footer
    
  },

  data: () => ({
    //
  }),
};
</script>
<style>
body{
  font-family: Helvetica, Arial, sans-serif;
}
a { text-decoration: none; };
</style>
