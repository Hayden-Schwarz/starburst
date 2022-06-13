<template>
  <div>
        <div class="starburst-logo">
          <img alt="Starburst Logo" src="../assets/starburst-logo-2.png" class="starburst-logo">
        </div>
        <div>
          <img alt="Starburst Logo" src="../assets/roots.png" class="partner-logo">
        </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent"
}
</script>

<style scoped>
img.starburst-logo {
  height: 75px;
}

div.starburst-logo {
  float: left;
  width: 67%;
  background-color: #893594;
}

img.partner-logo {
  position: center;
  vertical-align: bottom;
  height: 75px;
}

div.partner-logo {
  position: absolute;
  float: right;
  width: 33%;

}

</style>