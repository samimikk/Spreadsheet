<template>
    <div class="row-fluid">
        <label v-bind:for="id">
            <input v-bind:id="id" type="checkbox" v-model="checked" v-on:change="addPrestige"> {{ title }}
        </label>
        <div class="selection-value">
            {{ prestige }}
        </div>
    </div>
</template>
<script>
    import mixin from "@/mixins/mixins.js"
    export default {
        mixins: [mixin]
    }
</script>
<style scoped lang="scss">

</style>