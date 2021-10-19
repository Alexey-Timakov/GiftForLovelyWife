<template>
  <div class="header-wrapper"></div>
  <h1 class="header__text">Лучший подарок для любимой жены!</h1>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Pacifico&family=Raleway:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500&display=swap");

body {
  margin: 0;
  background-color: rgba(230, 230, 230, 0.45);
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-weight: 400;
  font-style: italic;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
.header-wrapper {
  background-image: url('./assets/logo_cutted.jpg');
  background-repeat: no-repeat;
  -moz-background-size:100%;
  -webkit-background-size:100%;
  -o-background-size:100%;
  background-size:100%;
  height: 200px;
  }
.header__text {
  margin: 0;
  margin-bottom: 50px;
  padding: 0;
  font-family: "Pacifico", cursive;
  font-size: 50px;
  color: #FF0000;
}

@media screen and (max-width: 768px) {
  .header-wrapper {
    background-image: url('./assets/logo.jpg');
    height: 235px;
    }
  .header__text {
    margin: 0 auto;
    margin-bottom: 20px;
    width: 95%;
    font-size: 30px;
  }
}
</style>
