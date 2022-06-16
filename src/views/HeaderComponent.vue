<template>
  <div>
    <Slide :closeOnNavigation="true">
      <router-link to="/">Home</router-link>
      <router-link to="/card">Card</router-link>
      <router-link to="/promotions">Promotions</router-link>

    </Slide>
    <div class="starburst-logo">
      <router-link to="/">
        <img alt="Starburst Logo" src="../assets/starburst-logo-2.png" class="starburst-logo">
      </router-link>
    </div>
  </div>
</template>

<script>
// import router from '@/router'

export default {
  name: 'HeaderComponent',
}
</script>

<style scoped>
img.starburst-logo {
  height: 65pt;
  padding-top: 15pt;
}

div.starburst-logo {
  background-color: #893594;
  text-align: center;
  border-bottom-left-radius: 40% 10pt;
  border-bottom-right-radius: 40% 10pt;
  height: 90pt

}

img.partner-logo {
  position: center;
  vertical-align: bottom;
  height: 75px;
  text-align: center;
}

div.partner-logo {
  position: absolute;
  float: right;
  width: 33%;

}

.bm-menu {
  background: white!important;
}
</style>
