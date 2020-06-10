<template>
    <div class="storageitemview">
        <div class="container">
            <div class="row">
                <ItemStoredInfo></ItemStoredInfo>
            </div>
        </div>
    </div>
</template>

<script>
import ItemStoredInfo from '@/components/ItemStoredInfo.vue'

export default {
    name:'StorageItem',
    components:{
        ItemStoredInfo
    }
}
</script>

<style>

</style>