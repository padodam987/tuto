<template>
  <base-layout page-title="Profil" page-default-back-link="/memories">
    <h2 v-if="loadedMemory"> Could not find a memory for a given id. </h2>
    <h2 v-else> Loaded it </h2>
  </base-layout>
</template>

<script>
export default {
    data() {
        return {
            memoryId: null
        }
    },
    computed: {
        loadedMemory() {
            return this.$store.getters.memory(this.memoryId);
        }
    },
    watch: {
        '$route'(currentRoute) {
            this.memoryId = currentRoute.params.id;
        }
    }
};
</script>
