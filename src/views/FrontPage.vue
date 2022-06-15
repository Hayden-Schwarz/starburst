<template>
  <div>
    <br><br>
    <div class="row">
      <div class="col-6 strburst-center">
        <router-link to="/card"><img src="../assets/sprNova_square.png" alt="sprNova"
        class="strburst-circle"> </router-link>
        <p class="strburst-title">My Card</p>
      </div>
      <div class="col-6 strburst-center">
        <router-link to="/card"><img src="../assets/sprNova_square.png" alt="sprNova"
                                     class="strburst-circle"> </router-link>
        <p class="strburst-title">Current Promotions</p>
      </div>
    </div>
    <br><br>
    <div class="row">
      <div class="col-12 strburst-center">
        <router-link to="/signup" class="strburst-btn strburst-btn-primary">Trending Promotions</router-link>
      </div>
    </div>
    <br><br>
    <div class="row">
      <div class="col-1"></div>
      <div class="col-2">
        <img src="../assets/roots-sqare.png" alt="Roots" class="strburst-circle2">
      </div>
      <div class="col-8">
      <router-link to="/promotion">
        <p class="strburst-btn">Get R10 off when you spend R50 or more</p>
      </router-link>
      </div>
    </div>
    <br>
    <br>

  </div>
</template>

<script>
import { useUser } from '@/stores/useUser'
import router from '@/router'
export default {
  name: 'MainPage',
  setup(){
    const user = useUser()
    if (user.cardImage === ''){
      router.push('/new')
    }
  }

}
</script>

<style scoped>
p.mainpage-info {
  /*max-width: 100%;*/
  text-decoration-line: unset;
  padding-top: 40px;
  font-size: 22pt;
}
.strburst-btn {
  font-size: 8pt;
  text-decoration-line: unset;
  padding: 6pt 15pt 6pt 15pt;
  color: #411347;
  border-radius: 24pt;
  border-style: solid;
  border-width: 1pt;
  border-color: #EF4060;
}
.strburst-btn-primary {
  color: white;
  font-size: 16pt;
  border-style: none;
  text-decoration-line: unset;
  background: #EF4060;
}

.strburst-left{
  text-align: left;
  padding-left: 0px;
}

.strburst-right{
  text-align: right;
  padding-right: 0px;
}

.strburst-center{
  text-align: center;
}

.strburst-circle{
  border-radius: 50%;
  text-align: center;
  width: 75%;
  background: #fdb913;
}

.strburst-circle2{
  border-radius: 50%;
  text-align: center;
  width: 100%;
  background: #fdb913;
}

.dstrburst-title{
  text-align: center;
  font-size: 10pt;
  text-decoration-line: none;

}


</style>
