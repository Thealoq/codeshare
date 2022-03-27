<template>
  <div class="CardTwo">
    <div class="BioCardTwo">
      <div class="RoleName">
         <span>Rollers</span>
        <select name="cars" id="cars">
          <option v-for="item in items" :key="item.RoleName" :value="item.RoleName">{{ item.RoleName }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Data",
  data() {
    return {
      items: []
    }
  },
  created() {
    const token = window.localStorage.getItem("token");
    if (token) {
      fetch("https://discord.com/api/users/@me", {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
          .then(result => result.json())
          .then(response => {
            fetch(`http://localhost:4000/MemberRoles/${response.id}`)
                .then(result => result.json())
                .then(response => {
                  console.log(response);
                 if(response.length > 0) {
                    response.map(item => {
                      this.items.push({
                        RoleName: item.name,
                      })
                    })
                 } else {
                    this.items.push({
                      RoleName: "No Roles"
                    })
                 }
                })

          })
    }
  }
}

</script>


<style>


.RoleName select {
  width: 480px;
  border: 0px;
  border-radius: 5px;
  background-color: #1a1f2d;
  color: white;
}

.Color{
  padding: 0.5rem;
  border-radius: 12px;
}
.RoleName {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.RoleName span {
  display: flex;
  justify-content: center;
  align-items: center;
}

.BioCardTwo {
  display: flex;
  justify-content: center;
  border-radius: 12px;
  background-color: #111728;
  width: 500px;
  height: 50px;
}

.CardTwo {
  padding: 1rem;
  display: flex;
  align-content: center;
  justify-content: center;
}



@media screen and (max-width: 750px) {
 .RoleName {
    width: 0px;
 }
 .RoleName select{
    width: 340px;
 }
}

@media screen and (max-width: 670px) {
  .BioCardTwo {
    width: 300px;
  }
  .RoleName select{
    width: 300px;
  }
}
</style>