<template>
  <div>
    <div>
      <img src="../assets/insta-discount.png" alt="discount" class="promotion">
      <div class="promotion">
        <p class="promotion">
          Discount Product
          <br>
          Discount Brand
          <br>
          Discount Price
        </p>
        <p class="terms">T&amp;Cs Apply</p>
      </div>
      <div class="row description">
        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
          <p class="description">
            Only available at <span style="color: red">Shop Name</span>
            <br>
            Valid until 30 June 2020
            <br>
            1 per customer
          </p>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <img src="../assets/share.png" alt="share" class="share"
               style="margin-top: 10%">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-6 col-md-6 col-sm-6 col-xs-6">
        <img src="../assets/ad4.png" alt="advert" class="advert">
      </div>
      <div class="col-xl-6 col-md-6 col-sm-6 col-xs-6">
        <img src="../assets/ad4.png" alt="advert" class="advert">
      </div>
    </div>

    <div>
      <div class="col-xl-6 col-md-6 col-sm-6 col-xs-6">
        <img src="../assets/ad4.png" alt="advert" class="advert">
      </div>
      <div class="col-xl-6 col-md-6 col-sm-6 col-xs-6">
        <img src="../assets/ad4.png" alt="advert" class="advert">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PromotionDisplay"
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
}

p.terms {
  font-size: x-small;
  text-align: right;
  margin-top: -28px;
  margin-right: 10px;
  margin-bottom: 10px;
}

div.description {
  background-color: white;
}

p.description {
  text-align: left;
  font-size: small;
  margin-left: 3px;
}

img.share {
  width: 100%;
  margin-top: 10%;
  margin-right: 10px;
}

img.advert {
  width: 100%;
  margin-bottom: 24px;

}
</style>