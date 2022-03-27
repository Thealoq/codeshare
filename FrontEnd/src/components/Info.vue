<template>
  <div class="Card">
    <div class="İnfoCard">
      <div class="BioCard">
        <div class="ServerLogo">
          <img :src="this.items.icon">
        </div>
        <div class="ServerName">
            <span>ServerName <b>{{ this.items.name}}</b></span>
        </div>
        <div class="Serverid">
          <span>ServerID <b>{{ this.items.id}}</b></span>
        </div>
        <div class="ServerCount">
          <span>MemberCount <b>{{ this.items.memberCount}}</b></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data(){
    return{
      items:[]
    }
  },
  props:{
    İd: Number,
  },
    created() {
         fetch(`http://localhost:4000/guilds/${this.İd}`)
         .then(result => result.json())
          .then(response => {
            this.items = response.data
            console.log(response.data)
          })

    }
}

</script>

<style scoped>
@media screen and (max-width: 750px) {
  .ServerName{
    font-size: 13px;
  }
  .Serverid span{
    font-size: 12px;
  }

  .ServerCount span{
    font-size: 13px;
  }

}

.ServerCount{
  margin-left: 10rem;
  margin-top: 1rem;
  font-size: 15px;
}

b{
  color: #3e8e41;
}

.Serverid{
  margin-left: 10rem;
  margin-top: -6rem;
  font-size: 15px;

}

.ServerName span {
  position: absolute;
  margin-left: 10rem;
  margin-top: -8rem;
  font-weight: bold;
}

.ServerLogo {
  padding: 2rem;
}

.ServerLogo img{
  border-radius: 12%;
  width: 100px;
  height: auto;
  box-shadow: 0px 0px 10px 10px #1a1f2d;
}



.İnfoCard{
  padding: 1rem;
  display: flex;
  align-content: center;
  justify-content: center;
}
.BioCard{
  border-radius: 12px;
  background-color: #111728;
  width: 500px;
  height: 170px;
}
</style>