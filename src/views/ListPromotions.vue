<template>
  <div>
    <br>
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10">
        <p class="heading">Current Promotions</p>
      </div>
      <div class="row" v-for="deal in deals.getDeals" v-bind:key="deal.dealId">
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

    </div>
  </div>
</template>

<script>
import { useDeals } from '@/stores/useDeals'
import CardDataService from '@/services/CardDataService'
export default {
  name: 'ListPromotions',
  setup(){
    const deals = useDeals()
    CardDataService.getAllDeals().then(response => {
      deals.$patch({deals: response.data})
      console.log(response.date)
      console.log(deals.getDeals)

    })

    return { deals }
  }
}
</script>

<style scoped>
p.heading{
  font-size: 20pt;
  text-align: left;
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
.strburst-circle2{
  border-radius: 50%;
  text-align: center;
  width: 100%;
  background: #fdb913;
}
</style>
