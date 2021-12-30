<template>
  <div class="container">
    <div class="checkoutContainer">
      <h1 class="checkout">Checkout</h1>
      <v-divider></v-divider>
    </div>
    <v-container>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-layout row wrap class="content">
          <v-flex xs12 sm12 md6>
            <h6>Customer</h6>
            <v-divider></v-divider>
            <v-layout row wrap>
              <v-flex xs12 sm12 md6 lg6>
                <p class="headers">First name*</p>
                <b-col sm="12">
                  <b-form-input
                    v-model="firstname"
                    :rules="nameRules"
                    label="firstname"
                    type="text"
                    required
                    id="input-large"
                    class="inputs"
                    size="md"
                    placeholder="John"
                  ></b-form-input>
                </b-col>
                <p class="headers">Last name*</p>
                <b-col sm="12">
                  <b-form-input
                    required
                    id="input-large"
                    class="inputs"
                    size="md"
                    placeholder="Doe"
                    type="text"
                  ></b-form-input>
                </b-col>
              </v-flex>
              <v-flex xs12 sm12 md6 lg6>
                <p class="headers">Telephone*</p>
                <b-col sm="12">
                  <b-form-input
                    type="text"
                    required
                    id="input-large"
                    class="inputs"
                    size="md"
                  ></b-form-input>
                </b-col>
                <p class="headers">Email address*</p>
                <b-col sm="12">
                  <b-form-input
                    id="input-large"
                    type="email"
                    required
                    class="inputs"
                    size="md"
                    placeholder="john@doe.com"
                  ></b-form-input>
                </b-col>
              </v-flex>
              <v-flex xs12 sm12 md12 lg12>
                <v-text class="shipping_address font-weight-black"
                  >Shipping Address</v-text
                >
              </v-flex>

              <p class="fullname">Full name*</p>
              <b-col sm="12">
                <b-form-input
                  type="text"
                  id="input-large"
                  required
                  class="inputs"
                  size="md"
                  placeholder="John Doe"
                ></b-form-input>
              </b-col>
              <v-flex xs12 sm12 md6 lg6>
                <p class="headers">Country*</p>
                <b-col sm="12">
                  <b-form-select
                    type="text"
                    required
                    id="input-large"
                    class="inputs"
                    size="md"
                    placeholder="John"
                  ></b-form-select>
                </b-col>
                <p class="headers">Address*</p>
                <b-col sm="12">
                  <b-form-input
                    id="input-large"
                    required
                    class="inputs"
                    size="md"
                    placeholder="318 Homer Street"
                    type="text"
                  ></b-form-input>
                </b-col>
                <p class="headers">State/province/region*</p>
                <b-col sm="12">
                  <b-form-select
                    required
                    id="input-large"
                    class="inputs"
                    size="md"
                    type="text"
                  ></b-form-select>
                </b-col>
              </v-flex>
              <v-flex xs12 sm12 md6 lg6>
                <p class="headers">City*</p>
                <b-col sm="12">
                  <b-form-input
                    required
                    id="input-large"
                    class="inputs"
                    size="md"
                    type="text"
                  ></b-form-input>
                </b-col>
                <p class="headers">Address line 2(optional)</p>
                <b-col sm="12">
                  <b-form-input
                    id="input-large"
                    class="inputs"
                    size="md"
                    type="text"
                  ></b-form-input>
                </b-col>
                <p class="headers">Postal/Zipcode</p>
                <b-col sm="12">
                  <b-form-input
                    id="input-large"
                    class="inputs"
                    size="md"
                    type="text"
                  ></b-form-input>
                </b-col>
              </v-flex>
              <p class="headers order">Order note (optional)</p>
              <b-col sm="12">
                <b-form-textarea
                  id="input-large"
                  class="inputs"
                  size="md"
                  type="text"
                ></b-form-textarea>
              </b-col>
              <v-flex xs12 sm12 md12 lg12>
                <v-text class="font-weight-black">Payment Detail</v-text>
              </v-flex>
              <v-card width="560">
                <v-radio-group mandatory>
                  <v-radio
                    class="px-1"
                    color="black"
                    fluid
                    label="Credit/Debit Card"
                  ></v-radio>
                </v-radio-group>
                <v-layout row wrap>
                  <v-flex xs12 sm12 md6 lg6>
                    <v-container>
                      <p class="heading">Card Number</p>
                      <b-col sm="12">
                        <b-form-input
                          id="input-large"
                          class="inputs"
                          size="md"
                          type="text"
                          placeholder="4242 4242 4242 4242"
                        ></b-form-input>
                      </b-col>
                      <p class="heading">Expiry Month</p>
                      <b-col sm="12">
                        <b-form-input
                          id="input-large"
                          class="inputs"
                          width="sm"
                          size="md"
                          type="text"
                          placeholder="11"
                        ></b-form-input>
                      </b-col>
                    </v-container>
                  </v-flex>

                  <v-flex xs12 sm12 md6 lg6>
                    <v-container>
                      <p class="heading">CVC(CVV)</p>
                      <b-col sm="12">
                        <b-form-input
                          id="input-large"
                          class="inputs"
                          size="md"
                          type="text"
                          placeholder="123"
                        ></b-form-input>
                      </b-col>
                      <p class="heading">Expiry Year</p>
                      <b-col sm="12">
                        <b-form-input
                          id="input-large"
                          class="inputs"
                          size="md"
                          type="text"
                          placeholder="22"
                        ></b-form-input>
                      </b-col>
                    </v-container>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-layout>
          </v-flex>

          <v-flex xs12 sm12 md6 lg6>
            <h6 class="hidden-sm-and-down">Your Order</h6>
            <v-divider></v-divider>
            <v-container class="mx-auto my-4">
              <v-card width="550" color="blue lighten-5" 
              v-for = "(automobiles, auto) in cart"
              :key= "auto" class="mx-auto my-6">
              
                <v-container>
                  <v-img
                    width="120"
                    height="70"
                    class="avatar"
                    :src="automobiles.image"
                  ></v-img>
                </v-container>
                <v-layout row wrap class="orderInfo">
                  <v-flex class="a" xs6 sm6 lg3 md3>Name:{{automobiles.Name}}</v-flex>
                  <v-flex class="a" xs6 sm6 lg3 md3>Model: {{automobiles.model}}</v-flex>
                  <v-flex class="quantity a" sm6 xs6 lg3 md3>Quantity: {{automobiles.quantity}}</v-flex>
                  <v-flex class="a" sm6 xs6 lg3 md3>$ {{ Number(automobiles.price).toLocaleString() }}</v-flex>
                </v-layout>
              </v-card>
            </v-container>
            <v-container>
              <v-divider></v-divider>
            </v-container>
            <v-container>
              <v-layout row wrap>
                <v-flex class="a" xs6 sm6 md6 lg6>Subtotal</v-flex>
                <v-flex class="a" xs6 sm6 md6 lg6>2344</v-flex>
                <v-flex class="a" xs6 sm6 md6 lg6>Tax</v-flex>
                <v-flex class="a" xs6 sm6 md6 lg6>2344</v-flex>
              </v-layout>

              <v-divider color="black"></v-divider>
            </v-container>
            <v-container>
              <v-layout row wrap>
                <v-flex class="b" xs6 sm6 md6 lg6>Total Amount</v-flex>
                <v-flex class="b" xs6 sm6 md6 lg6> $ 2344</v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
        <div class="text-xs-center button">
          <v-btn class="payButton my-6" width="150" color="primary">
            Pay Now
          </v-btn>
        </div>
      </v-form>
    </v-container>
  </div>
</template>
<style scoped>
.checkout {
  text-align: center;
  position: relative;
  top: 18px;
}
.checkoutContainer {
  margin-bottom: 1px;
}
.content {
  margin-bottom: 25px;
}
.headers {
  position: relative;
  top: 10px;
}
.shipping_address {
  position: relative;
  top: 7px;
}
.fullname {
  position: relative;
  top: 10px;
  left: 17%;
}
.order {
  position: relative;
  top: 10px;
  left: 17%;
}
.heading {
  position: relative;
  top: 10px;
}
.button {
  text-align: center;
}

.a {
  font-weight: bold;
}
.orderInfo {
  justify-content: space-between;
}
.subTotal {
  float: left;
}
.subTotalDigit {
  float: right;
}
.b {
  font-weight: bolder;
  font-size: large;
}
</style>
<script>
import { mapState } from "vuex";
export default {
    name: "Checkout",
     computed: {
    ...mapState(["cart"]),
    sum() {
      let total = 0;
      this.cart.forEach((cars) => {
        total += parseFloat(cars.price * cars.quantity);
      });
      return total;
    },
  },
  data: () => ({
    valid: true,
    firstname: "",
    nameRules: [(v) => !!v || "firstname is required"],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>
