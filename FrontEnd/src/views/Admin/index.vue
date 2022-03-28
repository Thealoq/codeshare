<template>
    <div class="text">
        <div  id="thealoq" class="text">
                <h1>Admin Panel</h1>
        </div>
    </div>
</template>
<style scoped>
    #thealoq{
      display: none;
      margin-top: 4rem
    }
    
</style>



<script>
export default {
  name: "admin",
  data() {
    return { 
        Status: Boolean,
        user: null,
      items:[{
        
      }],
    };
  },
  created() {
    const token = window.localStorage.getItem("token");
              if(token) {
                 fetch("https://discord.com/api/users/@me", {
        headers: {
          authorization: `Bearer ${token}`
        }})
        .then(result => result.json())
        .then(response => {
          this.user = response;
        this.items.push({
            id: response.id,
          });
          this.items.some(item => {
            fetch("http://localhost:4000/owner", {
              headers: new Headers({
                id: item.id
              })
            }).then(res => res.json()).then(data => {
              if(data.success) {
                document.getElementById("thealoq").style.display = "block"
              }
            })
            if (item.id === response.id) {
              this.Status = true;
            }
          });
        });
      }
    }
};
</script>
