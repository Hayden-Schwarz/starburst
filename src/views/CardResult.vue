<template>
  <div>
    <p class="strburst-head">My Card: ID {{ user.getCardId }}</p>
    <div class="spr-nova-card">
      <img ref="image" :src="blobUrl" alt="card" class="spr-nova-card">
    </div>
  </div>
</template>

<script>
import { useUser } from '@/stores/useUser'
import { useCardImage } from '@/stores/useCardImage'


export default {

  name: 'CardResult',

  setup () {
    const user = useUser()
    const cardImage = useCardImage()
    const blobUrl = URL.createObjectURL(cardImage.getImage)
    return { user, blobUrl}
  },
  methods: {
    loaded () {
      if (this.blobUrl) URL.revokeObjectURL(this.blobUrl)
    },
  },
}

</script>

<style scoped>

div.spr-nova-card {
  max-width: 100%;
}

img.spr-nova-card {
  width: 90%;

}

div.main {

}

p.strburst-head {
  font-size: 20pt;
  text-align: left;
  margin-top: 10px;
  margin-left: 20px;;
}
</style>
