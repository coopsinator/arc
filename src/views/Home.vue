<template>
  <div class="home">
    <div class="main_text">
      <span>Welcome to AAPDX</span>
      <img alt="Vue logo" src="../assets/logo.png" height="20px"/>
    </div>
    <div>Info on Animal Rights Activism in Portland, Oregon</div>
    <div><v-btn class="primary" x-large link to="/events">Events</v-btn></div>
    <div><v-btn class="primary" x-large link to="/organizations">Organizations</v-btn></div>
    <div><v-btn class="primary" x-large link to="/communities">Communities</v-btn></div>
    <div><v-btn class="primary" x-large link to="/sanctuaries">Sanctuaries</v-btn></div>
    <div><v-btn class="primary" x-large link to="/resources">Resources</v-btn></div>
    <div><v-btn class="primary" x-large link to="/calculator">Calculator</v-btn></div>
    <div><v-btn class="primary" x-large link to="/about">About</v-btn></div>
  </div>
</template>
<style>
  .home {
    text-align:center;
  }
  .home div {
    margin: 20px;
  }
  .main_text {
    
    font-size:24px;
    margin-top:20px;
  }
  .main_text span {
    margin-right:20px;
  }
</style>
<script>
export default {
  name: 'Home'
}
</script>
