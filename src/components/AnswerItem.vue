<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <div class="logo"></div>
    <a href="#/answerPage"></a>

    <div></div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background: url("../assets/images/1-1.jpg") no-repeat;
  background-size: 100% 100%;

  .logo {
    height: 11.625rem;
    width: 13.15rem;
    background: url("../assets/images/2-1.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 4.1rem;
    left: 1rem;
  }

  a {
    height: 2.1rem;
    width: 4.35rem;
    background: url("../assets/images/2-2.png") no-repeat;
    background-size: 100% 100%;
    display: block;
    position: absolute;
    top: 16.5rem;
    left: 5.825rem;
  }
}
</style>

<script>
export default {
  name: "answerItem",
};
</script>
