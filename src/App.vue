<template>
  <div>
    <body class="d-flex flex-column min-vh-100">
    <div class="container-fluid all-row">
      <div class="row all-row">
        <div class="col-xl-3 col-md-3 col-sm-3 col-xs-3 all-row"></div>
        <div class="col-xl-6 col-md-6 col-sm-6 col-xs-12 all-row">
          <div v-if="$router.currentRoute.value.name !== 'New User'">
            <header-component></header-component>
          </div>
          <div v-else>
            <home-header></home-header>
          </div>
          <router-view></router-view>
        </div>
      </div>
    </div>
    <footer-component></footer-component>

    </body>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Ubuntu:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap');
#app {

  /*-webkit-font-smoothing: antialiased*/
  /*-moz-osx-font-smoothing: grayscale*/
  /*text-align: center*/
  /*color: #2c3e50*/
}

html, body {
font-family: 'Poppins', sans-serif;
font-family: 'Ubuntu', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
div.all-row {
  margin: unset;
  padding: unset;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.bm-menu {
  background: white!important;
}

a.router-link-exact-active{
    color: #FDB913!important;
}

</style>
<script>
import HeaderComponent from '@/views/HeaderComponent'
import FooterComponent from '@/views/FooterComponent'
import HomeHeader from '@/views/HomeHeader'

export default {
  components: {
    FooterComponent,
    HeaderComponent,
    HomeHeader
  }
}

</script>
