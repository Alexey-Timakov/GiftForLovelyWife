<template>
  <div class="coupon-wrapper">
    <h1 v-bind:class="{completed: !changedCouponStatusBool}">
      {{ couponName }}
    </h1>
    <h2>
      {{ couponText }}
    </h2>
    <form @submit.prevent="onSubmit">
      <div class="form__boolean-status" v-if="changedCouponStatusBool">
        <p class="form__text">Запланировать дату получения подарка:</p>
        <div class="form__input-wrapper">
          <datepicker
            style="
              font-size: 18px;
              border: none;
              text-align: center;
              color: #f7308c;
              width: 80%;
              height: 35px;
              border-radius: 20px;
              cursor: pointer;
            "
            v-model="couponDate"
            inputFormat="dd.MM.yyyy"
          />
        </div>
        <button class="button" v-on:click="showModalWindow">Получить подарок!</button>
      </div>
      <div class="form__boolean-status" v-if="!changedCouponStatusBool">
        <p class="form__text">Вы использовали этот купон.</p>
        <p class="form__text">Выбранная дата: {{ couponDateFromLS? couponDateFromLS : localTime(couponDate) }}</p>
      </div>
    </form>
    <ModalWindow v-show="isModalVisible"
    v-on:closeModalWindow="closeModalWindow"
    v-on:submitForm="submitForm"
    v-bind:couponName="couponName"
    v-bind:couponDate="couponDate"
    />
  </div>

</template>

<script>
import ModalWindow from "@/components/ModalWindow"
import Datepicker from "vue3-datepicker";
import emailjs from 'emailjs-com';
import { getTime } from "@/func/getTime.js"

export default {
  data() {
    return {
      couponDate: new Date(),
      couponStatusBool: (this.couponStatus === "true"),
      isModalVisible: false,
    };
  },
  components: {
    Datepicker,
    ModalWindow
  },
  props: {
    couponName: String,
    couponText: String,
    couponStatus: String,
    loggedUserName: String,
    couponDateFromLS: String
  },
  methods: {
    submitForm() {
      // console.log(getTime(this.couponDate));
      this.changeCouponStatus();
      this.couponStatusBool = false;
      // this.sendEmail();
    },
    sendEmail() {
      try {
        emailjs.send('service_qqrjw1j', 'template_6wvjb1i',
        {
          title: this.couponName,
          date: this.couponDate,
          userName: this.loggedUserName
        },
        'user_Au7zQfyG4GC7by48f7qjJ')

      } catch(error) {
          console.log({error})
      }
    },
    changeCouponStatus() {
      const couponsParamsFromLS = localStorage.getItem("lovelyWifeCouponsParams");
      const JSONcouponParamsFromLS = JSON.parse(couponsParamsFromLS);
      const newCouponParams = {...JSONcouponParamsFromLS,
        [this.couponName]: {
          "isActive": "false",
          "couponDate": this.localTime(this.couponDate)
          }
        };
      localStorage.setItem("lovelyWifeCouponsParams", JSON.stringify(newCouponParams));
    },
    localTime(time) {
      return getTime(time)
    },
     showModalWindow () {
       this.isModalVisible = true;
     },
     closeModalWindow () {
       this.isModalVisible = false;
     }
  },
  mounted() {
    // console.log(this.couponStatus);
    // console.log(this.couponDateFromLS);
  },
  computed: {
    changedCouponStatusBool() {
      return this.couponStatusBool
    }
  }
};
</script>

<style scoped>
.coupon-wrapper {
  font-family: "Raleway", sans-serif;
  margin: 0 auto;
  width: 500px;
  padding: 25px;
  border-radius: 20px;
  background: linear-gradient(45deg, #3503ad, #f7308c);
  /* border-radius: 5px; */
}

h1 {
  font-size: 30px;
  color: #fff;
  margin-top: 0;
  padding-bottom: 25px;
  border-bottom: 1px solid #fff;
}
h1.completed {
  text-decoration: line-through;
  color: rgb(150, 150, 150)
}
h2 {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.781);
}
.form__text {
  padding-top: 20px;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.781);
}
.form__input-wrapper {
  margin-bottom: 30px;
}
.button {
  width: 80%;
  height: 37px;
  border: none;
  border-radius: 20px;
  background: #FFF;
  color: #F7308c;
  font-weight: 500;
  font-size: 18px;
  font-family: "Raleway", sans-serif;
  cursor: pointer;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
  transition:all 0.3s ease;
}
.button:hover {
  background: #F7308c ;
  color: #FFF;
  transition: 0.3s ease;
}
@media screen and (max-width: 768px) {
.coupon-wrapper {
  width: 330px;
  padding: 10px;
  border-radius: 10px;
}
h1 {
  font-size: 20px;
  padding-bottom: 10px;
}
h2 {
  font-size: 18px;
}
.form__boolean-status {
  width: 85%;
  margin: 0 auto;;
}
.form__text {
  padding-top: 0px;
  font-size: 16px;
}
.form__input-wrapper {
  margin-bottom: 20px;
}
.button {
  margin-bottom: 15px;
}
}
</style>