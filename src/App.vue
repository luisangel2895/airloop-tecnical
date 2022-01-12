<template>
  <div class="general-container">
    <navbar></navbar>
    <div class="body-container">
      <div class="text-container">Nuevo Pedido</div>
      <div class="container-selector">
        <select-component></select-component>
      </div>
    </div>
  </div>
</template>

<script>
import SelectComponent from "./components/SelectComponent.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
    SelectComponent,
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
.body-container {
  text-align: center;
  padding-top: 40px;
}
.general-container {
  font-family: "Roboto", sans-serif;
}
.text-container {
  margin-top: 20px;
  margin-bottom: 30px;
  color: white;
  font-size: 25px;
}
</style>
