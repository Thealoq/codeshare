<template>
  <div class="bottom-navbar">
    <button class="active">
      <a href="/info">
        <i class='bx bx-info-circle'></i>
      </a>
    </button>
    <button>
      <a href="/share">
        <i class='bx bxs-share'></i>
        </a>
    </button>
    <button
        class="float">
      <a style="color: #1a1f2d" href="/">
        <i  class='bx bx-home'></i>
        </a>
    </button>
    <button>
      <a href="/codes">
        <i class='bx bx-code'></i>
      </a>
    </button>
    <button>
      <a href="/profile">
        <i class='bx bx-user'></i>
      </a>
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
  background: white;
  color: #1a1f2d;
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