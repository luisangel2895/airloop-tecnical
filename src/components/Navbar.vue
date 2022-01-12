<template>
  <nav class="navbar-container">
    <div class="text-navbar">Nueva orden</div>
    <div class="text-navbar">|</div>
    <div class="text-navbar">Historial</div>
    <div class="image-container">
      <img src="" alt="" />
      <img
        src="https://i.ibb.co/gjnnFW5/Screenshot-1.png"
        alt="Screenshot-1"
        border="0"
      />
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
};
</script>
<style scoped>
.navbar-container {
  background-color: #011c39;
  display: flex;
  flex-direction: row;
}
.text-navbar {
  color: white;
  font-size: 18px;
  align-self: center;
  margin-left: 20px;
}
.image-container {
  margin: auto;
}
</style>
