<template>
  <div class="Info">
    <div class="thealoq">
      <h1>S.S.S.</h1>
    </div>
    <div>
      <div>
        <button v-on:click="test" type="button" class="collapsible">Are there any special codes for those who have Boosted?</button>
        <div id="content" class="content">
          <p>No But You Can Access All Codes</p>
        </div>
        <button v-on:click="testtwo" type="button" class="collapsible">Roles What are The Conditions to Get</button>
        <div id="contentTwo" class="content">
          <p>Gold for 5 Invitations 10 Diamonds for Invitation 30 Invitations You Take the Roles.</p>
        </div>
      </div>
      <button v-on:click="testtree" type="button" class="collapsible">Is There a Condition to See Codes </button>
      <div id="contentTree" class="content">
        <p>Being on the Server and Having a Role</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "info",
  data() {
    return {
      collapse: {
        default: true
      },
      collapsetwo:{
        default: true
      },
      collapseTree:{
        default:true
      }
    }
  },
  methods: {
    test() {
      if (this.collapse === true) {
        document.getElementById("content").style.display = "none";
        this.collapse = false
      } else {
        document.getElementById("content").style.display = "block";
        this.collapse = true
      }
    },

    testtwo() {
      if (this.collapsetwo === true) {
        document.getElementById("contentTwo").style.display = "none";
        this.collapsetwo = false
      } else {
        document.getElementById("contentTwo").style.display = "block";
        this.collapsetwo = true
      }
    },

    testtree() {
      if (this.collapseTree === true) {
        document.getElementById("contentTree").style.display = "none";
        this.collapseTree = false
      } else {
        document.getElementById("contentTree").style.display = "block";
        this.collapseTree = true
      }
    },
  }
}
</script>


<style scoped>



.thealoq {
  display: flex;
  justify-content: center;
  align-content: center;
}

.Info {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}

.collapsible {
  background-color: #1a1f2d;
  color: white;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}

.active, .collapsible:hover {
  background-color: #151924;
}

.content {
  padding: 0 18px;
  width: 100%;
  display: none;
  overflow: hidden;
  background-color: #1e2433;
}

</style>
