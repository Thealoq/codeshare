<template>
  <div id="app">
     <div class="router" id="mego">
       <div class="boxLoading"></div>
     </div>
    <div id="teko">
     <Navbar/>
    <router-view/>
    <BottomNavbar/>
    </div>
  </div>
</template>
<script>
import BottomNavbar from "./components/BottomNavbar.vue"
import Navbar from "./components/Navbar.vue"
export default {
  name: 'App',
  components: {
    BottomNavbar,
    Navbar,
  },
  created(){
      setTimeout(() => {
        document.getElementById("teko").style.display = "none"
        document.getElementById("mego").style.display = "block"
      }, 10)
      setTimeout(() => {
        document.getElementById("mego").style.display = "none"
        document.getElementById("teko").style.display = "block"
      }, 2000)
  }
}
</script>
<style lang="scss">
.boxLoading {
  width: 50px;
  height: 50px;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  &:before {
    content: '';
    width: 50px;
    height: 5px;
    background: #000;
    opacity: 0.1;
    position: absolute;
    top: 59px;
    left: 0;
    border-radius: 50%;
    animation: shadow .5s linear infinite;
  }
  &:after {
    content: '';
    width: 50px;
    height: 50px;
    background: #4054c2;
    animation: animate .5s linear infinite;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 3px;
  }
}

@keyframes animate {
  17% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(9px) rotate(22.5deg);
  }
  50% {
    transform: translateY(18px) scale(1, .9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }
  75% {
    transform: translateY(9px) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
}


@keyframes shadow {
  0%, 100% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1);
  }
}


body, html {
  background: #ccc;
  overflow: hidden;
  height: 100%;
}
</style>


<style>
.router {
  margin-top: 30%;
  margin-left: 50%;
}


@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');


body {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inter', sans-serif;
  padding: 0;
  margin: 0;
  height: 100%;
  overflow: auto;
  height: 100%;
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
