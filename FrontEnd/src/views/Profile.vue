<template>
  <div class="Profile">
    <div id="cardbody" class="CardBody">
      <div class="CardBod">
        <div class="CardProfile">
          <img :src="this.items[0]?.banner"/>
        </div>
        <div class="CardAvatar">
          <img :src="this.items[1]?.img"/>
        </div>
        <div class="CardBio">
          <span>{{ this.user.username + "#" + this.user.discriminator }}</span>
        </div>
        <div class="CodeShare">
          <div class="Badget">
            <div v-for="badge in badges" :key="badge.name">
                 <div class="icon">
                   <img :src="badge.url"/>
                 </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CardTwo />
  </div>
</template>

<script>
import Card from "../components/Info.vue"
import CardTwo from "../components/Data.vue"

export default {
  name: "Profile.js",
  data() {
    return {
      user: [],
      items: [],
      badges: [],
    }
  },
  components:{
    Card,
    CardTwo
  },
  methods: {},
  created() {


    const token = window.localStorage.getItem("token")
    if (!token) {
      window.location.href = "/"
    }
    if (token) {
      fetch("https://discord.com/api/users/@me", {
        headers: {
          authorization: `Bearer ${token}`
        }
      })

          .then(result => result.json())
          .then(response => {
            this.user = response

            const veri = this.user.premium_type
            if (veri === 2) {
              this.badges.push({
                name: "boost",
                url: "https://cdn.discordapp.com/emojis/956933181716713532.webp?size=96&quality=lossless"
              })
            }

            console.log(response);
            fetch(`http://localhost:4000/badged/${response.id}`)
                .then(result => result.json())
                .then(response => {
                  if(this.badges.length === 0) {
                    this.badges.push({
                      name: "rozet yok",
                      url: "https://cdn.discordapp.com/emojis/956943725685260288.webp?size=96&quality=lossless"
                    })
                  } else {
                    response.flags.map(empty => {
                      this.badges.push({
                        name: empty.name,
                        url: empty.url
                      })
                    })
                  }
                })


            if (!response.banner) {
              if (!response.banner_color) {
                this.items.push({
                  banner: "https://www.thecolorapi.com/id?format=svg&hex=0a0b0c&named=true",
                })
              } else {
                this.items.push({
                  banner: `https://www.thecolorapi.com/id?format=svg&hex=${response.banner_color.replace("#", "")}&named=true`
                })
              }
            } else {
              if (response.banner.startsWith("a_")) {
                this.items.push({
                      banner:
                          "https://cdn.discordapp.com/banners/" +
                          response.id +
                          "/" +
                          response.banner +
                          ".gif" + "?size=2048",
                    },
                );
              } else {
                this.items.push({
                      banner:
                          "https://cdn.discordapp.com/banners/" +
                          response.id +
                          "/" +
                          response.banner +
                          ".png" + "?size=2048",
                    },
                );
              }

            }
            if (response.avatar.startsWith("a_")) {
              this.items.push({
                img:
                    "https://cdn.discordapp.com/avatars/" +
                    response.id +
                    "/" +
                    response.avatar
              })
            } else {
              this.items.push({
                img:
                    "https://cdn.discordapp.com/avatars/" +
                    response.id +
                    "/" +
                    response.avatar +
                    ".png"
              })
            }
          })

    }
  }
}
</script>

<style scoped>



.Badget div{
  padding: 0px 5px;
}

.Badget img {
  margin-top: 0.5rem;
  border-radius: 0px;
  width: 25px;
  height: auto;
}

.Badget {
  flex-wrap: wrap;
  background-color: #1D2333;
  width: 15rem;
  height: 50px;
  border-radius: 7px;
  margin-left: 15rem;
  margin-top: -1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.CardBio span {
  position: absolute;
  margin-left: 1.5rem;
  margin-top: 0.5rem;
  font-weight: bold;
}

.CardAvatar img {
  margin-top: -4rem;
  margin-left: 2rem;
  border-radius: 12%;
  width: 100px;
  height: 100px;
}

.CardBod {
  background-color: #111728;
  height: 300px;
  border-radius: 8px;
}

.CardProfile img {
  border-radius: 8px;
  width: 500px;
  height: 200px;
  box-shadow: 0 0 20px 20px #1a1f2d;
}

.CardBody {
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-content: center;
}

a {
  text-decoration: none;
  color: white;
}

.Profile {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
}




@media screen and (max-width: 750px) {
  .Profile {
    margin-top: 5rem;
  }

  .CardAvatar{
    margin-left: 7.2rem;
  }

  .CardBio{
    margin-left: 7rem;
  }

  .CardBod{
    height: 340px;
  }

  .icon img{
    margin-top: -0rem;
  }
  .Badget{
    margin-top: 3rem;
    margin-left: 70px;
    height: 20px;
  }

  .CardProfile img {
    border-radius: 5px;
    width: 400px;
  }

}
</style>