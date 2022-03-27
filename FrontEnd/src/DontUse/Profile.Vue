<template>
  <div>
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
  </div>
  <div class="Codeİnfo">
    <span>x</span>
  </div>
  </div>
</template>


<style>
Badget div{
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
  margin-top: 15rem;
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