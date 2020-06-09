<template>
  <div class="dashboard">
      <div class="container-fluid">
        <div class="row justify-content-between">
            <medidor></medidor>
            <medidor></medidor>
            <medidor></medidor>
        </div>
        <div class="row mt-2">
            <tabla></tabla>
        </div>
        <div class="row mt-2">
            <tabla></tabla>
        </div>
      </div>
  </div>
</template>

<script>
import Medidor from '@/components/Medidor.vue'
import Tabla from '@/components/Tabla.vue'
export default {
    name:'Dashboard',
    components:{
        Medidor,
        Tabla
    }
}
</script>

<style>

</style>