<template>
  <div class="cardperson col-3 card m-1 p-0">
    <img src="https://picsum.photos/150/75" style="height:150px;" class="card-img-top" />
    <div class="card-body row">
      <h5 class="card-title col-12">{{nombre}}</h5>
      <h5 class="card-title col-6">Rut:</h5> <p class="col-6"> 19.999.999-9</p>
      <h5 class="card-title col-6">Monto pagado:</h5> <p class="col-6"> ${{montoTotalHistorico}}</p>
      <h5 class="card-title col-6">Ultima vez visto:</h5> <p class="col-6"> {{ultimaVez}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardPerson",
  components: {},
  data:function(){
      return{
          nombre:'Nombre cliente',
          rut:'19.999.999-9',
          montoTotalHistorico: 99.999,
          ultimaVez:new Date(2020,0,19)
      }
  }
};
</script>

<style>
</style>