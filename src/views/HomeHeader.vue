<template>
  <div>
    <div class="starburst-logo">
      <router-link to="/">
        <img alt="Starburst Logo" src="../assets/starburst-logo-2.png" class="starburst-logo">
      </router-link>
    </div>
  </div>
</template>

<script>
import router from '@/router'

export default {
  name: 'HeaderComponent',
  setup(){
    let route = router.currentRoute.value.name
    console.log(route)
    return { route }
  },
  computed(){
    let route2 = router.currentRoute.value.name
    console.log(route2)
    return { route2 }

  }
}
</script>

<style scoped>
img.starburst-logo {
max-width: 60%;
  height: 60pt;
  display: inherit;
}

div.starburst-logo {
  background-color: #893594;
  text-align: center;
  height: 75pt;
  padding-top: 10px;
}

img.partner-logo {
  position: center;
  vertical-align: bottom;
  height: 150px;
  text-align: center;
}

div.partner-logo {
  position: absolute;
  float: right;
  width: 33%;

}
</style>
