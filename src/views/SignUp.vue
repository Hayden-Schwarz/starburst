<template>
  <div>
    <br>
    <h1>Sign Up</h1>
    <p>for your virtual sprNova instant discount card<br>to get your discounts now!</p>

    <form>
      <div class="mb-3">
        <label for="mobileNumber" class="form-label">Mobile Number</label>
        <input type="tel" class="form-control" id="mobileNumber" placeholder="0xxxxxxxxx"
               v-model="state.mobile.mobile_number" required>
        <span v-if="v$.mobile.mobile_number.$error" class="text-warning">
        {{ v$.mobile.mobile_number.$errors[0].$message }}
</span>
      </div>
      <div class="mb-3">
        <label for="confirmNumber" class="form-label">Repeat Mobile Number</label>
        <input type="tel" class="form-control" id="confirmNumber" placeholder="0xxxxxxxxx"
               v-model="state.mobile.confirm">
        <span v-if="v$.mobile.confirm.$error" class="text-warning">
        {{ v$.mobile.confirm.$errors[0].$message }}
</span>
      </div>
      <div class="mb-3">
        <label for="firstName" class="form-label">First Name</label>
        <input type="text" class="form-control" id="firstName" v-model="state.first_name">
      </div>
      <div class="mb-3">
        <div class="mb-3">
          <label for="firstName" class="form-label">Last Name</label>
          <input type="text" class="form-control" id="firstName" v-model="state.last_name">
        </div>
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" v-model="state.email_address"
               placeholder="(Optional)">
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="terms" v-model="state.terms" v-bind:value="state.terms.value"
               @change="v$.terms.$touch()">
        <label class="form-check-label" for="terms">I agree to the Terms and Conditions</label>
        <span v-if="v$.terms.$error" class="text-warning">
          <br>
        {{ v$.terms.$errors[0].$message }}
</span>
      </div>
      <button @click="saveCard" type="button" class="btn btn-primary">Sign Up</button>
    </form>
  </div>
</template>

<script>
import {store} from "@/store";
import useValidate from "@vuelidate/core";
import {required, email, sameAs, helpers} from "@vuelidate/validators";
import {reactive, computed} from "vue";
// import router from "@/router";
import CardDataService from "@/services/CardDataService";


// import axios from "axios";
// import http from "@/http-common";
// import http from "@/http-common";

export default {

  setup() {
    const state = reactive({
      mobile: {
        mobile_number: '',
        confirm: ''
      },
      first_name: '',
      last_name: '',
      email_address: '',
      terms: false,

    });
    const rules = computed(() => {
      return {
        email_address: {email},
        mobile: {
          mobile_number: {required: helpers.withMessage('You must enter a mobile number', required)},
          confirm:
              {required: helpers.withMessage('You must enter a mobile number', required),
            sameAs: helpers.withMessage("Mobile numbers don't match", sameAs(state.mobile.mobile_number))}
        },
        terms:
            {sameAs: helpers.withMessage("Please accept the terms and conditions",sameAs(true ))}
      }
    });
    const v$ = useValidate(rules, state);

    return {state, v$};
  },

  data() {
    return {

      // v$: useValidate(),
      errors: [],
      submitted: false
    }
  },
  methods: {
     saveCard() {
      this.v$.$validate();
      if (!this.v$.$error) { // if ANY fail validation
        console.log("Validation succeeded");
      } else {
        console.log('Form failed validation');
        console.log(this.state.terms)
        return;
      }

      var data = {
        "mobile_number": this.state.mobile.mobile_number,
        "first_name": this.state.first_name,
        "last_name": this.state.last_name,
        "email_address": this.state.email_address,
        "terms" : this.state.terms,
      };

      CardDataService.create(data)
          .then(response => {
            console.log(response.data);
            //store.userinfo = response.data;
            // console.log(store.userinfo);
            store.cardurl = response.data.card_image;
            this.$router.push('/card');
          })
          .catch(e => {
            console.log("Error");
            console.log(e);
          });

    }
  },
}
</script>

<style scoped>

</style>