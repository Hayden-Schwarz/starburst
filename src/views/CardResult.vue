<template>
  <div>
    <p class="strburst-head">My Card</p>
    <div class="spr-nova-card main">
      <img ref="image" src="../assets/card_top.png" alt="card" class="spr-nova-card">
        <vue-barcode :value="user.getCardId" format="code128"
                     :options='{ displayValue: true, fontsize: 10, height: 50,  }'>
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
}

img.spr-nova-card {
  width: 90%;

}
canvas.barcode{

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
  margin-left: 20px;;
}

strburst-barcode {
  height: 40pt;
  font-size: 50pt;
}
</style>
