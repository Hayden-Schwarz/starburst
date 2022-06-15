<template>
  <div>
    <div>
      <img src="../assets/insta-discount.png" alt="discount" class="promotion">
      <div class="promotion">
        <p class="promotion">
          Get R10 off when you<br> spend R50 or more
          <br>

        </p>
        <p class="terms">T&amp;Cs Apply</p>
      </div>
      <div class="row">
        <div class="col-8">
          <p class="description">
            Only available at <span style="color: red">Roots Protea Glen</span>
            <br>
            Valid until 30 June 2020
            <br>
            1 per customer
          </p>
        </div>
        <div class="col-4 align-content-center">
          <BIconShare class="share"></BIconShare>
          <p class="share-text">Share</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <img src="../assets/ad4.png" alt="advert" class="advert">
      </div>
      <div class="col-6">
        <img src="../assets/ad4.png" alt="advert" class="advert">
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <img src="../assets/ad4.png" alt="advert" class="advert">
      </div>
      <div class="col-6">
        <img src="../assets/ad4.png" alt="advert" class="advert">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PromotionDisplay'
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
  font-size: larger
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
