<template>
  <v-card style="border-radius: 20px">
    <v-card-title class="headlogin">
      <v-icon class="login_icon"> WMi-align-right</v-icon>
      <div class="filterInfo">
        <h1 class="filter_pr">جزییات خودرو قابل اجاره</h1>
        <h1 class="filter_en">RENTABLE CAR DETAILS</h1>
      </div>
    </v-card-title>
    <div>
      <v-card-text style="height: 440px">
        <!-- <img
            CLASS="img-detalis"
            :src="require('../../assets/Images/' + img)"
            alt=""
          /> -->
        <div class="infobarD">
          <h1 class="infoPr">{{ CarnamePr }}</h1>
          <h1 class="infoEn">{{ CarnameEn }}</h1>
        </div>
        <!-- <Owner
            class="o-detalis"
            :OwnerName="OWname"
            :OwnerNumber="OWNumber"
          /> -->
        <!-- <Owner1 class="color-car" text1="رنگ خودرو" text2="سفید" />
          <Owner1 class="car-use" text1="کارکرد خودرو" text2="1800" />
          <Owner1 class="car-color" text1="وضعیت رنگ خودرو" text2="بی رنگ " />
          <Owner1 class="pelak" text1="شماره پلاک خودرو" text2="ب-1314-141" />
          <Owner1 class="create" text1="ساخت تولید خودرو" text2="1221" />
          <Price class="dprice" :price="priceItem" /> -->
      </v-card-text>
    </div>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <div style="margin-right: 88%">
        <v-btn class="subBtn" fab dark large color="cyan">
          <v-icon dark> WMi-check-1 </v-icon>
        </v-btn>
      </div>
      <v-btn class="mx-2" fab dark small color="pink">
        <v-icon dark> WMi-cancel </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>