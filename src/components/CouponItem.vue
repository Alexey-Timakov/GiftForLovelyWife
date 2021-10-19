<template>

    <div class="coupon-item">
      <div class="card" v-bind:class="{ done: couponStatus == 'false', 'first' : (index+1 == 1 || index+1 == 5 || index+1==7), 'second': (index+1)%2==0, 'third': (index+1)%3==0 }">
        <div class="face face1">
          <router-link class="coupon__link" :to="{ name: 'CouponDescription', params: {
            couponName: couponName,
            couponText: couponText,
            couponStatus: couponStatus,
            loggedUserName: loggedUserName,
            couponDateFromLS: couponDateFromLS,
            }
          }"
          >
            <div class="content">
              <h2>
                {{ upperCase(coupon.name) }}
              </h2>
              <p>
                {{ coupon.description }}
              </p>
            </div>
          </router-link>
        </div>
        <div class="face face2">
          <h2>{{ index + 1 }}</h2>
          <h3 v-if="couponStatus == 'false'">(Потрачен)</h3>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      couponName: this.coupon.name,
      couponText: this.coupon.description,
      couponStatus: "",
      couponDateFromLS: ""
    }
  },
  props: {
    coupon: {
      type: Object,
      required: true,
    },
    index: Number,
    loggedUserName: String
  },
  methods: {
    upperCase(value) {
      return value.toUpperCase();
    },
  },
  mounted() {
    const couponsParamsFromLS = localStorage.getItem("lovelyWifeCouponsParams");
    if (couponsParamsFromLS) {
      const JSONcouponsParamsFromLS = JSON.parse(couponsParamsFromLS);
      if (JSONcouponsParamsFromLS[this.couponName]) {
        // console.log("found params!", this.couponName, JSONcouponsParamsFromLS[this.couponName]);
        this.couponStatus = JSONcouponsParamsFromLS[this.couponName].isActive;
        this.couponDateFromLS = JSONcouponsParamsFromLS[this.couponName].couponDate;
      } else {
        this.couponStatus = this.coupon.isActive;
        // console.log ("else status from js file: ", this.couponStatus);
      }
    } else {
      this.couponStatus = this.coupon.isActive;
    }
  }
};
</script>

<style scoped>
.coupon-item {
  font-family: "Raleway", sans-serif;
  font-size: 25px;
  font-weight: 300;
  margin-bottom: 50px;
  padding: 25px;
}

.coupon-item .card {
  position: relative;
  width: 300px;
  height: 400px;
  border-radius: 20px;
  border: 1px solid #a99ec2;
  margin: 0 auto;
  background: #fff;
  text-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
}
.coupon-item .card.done {
  background: rgb(211, 206, 206);
}
.coupon-item .card.done .content h2 {
  text-decoration: line-through;
}
.coupon-item .card .face {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;

}

.coupon-item .card .face.face1 {
  box-sizing: border-box;
  padding: 20px;
}

.coupon-item .card .face.face1 h2 {
  margin: 0;
  padding: 0;
  font-size: 1.2em;
  font-weight: 500;
}

.coupon-item .card .face.face1 p {
  font-size: 0.8em;
  font-weight: 300;
}

.coupon-item .card .face.face2 {
  background: #111;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
}

.coupon-item .card.first .face.face2 {
  background: linear-gradient(45deg, #3503ad, #f7308c);
}

.coupon-item .card.second .face.face2 {
  background: linear-gradient(45deg, #ccff00, #09afff);
}

.coupon-item .card.third .face.face2 {
  background: linear-gradient(45deg, #e91e63, #ffeb3b);
}

.coupon-item .card:hover .face.face2 {
  height: 100px;
}

.coupon-item .card .face.face2::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
}

.coupon-item .card .face.face2 h2 {
  margin: 0;
  padding: 0;
  font-size: 10em;
  font-weight: 400;
  color: #ffffff;
  transition: 0.5s;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
.coupon-item .card .face.face2 h3 {
  margin: 0;
  padding: 0;
  font-size: 1.1em;
  font-weight: 400;
  color: #ffffff;
  transition: 0.5s;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.coupon-item .card:hover .face.face2 h2 {
  font-size: 2em;
}
.coupon-item .card:hover .face.face2 h3 {
  font-size: 0.8em;
}
.coupon__link {
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 20px;
  text-decoration: none;
  text-transform: uppercase;
  color: #c300ff;
  padding-bottom: 10px;
}

@media screen and (max-width: 768px) {
.coupon-item {
  font-size: 18px;
  margin-bottom: 10px;
  padding: 10px;
}

.coupon-item .card {
  width: 130px;
  height: 200px;
  border-radius: 10px;
}
.coupon-item .card .face {
  border-radius: 10px;
}
.coupon-item .card .face.face1 {
  box-sizing: border-box;
  padding: 10px;
}
.coupon-item .card .face.face1 h2 {
  margin: 0;
  padding: 0;
  font-size: 1em;
}
.coupon-item .card .face.face1 p {
  font-size: 0.7em;
}
.coupon-item .card:hover .face.face2 {
  height: 50px;
}
.coupon-item .card .face.face2 h2 {
  font-size: 6em;
}
.coupon-item .card .face.face2 h3 {
  font-size: 1.1em;
}
.coupon-item .card:hover .face.face2 h2 {
  font-size: 2em;
}
.coupon-item .card:hover .face.face2 h3 {
  font-size: 0.8em;
}
.coupon__link {
  font-size: 16px;
  padding-bottom: 10px;
}
}
</style>