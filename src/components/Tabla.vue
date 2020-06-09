<template>
  <div class="tabla container-fluid border-right border-left border-top m-2 bg-white">
      <div class="row p-0">
          <div class="col-12 row border-bottom p-1">
              <h2 class="col-9 border-right text-center">Productos más vendidos</h2>
              <span class="col"></span>
          </div>
          <div class="col-12 p-0">
              <filas></filas>
              <filas></filas>
              <filas></filas>
          </div>
      </div>
  </div>
</template>

<script>
import Filas from '@/components/components-stacked/Filas-tabla.vue'
export default {
    name:"Tabla",
    components:{
        Filas
    }
}
</script>

<style>
filas:last-child(){
    border-bottom: 0px !important;
}
</style>