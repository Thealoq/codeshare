<template>
  <div class="Home">
    <div class="vio">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1a1f2d" fill-opacity="1" d="M0,160L48,138.7C96,117,192,75,288,58.7C384,43,480,53,576,101.3C672,149,768,235,864,234.7C960,235,1056,149,1152,122.7C1248,96,1344,128,1392,144L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    </div>
    <div class="Text">
      <h1> Welcome Bro<b>ost Code</b></h1>
    </div>
    <div class="Laoding">
     <div>
       <CountCard
           title="Users"
           :start-amount="0"
           :end-amount="this.items.memberCount"
           :duration="3">
         <svg
             xmlns="http://www.w3.org/2000/svg"
             width="84"
             height="84"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             stroke-width="0.5"
             stroke-linecap="round"
             stroke-linejoin="round"
             class="feather feather-users"
         >
           <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
           <circle cx="9" cy="7" r="4"></circle>
           <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
           <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
         </svg>
       </CountCard>
     </div>
      <div>
        <CountCard
            title="Code in Projects"
            :start-amount="0"
            :end-amount="15">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="84"
              height="84"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="0.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-code"
          >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </CountCard>
      </div>
    </div>
  </div>
</template>

<script>
import CountCard from "../components/TestCard.vue"
export default {
  name: "Home",
  data() {
    return {
      items:[]
    };
  },
  components:{
    CountCard
  },
  created() {
    const token = window.localStorage.getItem("token")
    if (token) {
      fetch("http://localhost:4000/guilds/956973292701495346")
          .then(result => result.json())
          .then(response => {
            this.items = response.data
            console.log(this.items)
          })
    }
  }
}
</script>

<style scoped>
.Text b{
  color: #4f5fc5;
}


.Text{
  margin-top: -16rem;
  display: flex;
  justify-content: center;
  align-content: center;
}

.Laoding{
  margin-top: 5rem;
  padding: 0px 20rem;
  display: flex;
  justify-content:  space-between;
  align-content: center;
}

.vio{
  margin-top: 0rem
}

@media only screen and (max-width: 1080px) {
  .Text{
    margin-top: 0px;
  }
  .Laoding{
    padding: 0px 1.7rem;
  }
}

</style>



