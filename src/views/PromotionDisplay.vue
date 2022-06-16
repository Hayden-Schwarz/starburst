<template>
  <div>
    <div>
      <img src="../assets/insta-discount.png" alt="discount" class="promotion">
      <div class="promotion">
        <p class="promotion">
          {{deal.dealText}}
          <br>

        </p>
        <p class="terms">T&amp;Cs Apply</p>
      </div>
      <div class="row">
        <div class="col-8">
          <p class="description">
            Only available at <span style="color: red">{{deal.partnerName}}</span>
            <br>
            Valid until {{ deal.endDate }}
            <span v-if="deal.limit > 0">
            <br>
            {{ deal.limit }} per customer
            </span>
          </p>
        </div>
        <div class="col-4 align-content-center">
          <BIconShare class="share"></BIconShare>
          <p class="share-text">Share</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6" v-for="advertiser in deal.advertisers" v-bind:key="advertiser.advertiserId">
        <a :href="advertiser.advertiserUrl" target="_blank">
        <img :src="advertiser.advertiserImage" alt="advert" class="advert">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { useDeals } from '@/stores/useDeals'
import { useRoute } from 'vue-router'
export default {
  name: 'PromotionDisplay',
  setup(){

    const route = useRoute()
    const dealId = parseInt(route.params.id)
    const deals = useDeals()
    const deal = deals.getDealById(dealId)
    console.log(deal)
    return { deal }
  }
}
</script>

<style scoped>
img.promotion {
  width: 100%;
}

div.promotion {
  width: 100%;
  background-color: #fdb913;
}

p.promotion {
  font-size: larger;
  white-space: pre;
}

p.terms {
  font-size: x-small;
  text-align: right;
  margin-top: -28px;
  margin-right: 10px;
  margin-bottom: 10px;
}

div.description {
  background-color: white
}

p.description {
  text-align: left;
  font-size: x-small;
  margin-left: 3px;
}

.share {
  width: 2em;
  height: 2em;
  /*margin-top: 10%;*/
  /*margin-right: 10px;*/
  text-align: left;
}
.share-text{
  font-size: x-small;
  /*text-align: center;*/
}

img.advert {
  width: 100%;
  margin-bottom: 24px;

}
</style>
