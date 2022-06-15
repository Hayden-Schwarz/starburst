<template>
  <div>
    <div class="row">
      <div class="col-12">
        <p class="mainpage-info">
          Enjoy a galaxy of savings<br>at your fingertips.
        </p>
      </div>
    </div>
    <br><br>
    <div class="row">
      <div class="col-12 strburst-center">
        <router-link to="/signup" class="strburst-btn strburst-btn-primary">Signup</router-link>

      </div>
    </div>

    <br>
    <br>
    <div class="row">
      <div class="col-4 strburst-right">
        <router-link to="/signup" class="strburst-btn">Promotions</router-link>
      </div>
      <div class="col-4 strburst-center">
        <router-link to="/signup" class="strburst-btn">About Us</router-link>
      </div>
      <div class="col-4 strburst-left">
        <router-link to="/signup" class="strburst-btn">Our Partners</router-link>
      </div>
    </div>
    <br>
    <br>

  </div>
</template>

<script>
export default {
  name: 'MainPage',

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
  color: #893494;
  border-radius: 24pt;
  border-style: solid;
  border-width: 1pt;
  border-color: #893494;
}
.strburst-btn-primary {
  color: white;
  font-size: 24pt;
  border-style: none;
  text-decoration-line: unset;
  background: #fdb913;
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


</style>
