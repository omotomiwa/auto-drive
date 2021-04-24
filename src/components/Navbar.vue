<template>
<nav>
    <v-toolbar flat app>
    
        <v-toolbar-title class="dark--text">
            <span class="font-weight-light">AUTO</span>
            <span>DRIVE</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat color="grey">
            <span>Sign In</span>
            <v-icon right>vpn_key</v-icon>
        </v-btn>
        <v-icon right @click="drawer=!drawer">menu</v-icon>
             
        </v-toolbar>

        <v-navigation-drawer class="grey" v-model= "drawer" app>
            <p>test</p>
        </v-navigation-drawer>
    </nav>   
</template>

<script>
export default{
    data(){
        return{
            drawer: false
        }
    }

}
</script>
