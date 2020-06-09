<template>
  <div class="dashboard">
      <div class="container-fluid">
        <div class="row justify-content-between">
            <medidor></medidor>
            <medidor></medidor>
            <medidor></medidor>
        </div>
      </div>
  </div>
</template>

<script>
import Medidor from '@/components/Medidor.vue'
export default {
    name:'Dashboard',
    components:{
        Medidor
    }
}
</script>

<style>

</style>