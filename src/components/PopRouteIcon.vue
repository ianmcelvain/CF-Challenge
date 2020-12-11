<template>
    <fa-icon class="icon clickable" icon="arrow-left" size="2x" @click="onPopRouteClick"/>
</template>

<script>
export default {
    name: "PopRouteIcon",
    methods: {
        onPopRouteClick() {
            this.$router.push({ name: 'Home' });
        }
    }
}
</script>

<style scoped>
.icon {
    position: absolute;
    top: 0;
    left: 0;
    margin: 2rem;
}
</style>