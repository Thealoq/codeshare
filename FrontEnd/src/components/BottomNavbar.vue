<template>
  <div class="bottom-navbar">
    <button class="active">
      <router-link to="/xd">
        <i class='bx bx-home'></i>
      </router-link>
    </button>
    <button>
      <router-link to="/xd">
        <i class='bx bx-chat'></i>
        </router-link>
    </button>
    <button
        class="float">
      <router-link to="/">
        <i class='bx bx-plus'></i>
        </router-link>
    </button>
    <button>
      <router-link to="/">
        <i class='bx bx-shopping-bag'></i>
      </router-link>
    </button>
    <button>
      <router-link to="/profile">
        <i class='bx bx-user'></i>
      </router-link>
    </button>
  </div>
</template>


<style scoped>
a{
  color: white;
}

.bottom-navbar {
  position: fixed;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  background: #111728;
  border-radius: 30px 30px 0px 0px;
  padding: 10px 0px;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, .05);
}

.bottom-navbar button {
  width: 60px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  background: transparent;
  color: white;
  border-radius: 20px;
  transition: all .25s ease;
}

.bottom-navbar button:active:not(.float) {
  transform: scale(1.2);
}

.bottom-navbar button.float {
  margin-top: -50px;
  background: #3e8e41;
  color: #fff;
  border-radius: 25px;
  height: 60px;
}

.bottom-navbar button.active {
  color: #3e8e41
}

.bottom-navbar button i {
  font-size: 1.5rem;
  pointer-events: none;
}
</style>