<template>
  <div class="header-body">
    <h2 class="header-body__title">Мы рады Вас приветствовать!</h2>
    <p class="header-body__text">
      Вы находитесь на сайте лучших подарков для любимой жены.
    </p>
    <p class="header-body__text">
      Здесь Вы сможете получить оригинальный и полезный подарок
      и привнести момент праздника в любой день по Вашему желанию!
    </p>
  </div>
  <div class="header-link__wrapper">
    <Login
    @generatedAccessToken="generatedAccessToken"
    v-if="!accessToken"/>
    <router-link  class="body__link" v-else
    :to="{ name: 'Coupons',
    params: {loggedUserName: loggedUserName}}"
      > {{loggedUserName}}, посмотрите свои подарки <span> &#8594;</span></router-link
    >
  </div>
</template>

<script>
const jwt = require("jsonwebtoken");
import Login from "@/components/Login"

const ACCES_TOKEN_SECRET = "ZAQ!2wsxCDE#";

export default {
  data () {
    return {
      accessToken: "",
      isLoggedIn: false,
      loggedUserName: ""
    }
  },
  components: {
    Login
  },
  methods: {
    generatedAccessToken(newAccessToken, userName) {
      this.accessToken = newAccessToken;
      this.loggedUserName = userName;
    }
  },
  mounted() {
    const userFromLS = localStorage.getItem("lovelyWife");
    if (userFromLS) {
      let tempToken = JSON.parse(userFromLS).accessToken;
      try {
        let decoded = jwt.verify(tempToken, ACCES_TOKEN_SECRET);
          if (decoded) {
            this.accessToken = tempToken;
            this.loggedUserName = decoded.userName;
          }
          else {
            console.log("error with decoding");
          }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("accessToken has not found!");
    }
  },
}
</script>

<style >
.header-body {
  width: 75%;
  margin: 0px auto;
  margin-bottom: 25px;
}
.header-body__title {
  margin: 0;
  text-align: center;
  font-size: 22px;
  font-family: "Raleway", sans-serif;
  font-style: italic;
  font-weight: 400;
  /* color: rgb(207, 66, 41); */
  color: rgb(214, 120, 120);
}
.header-body__text {
  text-align: center;
  font-size: 20px;
  font-family: "Raleway", sans-serif;
  font-style: italic;
  font-weight: 400;
  color: rgb(214, 120, 120)
}
.header-link__wrapper {
  margin-bottom: 25px;
}
span {
  margin-left: 10px;
}
.body__link {
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 20px;
  text-decoration: none;
  text-transform: uppercase;
  color: #FF0000;
  padding-bottom: 10px;
}
.body__link:hover {
  border-bottom: 2px solid #FF0000;
}

@media screen and (max-width: 768px) {
.header-body {
  width: 85%;
}
.header-body__title {
  margin: 0;
  font-size: 20px;
}
.header-body__text {
  font-size: 18px;
}
.header-link__wrapper {
  width: 85%;
  margin: 0 auto;
}
.body__link {
  font-size: 15px;
  padding-bottom: 10px;
  }
}
</style>