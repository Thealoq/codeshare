<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <BottomNavbar/>
  </div>
</template>
<script>
import BottomNavbar from "./components/BottomNavbar.vue"
import Navbar from "./components/Navbar.vue"

export default {
  name: 'App',
  components: {
    BottomNavbar,
    Navbar
  },
}
</script>


<style>


@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

body {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inter', sans-serif;
  padding: 0;
  margin: 0;
  background-color: #212738;
  color: white;

}

#app {
  width: 100%;
  height: 100%;

}

#nav a {
  font-weight: bold;

  color: white;
}

#nav a.router-link-exact-active {
  color: #4f5fc5;
}

nav {
  padding: 0.2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
}




</style>
