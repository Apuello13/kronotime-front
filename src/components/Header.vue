<template>
  <header>
<!--    Top Header-->
    <div class="p-sides bg-yellow flex align-items-center justify-content-between">
      <span>Visita tambien <strong>TechnoMarine</strong></span>
      <ul>
        <li class="border-right">
          <i class='bx bx-bus'></i>
          Envios a toda Colombia
        </li>
        <li class="pointer text-gray border-right">
          <i class='bx bxs-contact'></i>
          Contactanos
        </li>
        <li class="pointer text-gray">
          <i class='bx bxs-user'></i>
          Inicio de sesion
        </li>
      </ul>
    </div>
<!--    Middle Header-->
    <div class="text-white bg-black p-sides flex align-items-center justify-content-between">
      <div class="pointer flex align-items-center">
        <img class="mr-1" src="../assets/img/logo_invicta_letters.avif" alt="Logo Invicta" />
        <img id="round-logo" src="../assets/img/logo_invicta_min.webp" alt="Logo Invicta Round" width="55" height="100%"/>
      </div>
      <div>
          <ul>
            <li class="pointer uppercase">Relojes</li>
            <li class="pointer uppercase">Edicion Especial</li>
            <li class="pointer uppercase">Accesorios</li>
            <li class="pointer uppercase">Destacados</li>
            <li class="pointer uppercase">Technomarine</li>
            <li class="bg-red pointer uppercase">Super oferta</li>
          </ul>
          <ul>
            <li>
              <i class='bx bx-search pointer action-icons'></i>
            </li>
            <li>
              <i class='bx bx-heart pointer action-icons'></i>
            </li>
            <li>
              <i class='bx bx-shopping-bag pointer action-icons'></i>
            </li>
          </ul>
      </div>
    </div>
<!--    Bottom Header-->
    <div class="bg-yellow p-sides">
      <ul>
        <li>lorem10</li>
        <li>lorem10</li>
        <li>lorem10</li>
        <li>lorem10</li>
      </ul>
    </div>
  </header>
</template>
<script setup lang="ts">
</script>
<style lang="scss">
  @import '../assets/_scss/variables.scss';
  span{
    flex: 1;
  }
  ul{
    display: contents;
    list-style: none;
    li{
      display: inline-block;
      padding: 0 0.5rem;
      font-weight: bold;
    }
  }
  .border-right{
    border-right: 2px solid $black;
  }
  .action-icons{
    font-size: 1.5rem;
  }
  #round-logo{
    transform: rotate(25deg);
  }
</style>
