<template>
  <div>
    <p class="strburst-head">My Card</p>
    <div class="spr-nova-card">
      <img ref="image" src="../assets/card_top.png" alt="card" class="spr-nova-card">
        <vue-barcode :value="user.getCardId" format="code128" tag="canvas"
                     :options='{ displayValue: true, fontsize: 10, font: "Ubuntu",  height: 50 }'>
        Card ID: {{user.getCardId }}
        </vue-barcode>
      <img ref="image" src="../assets/card_bottom.png" alt="card" class="spr-nova-card">
    </div>
  </div>
</template>

<script>
import { useUser } from '@/stores/useUser'

export default {
  name: 'CardResult',
  setup () {
    const user = useUser()
    console.log(useUser.getCardId)
    return { user }
  },
}
</script>

<style scoped>

div.spr-nova-card {
  text-align: center;
  padding-left: 6%;
  width: 90%;
}

img.spr-nova-card {
  /*width: 90%;*/

}
svg.barcode{

}
div.main {
}
div.barcode{
  width: 90%;
  text-align: center;
}
p.strburst-head {
  font-size: 20pt;
  text-align: left;
  margin-top: 10px;
  margin-left: 22px;
}
.strburst-info {
  color: #893494;
  font-size: 12pt;
}
strburst-barcode {
  height: 40pt;
  font-size: 50pt;
}
</style>
