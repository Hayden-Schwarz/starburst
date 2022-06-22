<template>
  <div>
    <br><br>
    <div class="row">
      <div class="col-6 strburst-center">
        <router-link to="/card"><img src="../assets/sprNova_square.png" alt="sprNova"
                                     class="strburst-circle"></router-link>
        <p class="strburst-title">My Card</p>
      </div>
      <div class="col-6 strburst-center">
        <router-link to="/promotions"><img src="../assets/starburst-square.png" alt="sprNova"
                                           class="strburst-circle3"></router-link>
        <p class="strburst-title">Promotions</p>
      </div>
    </div>
    <br>
    <div>
      <button class="strburst-btn" @click="addNotifications">Allow us to send you notifications of new specials</button>
    </div>
    <br>
    <div class="row">
      <div class="col-10 offset-1 strburst-center">
        <p class="strburst-btn strburst-btn-primary">Trending Promotions</p>
      </div>
    </div>
    <div class="row" v-for="deal in deals.getDeals" v-bind:key="deal.dealId" style="margin-top: 10pt">
      <div class="col-1"></div>
      <div class="col-2">
        <img :src="deal.partnerImage" alt="Partner" class="strburst-circle2">
      </div>

      <div class="col-8">
        <router-link :to="{name: 'Promotion', params: {id: deal.dealId} }">
          <p class="strburst-btn">{{ deal.description }}</p>
        </router-link>
      </div>
    </div>
    <br>
    <br>
    <a2-hs></a2-hs>
  </div>
</template>

<script>
import { useUser } from '@/stores/useUser'
import router from '@/router'
import { useDeals } from '@/stores/useDeals'
import { getToken, getMessaging} from 'firebase/messaging'
import CardDataService from '../services/CardDataService'

export default {
  name: 'MainPage',
  setup () {
    const user = useUser()

    if (user.cardUrl === '') {
      router.push('/new')
    }
    const deals = useDeals()
    return { deals }
  },
  methods: {
    addNotifications(){

      const messaging = getMessaging()
      console.log('Firebase cloud messaging object', messaging)
      getToken(messaging, { vapidKey: 'BAeN8iqNHdcBMlZiK2k9OP5f9MrxPXmw2KMBveWQPSj5Y9sU8a6TGnOHMBjmfBbQd_6cpX5HvHKzcpqx26lyNh0' })
        .then((currentToken) => {
          if (currentToken) {
            console.log('client token', currentToken)
            const user = useUser()
            const tokenData = {
              userId: user.getUserId,
              token: currentToken
            }
            CardDataService.sendToken(tokenData).catch((err) => {
              console.log('Send Token Error', err)
            })
          } else {
            console.log('No registration token available. Request permission to generate one.')
          }
        }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err)
      })

    }
  }

}
</script>

<style scoped>
p.mainpage-info {
  /*max-width: 100%;*/
  text-decoration-line: unset;
  padding-top: 40px;
  font-size: 22pt;
}

.strburst-btn {
  font-size: 8pt;
  text-decoration-line: unset;
  padding: 6pt 15pt 6pt 15pt;
  color: #411347;
  border-radius: 24pt;
  border-style: solid;
  border-width: 1pt;
  border-color: #EF4060;
}
.strburst-a2h{

}
.strburst-btn-primary {
  color: white;
  font-size: 16pt;
  border-style: none;
  text-decoration-line: unset;
  background: #EF4060;
}

.strburst-left {
  text-align: left;
  padding-left: 0px;
}

.strburst-right {
  text-align: right;
  padding-right: 0px;
}

.strburst-center {
  text-align: center;
}

.strburst-circle {
  border-radius: 50%;
  text-align: center;
  width: 75%;
  background: #fdb913;
  display: inline;
}

.strburst-circle3 {
  border-radius: 50%;
  text-align: center;
  width: 75%;
  background: #893494;
  display: inline;
}

.strburst-circle2 {
  border-radius: 50%;
  text-align: center;
  width: 100%;
  border-color: #fdb913;
  border-style: solid;
  border-width: 1pt;
  display: inline;
}

.strburst-title {
  text-align: center;
  font-size: 10pt;
  text-decoration-line: none;

}


</style>
