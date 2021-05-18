<template>
<v-container>
    <v-footer absolute dark padless class="footer ">
        <v-container class="text-center ">
            <v-layout row wrap>
                <v-flex><b>Developed By:</b> Chris</v-flex>
                <router-link to="/Contact" class="contact" style="text-decoration: none; color:white">
                    <v-flex class="contact">Contact</v-flex>
                </router-link>
                <v-flex>© 2021</v-flex>
            </v-layout>
        </v-container>
            
    </v-footer>
</v-container>

</template>
<style>
.footer{
    height: 70px;
}
li a { 
    text-decoration: none;
}
</style>