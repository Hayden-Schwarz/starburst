<template>
<div>
  <p class="strburst-head">My Card</p>
  <div class="spr-nova-card">
    <img v-bind:src="user.cardImage" alt="card" class="spr-nova-card" >
  </div>
</div>
</template>

<script>
import { useUser } from '@/stores/useUser'

export default {
  name: "CardResult",
  setup(){
    const user = useUser()
    console.log("Card Image " + user.cardImage)
    return { user }
  },
}
</script>

<style scoped>

div.spr-nova-card{
  max-width: 100%;
}
img.spr-nova-card{
  width: 90%;

}
div.main{

}
p.strburst-head{
  font-size: 25pt;
  text-align: left;
  margin-top: 10px;
  margin-left: 20px;
;
}
</style>
