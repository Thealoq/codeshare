<template>
  <div>
    <div style="display:flex; justify-content: center" id="logout">
       <h3>you are not logged in</h3>
    </div>
      <div style="display:flex; justify-content: center" id="aut">
       <h3> you are not authorized</h3>
    </div>
     <div id="top">
        <div class="Thealoq" v-for="item in Content" :key="item.Code">
       <div class="AdminCard">
           <div class="AdminCardValue">
               <img :src="item.Avatar">
           </div>
           <div style="margin-top: 1rem">
           <span>{{item.Title}}</span>
            </div>
            <div class="AdminCardButton">
              <button v-on:click="deleted(item)" ><i style="color: white" class="gg-trash"></i></button>
            </div>
       </div>
     </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'Admin',
  data() {
    return {
      User: [],
      Content:[]
    }
  },
  created() {
    const token = window.localStorage.getItem("token");
      if(!token) {
       setTimeout(() => {
                 document.getElementById("aut").style.display = "none";
              }, 50);
              setTimeout(() => {
                 document.getElementById("top").style.display = "none";
              }, 50);
    }
    if(token) {
       setTimeout(() => {
                 document.getElementById("logout").style.display = "none";
                 document.getElementsByClassName("top").style.display = "none";
              }, 50);
      fetch("https://discord.com/api/users/@me", {
        headers: {
          authorization: `Bearer ${token}`
        }})
          .then(result => result.json())
          .then(response => {
             fetch(`http://localhost:4000/user/roles/${response.id}`)
          .then(result => result.json())
          .then(res => {
            if(res.includes("957065139461447721")) {
                setTimeout(() => {
                 document.getElementById("top").style.display = "block";
                  document.getElementById("logout").style.display = "none";
                  document.getElementById("aut").style.display = "none";
              }, 50);
            
            }
          })
            fetch(`http://localhost:4000/api/all`)
                .then(result => result.json())
                .then(res => {
                  this.Content = res
                })
          })
    }
  },
  methods:{ 
    deleted(item){
      fetch(`http://localhost:4000/api/delete/${item._id}`, {
        method: "DELETE",
      })
      .then(res => {
        this.Content = this.Content.filter(i => i._id !== item._id)
      })
    }
  },
}
</script>

<style scoped>
@import url('https://css.gg/trash.css');
.AdminCardButton button{
  width: 60px;
  height: 60px;
  border-radius: 8px;
  border: none;
  background-color: transparent;
}

.AdminCardValue{
  display: flex;
  justify-content: center;
  align-content: center;
}

.AdminCardValue span {
  margin: 1rem;
}

.AdminCard img {
  width: 60px;
  border-radius: 8px;
}


.AdminCard{
  padding: 1rem;
  flex-wrap: wrap;
  border-radius: 10px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  background-color: #1a1f2d;  
  margin: 1rem;
  height: auto;
}
</style>