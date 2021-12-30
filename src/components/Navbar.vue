<template>
  <div>
    <nav>
      <v-app-bar app clipped-left>
        <v-toolbar-title class="dark--text">
          <router-link to="/" style="color: grey;text-decoration: none;">
            <span class="font-weight-light text-decoration-none">AUTO</span>
          </router-link>
          <router-link to="/" style="color:black; text-decoration: none;"
            ><span><b>DRIVE</b></span></router-link
          >
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="searchTerm"
          class="hidden-sm-and-down"
          width="50"
          label="Search Gallery..."
        ></v-text-field>

        <router-link
          to="/Login"
          style="color: grey; text-decoration: none;"
          class="mx-2"
        >
          <v-icon right size="26" class="material-icons-round">person</v-icon>
          <span class="hidden-sm-and-down">LOGIN</span>
        </router-link>

        <router-link
          to="/Cart"
          style="color:grey; text-decoration: none;"
          class="mx-2"
        >
          <v-tab>
            <v-badge
              right
              color="black accent-7"
              :content="cart.length"
              overlap
            >
              <v-icon size="26" right>shopping_cart</v-icon>
            </v-badge>
          </v-tab>
        </router-link>

        <router-link
          to="/Account"
          style="color: grey; text-decoration: none;"
          class="mx-2"
        >
          <v-icon
            right
            size="26"
            class="material-icons-round hidden-sm-and-down "
            >account_box</v-icon
          >
          <span class="hidden-sm-and-down ">Account</span>
        </router-link>

        <v-icon
          medium
          right
          @click="drawer = !drawer"
          class=" material-icons-round hidden-md-and-up mx-2"
          >menu</v-icon
        >
      </v-app-bar>

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

        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
            link
            style="text-decoration: none;"
          >
            <v-list-item-icon style=" text-decoration: none;">
              <v-icon
                class="mx-1 white--text"
                style="color: white; text-decoration: none;"
                >{{ link.icon }}</v-icon
              >
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title
                class=" white--text"
                style="color: white; text-decoration: none;"
                >{{ link.text }}</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </nav>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["links", "cart", "gallery"]),
    filteredcars() {
      let filteredCars = this.gallery.filter((car) => {
        return car.Name.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
      let orderedPrice = filteredCars.sort((a, b) => {
        return b.price - a.price;
      });
      return orderedPrice;
    },
  },
  methods: {
    //...mapMutations(["addItemToCart"])
  },
  data() {
    return {
      drawer: false,
      onOff: true,
      searchTerm: "",
    };
  },
};
</script>
<style>
a {
  text-decoration: none;
}
</style>
