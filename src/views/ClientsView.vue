<template>
  <div class="clientsview">
    <div class="container">
      <div class="row justify-content-around">
        <CardPerson class="bg-primary"></CardPerson>
        <CardPerson class="bg-warning"></CardPerson>
        <CardPerson class="bg-danger"></CardPerson>
        <CardPerson></CardPerson>
        <CardPerson></CardPerson>
        <CardPerson></CardPerson>
      </div>
    </div>
  </div>
</template>

<script>
import CardPerson from '@/components/CardPersonInfo.vue'

export default {
    name:'ClientsView',
    components:{
        CardPerson
    }
}
</script>

<style>

</style>