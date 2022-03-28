<template >
  <div class="center">
      <div class="container">
    <form @submit="onsubmit">
      <div class="well">
        <h4>Share Code</h4>
        <div class="form-group">
          <label class="pull-left"> Title </label>
          <input type="text" class="form-control" placeholder="Title" v-model="this.User.Title">
        </div>
        <div class="form-group">
          <label class="pull-left"> Description </label>
          <input type="text" placeholder="Description" v-model="this.User.Description">
        </div>
        <div class="form-group">
          <label class="pull-left"> Type </label>
          <select v-model="this.User.Type">
            <option value="Normal">Normal</option>
            <option value="Gold">Gold</option>
            <option value="Diamond">Diamond</option>
              <option value="Emerald">Emerald</option>
            <option value="Booster">Booster</option>
          </select>
        </div>
        <div class="form-group">
          <label class="pull-left"> Code </label>
          <textarea  v-model="this.User.Code"> </textarea>
        </div>
      </div>
      <button type="submit" >Submit</button>
    </form>
  
  </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
export default {
  name: 'share',
  data() {
    return {
      User: { Title: '', Description: '', Code:'', Time: '', Author:'', Type:''},
    }
  }, methods: {
    onsubmit($event){
      $event.preventDefault();
      let newCode = {
        Title: this.User.Title,
        Description: this.User.Description,
        Code: this.User.Code,
        Time:"",
        Type: this.User.Type,
        Author: "Thealoq",
      }
      axios.post('http://localhost:4000/save', newCode)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      $event.stopPropagation();
    }
  }
}
</script>



<style scoped>
textarea{
  resize: horizontal;
  max-width: 130px;
  min-width: 100px;
}

Select{
  background-color: #1a1f2d;
  outline: #3e8e41 2px solid;
  border: none;
  padding: 0.3rem;
  color: white;
  margin-left: 5rem;
  border-radius: 5px;
  width: 200px;
}

input{
background-color: #1a1f2d;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  outline: #3e8e41 2px solid;
  color: white;
  margin-left: 5rem;
}

textarea{
  background-color: #1a1f2d;
  padding: 0.5rem;
  border: none;
  outline: #3e8e41 2px solid;
  color: white;
  margin-left: 5rem;
}


button {
  padding: 0.5rem;
  border-radius: 5px;
  background-color: transparent;
  border: #3e8e41 2px solid;
  color: white;
}

.form-group{
    margin: 1rem;
  display: flex;
}
.center{
    justify-content: center;
    display: flex;
    align-items: center;
    
}

h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.container{
    margin-top: 15%;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-content: center;
    width: 500px;
    border-radius: 20px;
    background-color:  #1a1f2d;
    
}
</style>