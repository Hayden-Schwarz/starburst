<template>
  <div class="row">
    <div class="col-10 offset-1">
      <br>
      <p class="strburst-info">Sign up for stellar savings</p>

      <form>
        <div class="mb-3 strburst-left">
          <label for="mobileNumber" class="form-label">Mobile Number</label>
          <input type="tel" class="form-control" id="mobileNumber" placeholder="0xxxxxxxxx"
                 v-model="state.mobile.mobile_number" required>
          <span v-if="v$.mobile.mobile_number.$error" class="text-warning">
        {{ v$.mobile.mobile_number.$errors[0].$message }}
</span>
        </div>
        <div class="mb-3 strburst-left">
          <label for="confirmNumber" class="form-label">Repeat Mobile Number</label>
          <input type="tel" class="form-control" id="confirmNumber" placeholder="0xxxxxxxxx"
                 v-model="state.mobile.confirm">
          <span v-if="v$.mobile.confirm.$error" class="text-warning">
        {{ v$.mobile.confirm.$errors[0].$message }}
</span>
        </div>
        <div class="mb-3 strburst-left">
          <label for="firstName" class="form-label">First Name</label>
          <input type="text" class="form-control" id="firstName" v-model="state.first_name">
        </div>
        <div class="mb-3 strburst-left">
          <label for="firstName" class="form-label">Last Name</label>
          <input type="text" class="form-control" id="firstName" v-model="state.last_name">
        </div>
        <div class="mb-3 strburst-left">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" v-model="state.email_address"
                 placeholder="(Optional)">
        </div>
        <div class="mb-3 form-check strburst-left">
          <input type="checkbox" class="form-check-input" id="terms" v-model="state.terms"
                 v-bind:value="state.terms.value"
                 @change="v$.terms.$touch()">
          <label class="form-check-label" for="terms">I agree to the Terms and Conditions</label>
          <span v-if="v$.terms.$error" class="text-warning">
          <br>
        {{ v$.terms.$errors[0].$message }}
</span>
        </div>
        <button @click="saveCard" type="button" class="strburst-btn strburst-btn-primary">Sign Up</button>
      </form>
      <br><br>
    </div>
  </div>
</template>

<script>
//import store from '../store'
import useValidate from '@vuelidate/core'
import { required, email, sameAs, helpers } from '@vuelidate/validators'
import { reactive, computed } from 'vue'
// import router from "@/router"
import CardDataService from '@/services/CardDataService'
import { useUser } from '@/stores/useUser'

export default {

  setup () {
    const user = useUser()
    const state = reactive({
      mobile: {
        mobile_number: '',
        confirm: ''
      },
      first_name: '',
      last_name: '',
      email_address: '',
      terms: false

    })
    const rules = computed(() => {
      return {
        email_address: { email },
        mobile: {
          mobile_number: { required: helpers.withMessage('You must enter a mobile number', required) },
          confirm:
            {
              required: helpers.withMessage('You must enter a mobile number', required),
              sameAs: helpers.withMessage('Mobile numbers don\'t match', sameAs(state.mobile.mobile_number))
            }
        },
        terms:
          { sameAs: helpers.withMessage('Please accept the terms and conditions', sameAs(true)) }
      }
    })
    const v$ = useValidate(rules, state)

    return {
      state,
      v$,
      user
    }
  },

  data () {
    return {

      // v$: useValidate(),
      errors: [],
      submitted: false
    }
  },
  methods: {
    saveCard () {
      this.v$.$validate()
      if (!this.v$.$error) { // if ANY fail validation
        console.log('Validation succeeded')
      } else {
        console.log('Form failed validation')
        console.log(this.state.terms)
        return
      }

      const data = {
        mobile_number: this.state.mobile.mobile_number,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email_address: this.state.email_address,
        terms: this.state.terms
      }

      CardDataService.create(data)
        .then(response => {
          console.log(response.data)
          // store.userinfo = response.data
          // console.log(store.userinfo)

          this.user.$patch({
            cardUrl: response.data.card_image,
            cardId: response.data.card_number
          })
          this.$router.push('/card')

        })
        .catch(e => {
          console.log('Error')
          console.log(e)
        })
    }
  }
}
</script>

<style scoped>
.strburst-info {
  font-size: 18pt;
}

.strburst-left {
  text-align: left;
  font-size: 10pt;
}

html, body {
  text-align: left;
}

.form-control{
  border-color: #FDB913;
  border-style: solid;
  border-width: 1.5pt;
  border-radius: 24pt;
}
.strburst-btn {
  font-size: 8pt;
  text-decoration-line: unset;
  padding: 6pt 15pt 6pt 15pt;
  color: #893494;
  border-radius: 24pt;
  border-style: solid;
  border-width: 1pt;
  border-color: #893494;
}
.strburst-btn-primary {
  color: white;
  font-size: 20pt;
  border-style: none;
  text-decoration-line: unset;
  background: #fdb913;
}
</style>
