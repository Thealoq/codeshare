<template>
  <div class="top">
    <div class="inputs">
      <div class="input">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M11 6.914V2.586L6.293 7.293l-3.774 3.774 3.841 3.201L11 18.135V13.9c8.146-.614 11 4.1 11 4.1 0-2.937-.242-5.985-2.551-8.293C16.765 7.022 12.878 6.832 11 6.914z"/></svg>
        </div>
        <div>
          <h5>Share Code</h5>
        </div>
      </div>
      <div class="inputbress">
        <form style="padding: 1rem" @submit="onsubmit">
        <div class="value">
          <div class="text">
            <span>Title</span>
          </div>
          <div>
            <input maxlength="25" type="text" class="form-control" placeholder="Title" v-model="this.User.Title">
          </div>
        </div>
          <div class="value">
            <div class="text">
              <span>Description</span>
            </div>
            <div>
              <input maxlength="50" type="text" placeholder="Description" v-model="this.User.Description">
            </div>
          </div>
          <div class="value">
            <div class="text">
              <span>Type</span>
            </div>
            <div>
              <select v-model="this.User.Type">
                <option value="Normal">Normal</option>
                <option value="Gold">Gold</option>
                <option value="Diamond">Diamond</option>
                <option value="Emerald">Emerald</option>
                <option value="Booster">Booster</option>
              </select>
            </div>
          </div>
          <div class="value">
            <div class="text">
              <span>Code</span>
            </div>
            <div>
              <textarea  v-model="this.User.Code"> </textarea>
            </div>
          </div>
          <div>
            <button type="submit" style="margin-left: 1rem; width: 190px">Submit</button>
          </div>
       </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'share',
  data() {
    return {
      User: {Title: '', Description: '', Code: '', Time: '', Author: '', Type: '', Tags: ''},
      Content: true
    }
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

          });
    }
  },
  methods: {
    onsubmit($event) {
      $event.preventDefault();
      let newCode = {
        Title: this.User.Title,
        Description: this.User.Description,
        Code: this.User.Code,
        Time: "",
        Type: this.User.Type,
        Author: "Thealoq",
        Link: "/codes" + "/" + this.User._id
      }
      var that = this;
      axios.post('http://localhost:4000/save', newCode)
          .then((response) => {
            if (response.status) {
              console.log(response)
              setTimeout(x => {
                this.$router.push(`/code/${response.data.thealoq._id}`)
              }, 2000)

            } else {

            }

          })
          .catch((error) => {
            console.log(error);
          });
      $event.stopPropagation();
    }
  }
}
</script>
<style>
button{
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  background-color: #1a1f2d;
  color: white;
}
textarea{
  margin-top: 1rem;
  resize: horizontal;
  width: 170px;
  max-width: 170px;
  min-width: 50px;
  height: 100px;
  outline: none;
  padding: 0.5rem;
  background-color: #1a1f2d;
  border: none;
  color: white;
  border-radius: 5px;
}

.value{
  margin: 1rem;
}
.text{
  display: flex;
  justify-content: center;
  align-content: center;
}

input{
  margin-top: 1rem;
  outline: none;
  padding: 0.5rem;
  background-color: #1a1f2d;
  border: none;
  color: white;
  border-radius: 5px;
}

.top {
  display: flex;
  justify-content: center;
  align-content: center;
}

.inputbress{
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: #293146;
  height: 600px;
  width: 100%;
  border-radius: 0px 0px 15px 15px;
}

.input svg {
  fill: white;
  margin-top: 1rem;
  transform: rotate(180deg);
}

.input{
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: #111728;
  border-radius: 15px 15px 0px 0px;
}

.inputs{
  margin-top: 3rem;
  flex-direction: column;
  width: 500px;
  display: flex;
  align-content: center;
  justify-content: center;
  height: auto;
}

Select {
  margin-top: 1rem;
  padding: 0.5rem;
  background-color: #1a1f2d;
  outline: none;
  border: none;
  color: white;
  border-radius: 5px;
  width: 190px;
}
</style>