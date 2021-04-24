<template>
  <v-app class="dark lighten-4">

    <v-main>
      <Navbar/>
      <Home/>
    </v-main>
  </v-app>
</template>

<script>
import Home from '@/components/Home';
import Navbar from '@/components/Navbar'

export default {
  name: 'App',

  components: {
    Home,
    Navbar
  },

  data: () => ({
    //
  }),
};
</script>
