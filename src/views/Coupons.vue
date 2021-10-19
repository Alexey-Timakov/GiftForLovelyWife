<template>
  <div>
    <router-link to="/" class="body__link">
    <span>
      &#8592;
    </span>
    На главную страницу
    </router-link>
    <h2 class="body__title">Список Ваших подарков:</h2>

    <CouponsList
    v-bind:coupons="coupons"
    v-bind:loggedUserName="loggedUserName" />
  </div>
  <router-link to="/" class="body__link">
    <span>
      &#8592;
    </span>
    На главную страницу
  </router-link>
</template>

<script>
import CouponsList from "@/components/CouponsList";

export default {
  components: {
    CouponsList,
  },
  data() {
    return {
      coupons: [
        {
          name: "Принять ванну",
          isActive: true,
          description: "Расслабиться в теплой ванне с ароматной мягкой пеной",
          attempts: 0,
        },
        {
          name: "Сходить в кафе",
          description: "Провести пару приятных часов за чашечкой кофе",
          isActive: true,
          attempts: 0,
        },
        {
          name: "Провести день с подругой",
          description: "День отдыха от домашних забот в компании подруги",
          isActive: true,
          attempts: 0,
        },
        {
          name: "Купить новое платье",
          description: "Время для обновления гардероба!",
          isActive: true,
          attempts: 0,
        },
        {
          name: "Не хочу готовить ужин",
          description: "Свободный вечер для себя, а ужин можно и заказать",
          isActive: true,
          attempts: 0,
        },
        {
          name: "Дорогой, сделай уборку",
          description: "Жена отдыхает, а супруг наводит порядок",
          isActive: true,
          attempts: 0,
        },
        {
          name: "Хочу чего-нибудь вкусненького",
          description: "Побаловать себя любимым деликатесом",
          isActive: true,
          attempts: 0,
        },
      ],
    };
  },
  props: {
    loggedUserName: String
  }
};
</script>

<style scoped>
.body__title {
  text-align: center;
  font-size: 25px;  
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  /* color: rgb(207, 66, 41); */
  color: #FFF;
}
span {
  margin-right: 10px;
}
.body__link {
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 20px;
  text-decoration: none;
  text-transform: uppercase;
  padding-bottom: 10px;
}
.body__link:hover {
  border-bottom: 2px solid #FF0000;
}
@media screen and (max-width: 768px) {
.body__title {
  font-size: 20px;  
  color: rgb(214, 120, 120);
  margin-top: 20px;
  margin-bottom: 0px;
}
.body__link {
  width: 85%;
  margin: 0 auto;
  font-size: 15px;
  }
}
</style>