<template>
  <div class="sea">
    <nav>
      <div class="nava">
        <h1>Broost Code</h1>
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
              <a style="color:White;">{{ item.username }}</a>
            </button>
            <div class="dropdown-content" style="left:0;">
              <a href="/profile">Profil</a>
              <a href="/admin">Admin</a>
              <a v-on:click="login" href="#">LogOut</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
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




<style scoped>
*{
  color: white;
}

#helal {
  margin-top: 1rem;
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
  color: white;
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
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  color: #3e8e41;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  color: #3e8e41;
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


</style>
