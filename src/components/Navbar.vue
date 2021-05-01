<template>
  <nav>
    <v-toolbar app>
      <v-toolbar-title class="dark--text">
        <span class="font-weight-light">AUTO</span>
        <span><b>DRIVE</b></span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        class="hidden-sm-and-down"
        width="50"
        label="Search Gallery..."
      ></v-text-field>
      <v-btn plain right class="hidden-sm-and-down">search</v-btn>

      <v-a>
        <v-icon right large class="material-icons-round">person</v-icon> LOGIN
      </v-a>
      <v-tab>
        <v-badge right color="black accent-7" content="0" overlap>
          <v-icon large right>shopping_cart</v-icon>
        </v-badge>
      </v-tab>

      <v-icon
        medium
        right
        @click="drawer = !drawer"
        class=" material-icons-round"
        >menu</v-icon
      >
      <!-- hidden-md-and-up -->
    </v-toolbar>

    <v-navigation-drawer class="grey darken-4 " v-model="drawer" app>
      <v-list v-for="link in links" :key="link.text" router :to="link.route">
        <v-icon class="mx-5 white--text">{{ link.icon }}</v-icon>
        <span class="white--text">{{ link.text }}</span>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "home", text: "Home", route: "/#" },
        { icon: "account_box", text: "Account", route: "/#" },
        { icon: "person", text: "Login", route: "/#" },
      ],
    };
  },
};
</script>
