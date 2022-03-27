<template>
  <div id="app">
    <router-view/>
    <BottomNavbar />
  </div>
</template>
<script>
import BottomNavbar from "./components/BottomNavbar.vue"
export default {
  name: 'App',
  components: {
    BottomNavbar
  },
  }
</script>



<style>

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
body{
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inter', sans-serif;
  padding: 0;
  margin: 0;
  background-color: #212738;
  color: white;

}

#app{
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

@media screen and (max-width:  2200px) {
  .navtwo{
    display: none;
  }
}
@media screen and (max-width:  750px) {
  .navbar{
    display: none;
  }
  .navtwo{
     display: list-item; 
  }
}




</style>
