<template>
  <div class="dashboard">
      <div class="container">
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
        <div class="row justify-content-between">
          <extra></extra> 
          <extra></extra> 
          <extra></extra> 
          <extra></extra> 

        </div>
      </div>
  </div>
</template>

<script>
import Medidor from '@/components/Medidor.vue'
import Tabla from '@/components/Tabla.vue'
import Extra from '@/components/Extra.vue'

export default {
    name:'Dashboard',
    components:{
        Medidor,
        Tabla,
        Extra
        
    }
}
</script>

<style>

</style>