<script setup lang="ts">

import Header from './Header.vue';
import Footer from './Footer.vue';
</script>

<template>
  <div class="wrapper">
    <Header/>
    <main>
      <RouterView/>
    </main>
    <Footer/>
  </div>
</template>

<style scoped>

</style>
