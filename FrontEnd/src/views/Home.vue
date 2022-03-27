<template>
  <div class="Home">
    <div class="Bg">
       <div class="info">
            <div>
            </div>
       </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Info.vue"
import CountCard from "../components/TestCard.vue"
export default {
  name: "Home",
  data() {
    return {
    };
  },
  components: {
    CountCard,
    Card
  },
  created() {
  }
}
</script>

<style scoped>
.info div {
  padding: 1rem;
}

.info{
  display: flex;
  justify-content: center;
  align-content: center;
}
a{
  text-decoration: none;
  color: white;
}

.Home {
  display: flex;
  justify-content: center;
  padding: 1rem;

}

@media screen and (max-width:  750px) {
  .Home {
    margin-top: 3rem;
  }
}


</style>



