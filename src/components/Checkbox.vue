<template>
    <div :class="{ selection: isActive, 'active': checked }">
        <label v-bind:for="id">
            <input v-bind:id="id" type="checkbox" v-model="checked" @change="addPrestige"> {{ title }}
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
<style scoped lang="scss">

</style>