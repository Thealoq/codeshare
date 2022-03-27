<template>
  <div >
    <div class="text" id="logout">
      <h1>Giriş Yapmadin</h1>
    </div>
  <div id="test" class="Profile">
    <div class="ProfileCardBody">
      <div>
        <img :src="this.items[1]?.img">
      </div>
      <div class="ProfileName">
        <span>{{ this.user.username + "#" + this.user.discriminator }}</span>
      </div>
    </div>
    <div class="Accountİnfo">
      <div>
        <div class="AccountBar">
          <span>Account Info</span>
        </div>
         <div class="İnfoBoard">
           <div class="bio">
             <span>Account CreatedAt </span>
             <span>User Name</span>
             <span>Discrim</span>
             <span>ID</span>
             <span>Badges</span>
           </div>
           <div class="bio">
             <span>{{this.member[0]?.createdAt}}</span>
             <span>{{this.user.username}}</span>
             <span>{{this.user.discriminator}}</span>
             <span>{{this.user.id}}</span>
             <div>
               <img v-for="badgess in badges" :key="badgess.url" :src="badgess.url">
             </div>
           </div>
         </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Profile.js",
  data() {
    return {
      user: [],
      items: [],
      badges: [],
      member:[]
    }
  },
  components: {},
  methods: {},
  created() {


    const token = window.localStorage.getItem("token")
    if (!token) {
      setTimeout(function () {
        document.getElementById("test").style.display = "none"
      }, 100)
    }
    if (token) {
      setTimeout(function () {
        document.getElementById("logout").style.display = "none"
      }, 100)
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
                  this.member.push({
                    createdAt: response.createdAt
                  })
                  console.log(response)
                  if (this.badges.length === 0) {
                    this.badges.push({
                      name: "rozet yok",
                      url: "https://cdn.discordapp.com/emojis/956943725685260288.webp?size=96&quality=lossless"
                    })
                  } else {
                    response.flags.map(empty => {
                      this.badges.push({
                            name: empty.name,
                            url: empty.url,
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

.text{
  display: flex;
  justify-content: center;
  align-content: center;
}


.bio span {
  padding: 1rem;
}

.bio img{
  width: 30px;
  height: auto;
  border-radius: 0px;
  margin-left: 1rem;

}
.bio{
  display: flex;
  align-content: center;
  flex-direction: column;
}
.İnfoBoard{
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.AccountBar {
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 1rem;
  width: 765px;
  border-radius: 8px;
  background-color: #151924;
}

.Accountİnfo {
  margin-left: 2rem;
  display: flex;
  border-radius: 8px;
  width: 800px;
  height: auto;
  background-color: #1a1f2d;
}

.ProfileName {
  font-size: 20px;
  margin-left: 5rem;
  margin-top: 3rem;
}

.Profile {
  padding: 2rem;
  display: flex;
  justify-content: center;
}

.ProfileCardBody img {
  border-radius: 8px;
  margin-top: 4px;
}

.ProfileCardBody {
  display: flex;
  border-radius: 8px;
  width: 430px;
  height: 135px;
  background-color: #1a1f2d;
}

@media only screen and (max-width: 870px) {
.ProfileCardBody{
  display: none
}
  .Accountİnfo{
    width: 500px;
    margin-left: -0.5rem;
    height: auto;
  }

  .AccountBar{
    width: 350px;
  }
}


</style>