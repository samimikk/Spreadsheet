<template>
    <div class="selection selection--radio">
        <label v-bind:for="id">
            <input :id="id" type="radio"  class="radio" :name="name"  v-model="value"   @click="addPrestige"> {{ title }}
        </label>
        <div class="selection__value">
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
<style lang="scss" scoped>

</style>