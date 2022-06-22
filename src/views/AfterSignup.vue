<template>
  <div>
    <br>
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10">
        <p class="strburst-header">Thank you for signing up!</p>
        <p class="strburst-info">Start saving with your very own sprNova card!<br>Or browse our exciting current
          promotions.</p>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-6 strburst-center">
        <router-link to="/card"><img src="../assets/sprNova_square.png" alt="sprNova"
                                     class="strburst-circle strburst-center"></router-link>
        <p class="strburst-title">My Card</p>
      </div>
      <div class="col-6 strburst-center">
        <router-link to="/promotions"><img src="../assets/starburst-square.png" alt="sprNova"
                                           class="strburst-circle3 strburst-center"></router-link>
        <p class="strburst-title">Current Promotions</p>
      </div>
    </div>
    <a2-hs></a2-hs>

    <div class="row">
      <div class="col-6 offset-3">
<!--        <button-->
<!--          class="strburst-btn strburst-btn-primary"-->
<!--          @click="addToHomeScreen"-->
<!--        >-->
<!--          Add-->
<!--        </button>-->
        <br>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'AfterSignup',
}
</script>

<style scoped>
.strburst-header {
  color: #411347;
  font-size: 18pt;
}
.strburst-center {
  text-align: center;
}
.strburst-info {
  color: #893494;
  font-size: 12pt;
}

.strburst-circle {
  border-radius: 50%;
  text-align: center;
  width: 75%;
  background: #fdb913;
  display: inline;
}

.strburst-circle3 {
  border-radius: 50%;
  text-align: center;
  width: 75%;
  background: #893494;
  display: inline;
}

.strburst-circle2 {
  border-radius: 50%;
  text-align: center;
  width: 100%;
  background: #fdb913;
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

</style>
