<template>
  <div class="itemstoredinfo col-3 row border my-2 mx-1 p-0">
      <div class="col-12 text-center">
        <img
          style="width:150px; height:150px"
          src="https://lh3.googleusercontent.com/proxy/w5J5_an0K-XdVzFTTyoOQUvORty8E1szvsnPDW3GfEifvknrRlx6hh4ySI8CuYfhYzmJDjBbCJJFlfDY-Imza13TP30KFvcG2FAV1urNntvocw"
          alt
        />
      </div>
    <div class="col-8 p-0 border-right">
      
      <div class="col-12 row">
        <p class="col-12 m-0">
          <strong class="letra-mediana">{{nombreProducto}}</strong>
        </p>
        <span class="col-12 letra-mediana">Cantidad: {{cantidad}}</span>
        <span class="col-12 letra-mediana">Codigo: {{codigo}}</span>
        <span class="col-12">
          <b-icon icon="graph-up" variant="success"></b-icon>
          <span class="letra-chica">{{comparacion}}% comparado mes anterior</span>
        </span>
      </div>
    </div>
    <div class="col">
        <img style="width:70px; height:70px; padding-top:15px;" src="https://i.ibb.co/mtRt0ng/yay.png">
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemStoredInfo",
  components: {},
  data: function() {
    return {
      nombreProducto: "Nombre producto 1",
      comparacion: 10,
      cantidad: 1,
      codigo: "192a"
    };
  }
};
</script>

<style>
.letra-chica {
  font-size: 8px;
  line-height: -2px;
}
.letra-mediana{
    font-size: 12px;
}
</style>