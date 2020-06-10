<template>
  <div id="app">
    <Navegador></Navegador>
    <div class="bg-light padding-top">
      <router-view/>
    </div>
    
  </div>
</template>
<script>
import Navegador from '@/components/Navegador.vue'

export default {
  components:{
    Navegador
  }
}
</script>
<style>
.padding-top{
  padding-top: 70px;
}
</style>
