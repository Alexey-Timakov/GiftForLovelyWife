<template>
  <div class="main">
    <p class="sign">Войти</p>
    <form class="form1" @submit.prevent="onSubmit">
      <input
        class="userName"
        type="text"
        placeholder="Ваше имя"
        v-model="userName"
      />
      <input
        class="userPass"
        type="password"
        placeholder="Пароль"
        v-model="userPass"
      />
      <button class="submit" align="center">Войти</button>
    </form>
  </div>
</template>

<script>
import CryptoJS from "crypto-js";
const jwt = require("jsonwebtoken");

const userNameAndPassHash = "U2FsdGVkX19UWnoR5xHu4wdKI3YOt0LbT17T463o1TA=";
const ACCES_TOKEN_SECRET = "ZAQ!2wsxCDE#";
const ACCES_TOKEN_LIFE = 60 * 60 * 24 * 30; // 60 sec * 60 min * 24 hours * 30 days
export default {
  data() {
    return {
      userName: "",
      userPass: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.userName.trim() != "" && this.userPass.trim() != "") {
        // const encryptedNameAndPass = CryptoJS.AES.encrypt(this.userName, this.userPass).toString();
        // console.log(encryptedNameAndPass);
        const bytesString = CryptoJS.AES.decrypt(userNameAndPassHash, this.userPass);
        var originalText = bytesString.toString(CryptoJS.enc.Utf8);
        if (this.userName === originalText) {
          console.log("Password matches!");
          const payload = { userName: this.userName };
          let accessToken = jwt.sign(payload, ACCES_TOKEN_SECRET, {expiresIn: ACCES_TOKEN_LIFE});
          console.log(accessToken);
          const lovelyWife = {
            "accessToken": accessToken
          }
          localStorage.setItem("lovelyWife", JSON.stringify(lovelyWife));
          this.$emit("generatedAccessToken", accessToken, this.userName)
        }
        else {
          console.log("Username or Password do not match!");
        }
      }
    }
  },
};
</script>

<style scoped>
.main {
  background-color: #ffffff;
  width: 400px;
  margin: 7em auto;
  border-radius: 1.5em;
  box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
}

.sign {
  padding-top: 40px;
  color: #8c55aa;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  font-size: 23px;
}

.userName {
  width: 76%;
  color: rgb(38, 50, 56);
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1px;
  background: rgba(136, 126, 126, 0.04);
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  outline: none;
  box-sizing: border-box;
  border: 2px solid rgba(0, 0, 0, 0.02);
  margin: 0 auto;
  margin-bottom: 30px;
  text-align: center;
  font-family: "Raleway", sans-serif;
}

form.form1 {
  display: flex;
  flex-direction: column;
}

.userPass {
  width: 76%;
  color: rgb(38, 50, 56);
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1px;
  background: rgba(136, 126, 126, 0.04);
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  outline: none;
  box-sizing: border-box;
  border: 2px solid rgba(0, 0, 0, 0.02);
  margin: 0 auto;
  margin-bottom: 30px;
  text-align: center;
  font-family: "Raleway", sans-serif;
}

.userName:focus,
.userPass:focus {
  border: 2px solid rgba(0, 0, 0, 0.18) !important;
}

.submit {
  cursor: pointer;
  border-radius: 5em;
  color: #fff;
  background: linear-gradient(to right, #9c27b0, #e040fb);
  border: 0;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 10px;
  padding-top: 10px;
  font-family: "Raleway", sans-serif;
  margin: 0 auto;
  margin-bottom: 30px;
  font-size: 13px;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
}

button {
  text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);
  color: #e1bee7;
}

@media screen and (max-width: 768px) {
.main {
  width: 80%;
  margin: 2em auto;
  border-radius: 1em;
}
.sign {
  padding-top: 20px;
  font-size: 20px;
}
}
</style>