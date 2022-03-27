<template>
  <div class="sea">
    <div class="navbar">

      <div class="nav-logo">
        <router-link to="/">
          <img src="https://cdn.discordapp.com/attachments/902302627767918602/956670782631731230/logo.png">
        </router-link>
      </div>
      <div class="text">
        <div class="textback">
          <router-link to="/codes">Codes</router-link>
        </div>
        <div class="textback">
          <router-link to="/project">Special Member</router-link>
        </div>
        <div class="textback">
          <router-link to="/github">Announces</router-link>
        </div>
      </div>
      <div id="helal">
        <div class="test" v-for="item in items" :key="item.img">
          <img :src="item.img" class="img" />
          <a style="color:White;" :href="item.link">{{ item.username }}</a>
        </div>
      </div>

      <div id="logo" class="logo">
        <div class="test" v-for="item in items" :key="item.img">
          <div class="dropdown" style="float:left;">
            <button class="dropbtn">
              <img :src="item.img" class="img" />
              <a style="color:White;" :href="item.link">{{ item.username }}</a>
            </button>
            <div class="dropdown-content" style="left:0;">
              <a href="/profile">Profil</a>
              <a v-on:click="login" href="#">LogOut</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      content: [],
      items: [],
      user: null
    };
  },
  methods: {
    login() {
      window.localStorage.removeItem("token");
      window.location.href = "/";
    }
  },
  created() {
    const token = window.localStorage.getItem("token");

    if (!token) {
      setTimeout(function () {
        document.querySelector('div[id="logo"]').style.display = "none"
      }, 100)
      if (this.items.length === 0) {
        this.items.push({
          img:
            "https://cdn.discordapp.com/attachments/884517676939096104/951432523009908786/logo.png",
          username: "Login",
          link:
            "https://discord.com/api/oauth2/authorize?client_id=957001632531488778&redirect_uri=http://localhost:3000/callback&response_type=code&scope=identify"
        });
      }
    }
    if (token) {

      setTimeout(function () {
        document.querySelector('div[id="helal"]').style.display = "none"
      }, 100)
      fetch("https://discord.com/api/users/@me", {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
        .then(result => result.json())
        .then(response => {
          this.user = response;
          if (response.avatar.startsWith("a_")) {
            this.items.push({
              img:
                "https://cdn.discordapp.com/avatars/" +
                response.id +
                "/" +
                response.avatar +
                ".gif",
              username: response.username,
              link: "/profile"
            });
          } else {
            this.items.push({
              img:
                "https://cdn.discordapp.com/avatars/" +
                response.id +
                "/" +
                response.avatar +
                ".png",
              username: response.username,
              link: "/profile"
            });
          }
        })
        .catch(console.error);
    }
  }
};
</script>




<style>


h4 {
  font-weight: bold;
}
.dropbtn img {
  width: 40px;
  height: 40px;
}

.dropbtn {
  transition: 1s;
  margin-left: -2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  transition: 1s;
  background-color: #22293b;
  border-radius: 8px;
  margin-left: -2rem;
  display: none;
  position: absolute;
  right: 0;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  color: white;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  color: #3e8e41;
}

.menu-drop {
  position: absolute;
  background-color: #070c0e;
  transition: all 0.5s ease-in-out;
  margin-left: 48.5rem;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-top: -2rem;
}

li {
  margin-top: 0.5rem;
}

.sea {
  display: block;
  background-color: #1a1f2d;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.test:hover {
  fill: #2c3e50;
}

.icon {
  margin-left: 0.5rem;
}

.test a {
  text-decoration: none;
  margin-left: 0.5rem;
}

.test {
  display: flex;
  justify-content: center;
  align-items: center;
}

.test .img {
  width: 40px;
  height: 40px;
}

b .router-link-exact-active {
  color: #2c3e50;
}


.nav-logo img {
  margin-top: 1rem;
  margin-right: -2rem;
  border-radius: 50%;
  width: 60px;
  height: 60px;
}
.nav-logo {
  font-size: 1.5em;
  margin-top: -0.5rem;
}

.textback {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem;
}

.text a {
  margin-left: 1rem;
  border-radius: 1rem;
  text-decoration: none;
}

img {
  width: 120px;
  height: 120px;
  border-radius: 50%;

}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0rem;
}

.navbar div {
  padding: 0.6rem;
}
</style>
