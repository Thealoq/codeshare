<template>
  <div class="Codes">
    <div class="wrap">
    </div>
    <div class="Codes">
      <div v-for="item in items" v-bind:style="`border: 2px solid #${item.Color};`" :key="item.Title" class="Code" >
        <a :href="`http://localhost:3000/code/${item._id}`">
          <div class="CardTitle">
            <span><b>{{ item.Title }}</b></span>
          </div>
          <div class="CardDescription">
            <span>{{ item.Description }}</span>
          </div>
          <div class="ipg">
            {{ item.Time }}
          </div>
          <div class="CardAuth">
            <div class="aut">
              <span><b>Author: <b>{{ item.Author }}</b></b></span> <img src="../assets/thealoq.gif" alt="">
            </div>

          </div>
        </a>
      </div>
    </div>
    <div/>
  </div>
</template>

<script>
export default {
  name: "codes",
  data() {
    return {
      items: [],
      link: [],
    }
  },
  created() {
       
       fetch('http://localhost:4000/api/all')
        .then(response => response.json())
        .then(data => {
        data.map(item => {
            this.items.push(item);
        
          })
        })
      
  }
}

</script>

<style scoped>
.aut img{
border-radius: 50%;
  width: 60px;
  height: auto;
  margin-left: 1rem;
}
.aut span{
  margin-top: 1rem;
  margin-left: -1rem;
}

a{
  color: white;
  text-decoration: none;
}
.aut{
  margin-left: 5rem;
  display: flex;
  justify-content: center;
  align-content: center;
}
.ipg{
  margin-left: 1rem;
  display: flex;
  justify-content: flex-start;
}
.CardAuth{
  padding: 1rem;

}
.CardDescription{
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
}
.CardTitle{
  padding: 1rem;
}

.Codes{
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
}

.Code{
  background-color: #1a1f2d;
  padding: 1rem;
  margin:2rem;
  width: 300px;
  border-radius: 8px;
  height: auto;
}

input {
  background-color: #1a1f2d;
}

.wrap {
  margin-top: 3rem;
}

@media only screen and (max-width: 670px) {
 .wrap{
   margin-top: 0px;
 }
}

</style>

