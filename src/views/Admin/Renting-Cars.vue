<template>
<div>
<Items
  img="206.png"
  CarnamePr="پژو 206 تیپ 5"
  CarnameEn="PEUGEOUT 206"
  priceItem="50.000"
  OWname="مجتبی افراز"
  OWNumber="123456789"
  />
</div>
</template>
<script>
import Items from "@Components/CarRent/Items"
export default {
  name: 'Car-list',
  components: {
    Items,
  }
}
</script>
