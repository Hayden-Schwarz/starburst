<template>
<div>
  <h1>Your sprNova card</h1>
  <div class="spr-nova-card">
    <img v-bind:src="cardUrl" alt="card" class="spr-nova-card" >
  </div>
</div>
</template>

<script>

import {store} from "@/store";

export default {
  name: "CardResult",
  mounted() {
    console.log(store.userinfo);


  },
  data(){
    return {
      cardUrl: store.cardurl
    }
  }
}
</script>

<style scoped>

div.spr-nova-card{
  max-width: 100%;
}
img.spr-nova-card{
  width: 100%;
}
</style>