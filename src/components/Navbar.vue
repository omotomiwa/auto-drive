<template>
<div>
  <nav>
    <v-app-bar app>
      <v-toolbar-title class="dark--text">
        <router-link to="/" style="color: grey">
              <span class="font-weight-light">AUTO</span>
        </router-link>
        <router-link to="/" style="color:black"><span><b>DRIVE</b></span></router-link>
        
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        class="hidden-sm-and-down"
        width="50"
        label="Search Gallery..."
      ></v-text-field>
      <v-btn plain right class="hidden-sm-and-down">search</v-btn>

      <router-link to="/Login" style="color: grey">
              <v-icon right large class="material-icons-round">person</v-icon> <span class="hidden-sm-and-down">LOGIN</span>
      </router-link>
        
      <router-link to="/Cart" style="color:grey">
              <v-tab>
        <v-badge right color="black accent-7" content="0" overlap>
          <v-icon large right>shopping_cart</v-icon>
        </v-badge>
      </v-tab>
      </router-link>
      

      <v-icon
        medium
        right
        @click="drawer = !drawer"
        class=" material-icons-round"
        >menu</v-icon
      >
      <!-- hidden-md-and-up -->

    </v-app-bar>
     <v-toolbar flat app>
  
     <v-text-field 
        class="hidden-md-and-up"
          width="50"
          label="Search Gallery..."
          >
          </v-text-field>
          <span><v-btn plain 
          class="hidden-md-and-up"
          >search</v-btn></span>
  </v-toolbar>

    <v-navigation-drawer v-model="drawer" app class="grey darken-4">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title white--text">
            Welcome
          </v-list-item-title>
          <v-list-item-subtitle class="white--text">
            Chris!
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        
      >
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router :to="link.route"
          link
        >
          <v-list-item-icon >
            <v-icon class="mx-1 white--text">{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class=" white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>



</div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "home", text: "Home", route: "/" },
        { icon: "account_box", text: "Account", route: "/Account" },
        { icon: "person", text: "Login", route: "/Login" },
      ],
    };
  },
};
</script>
<style>
a{
  text-decoration: none;
  
  }
</style>