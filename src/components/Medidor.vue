<template>
    <div class="medidor col container-fluid row pr-0 m-2">
        <div class="col-8 border-right pr-0">
            <div class="col-12 p-0">
                <p class="text-info m-0 p-1">Venta semanal:</p>
                <hr class="m-1">
            </div>
            <div class="col-12 p-0">
                <h5>$ 9.999</h5>
            </div>
        </div>
        <div class="col-4 w-100">
            <b-icon icon="arrow90deg-up" variant="success"></b-icon>
        </div>
    </div>
</template>

<script>
export default {
    name:'Medidor',
    components:{

    }
}
</script>

<style>
   .medidor{
       border: 1px solid black;
       max-height: 88.3px;
       overflow: hidden;
   }
</style>