<template>
    <div class="text">
        <h3>Sonuç Bulunamadi AnaSayfaya Yönlendiriyorum</h3>
    </div>
</template>



<script>
export default {
  created() {
    setTimeout(() => {
      window.location.href = "/";
    }, 5000);
  },
};
</script>

<style scoped>
 .text{
    display: block;
    justify-content: space-between;
    text-align: center;
    padding: 1rem;
  }
  h3{
      color: red
  }
</style>