<script setup lang="ts">
import {Ref, ref, UnwrapRef} from "vue";

const email : Ref<UnwrapRef<string>> = ref('');
</script>

<template>
  <footer>
<!--    Footer Top-->
    <section class="text-white subscribe bg-black flex align-items-center justify-content-center">
      <h1 class="uppercase mb">Invicta al dia</h1>
      <div class="information-container uppercase mb">
        Inscribete a nuestro newsletter para conocer acerca de nuestras promociones, eventos y descuentos vigentes
      </div>
      <div class="row">
        <input v-model="email" placeholder="Direccion de correo electronico" class="col-lg-9 mb" type="text">
        <button :disabled="email === ''" class="p-sides pointer bg-yellow uppercase col-lg-3 mb">suscribirse</button>
        <input class="col-lg-1" type="checkbox"/>
          <p class="col-lg-11">Autorizo el tratamiento de mis <strong class="pointer">Datos personales</strong></p>
      </div>
    </section>
<!--    Footer Middle-->
    <section class="banner pointer"></section>
<!--    Footer Bottom-->
    <section class="bg-black p-sides"></section>
  </footer>
</template>

<style lang="scss">
@import '../assets/_scss/variables';
.mb{
  margin-bottom: 1rem;
}
  .subscribe{
    h1{
      font-size: 2rem;
      letter-spacing: 3px;
    }
    padding: 2rem 25%;
    flex-direction: column;
    .information-container{
      padding: 1rem 0;
      font-size: 1.1rem;
      text-align: center;
      border-color: $yellow;
      border-style: solid;
      border-width: 2px 0;
      margin-bottom: 3rem;
    }
    input[type='text']{
      color: $gray;
      border: 0;
    }
    button{
      border: 0;
      font-weight: bold;
      transition: all ease-in-out 0.3s;
    }
  }
  input:focus{
    outline: none;
  }
  button:hover{
    background: $green;
    color: $white;
  }
  button[disabled]{
    opacity: 1;
  }
  .banner{
    background: url('../assets/img/footer_banner_shops.webp') no-repeat center;
    background-size: contain;
    height: 165px;
    border-bottom: 10px solid $yellow;
  }
</style>
