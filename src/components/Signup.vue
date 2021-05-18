<template>
<v-container>
   <v-card
    class="mx-auto my-12"
    max-width="374"
  >
 

    <v-card-title class="justify-center black--text">CREATE ACCOUNT</v-card-title>

    <v-card-text>
       <validation-observer
    ref="observer"
    v-slot="{ invalid }"
    
  >
    <form @submit.prevent="submit">

        <v-text-field
        v-model="name"
          label="Username"
        ></v-text-field>

           <validation-provider
        v-slot="{ errors }"
        name="email"
        rules="email"
      >
        <v-text-field
          v-model="email"
          :error-messages="errors"
          label="E-mail"
        ></v-text-field>
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="password"
        
       
        
      >
        <v-text-field
          v-model="password"
          :error-messages="errors"
          label="Password"
          
          
          
        ></v-text-field>
      </validation-provider>

       <validation-provider
        v-slot="{ errors }"
        name="password"
       
        
      >
        <v-text-field
          v-model="password"
          :error-messages="errors"
          label="Confirm Password"
          
        ></v-text-field>
      </validation-provider>
     

     

      <v-btn
        class="mr-4"
        type="submit"
        
        :disabled="invalid"
        @click="clear"
      >
        Signup
      </v-btn>

    </form>
  </validation-observer><br><br>


      <div>Already have an account? <router-link to="/Login" style="color:blue; text-decoration: none;">Login</router-link> here!
     </div>
    </v-card-text>
   
    <v-divider class="mx-4"></v-divider>


   

    <v-card-actions>
      
    </v-card-actions>
  </v-card>

</v-container>
</template>


<script>
  import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  setInteractionMode('eager')

  extend('digits', {
    ...digits,
    message: '{_field_} needs to be {length} digits. ({_value_})',
  })

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })

  extend('regex', {
    ...regex,
    message: '{_field_} {_value_} does not match {regex}',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
  })

  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      name: '',
      phoneNumber: '',
      email: '',
      password: '',
      confirmPassword:""
     
      
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.password = '',
        this.email = '',
        this.name = "",
        this.phoneNumber= ""
        this.$refs.observer.reset()
      },
    },
  }
</script>