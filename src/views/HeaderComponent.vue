<template>
  <div>
    <div v-if="$route.path !== '/signup'">
      <Slide :closeOnNavigation="true" >
        <router-link to="/">Home</router-link>
        <router-link to="/card">Card</router-link>
        <router-link to="/promotions">Promotions</router-link>
        <router-link to="/about">About us</router-link>
      </Slide>
    </div>
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
  padding-top: 10pt;
  text-align: center;
  display: inherit;
}

div.starburst-logo {
  background-color: #893594;
  text-align: center;
  height: 75pt

}

img.partner-logo {
  position: center;
  vertical-align: bottom;
  height: 75pt;
  text-align: center;
}

div.partner-logo {
  position: absolute;
  float: right;
  width: 33%;

}

.bm-menu {
  background: white !important;
}

</style>
