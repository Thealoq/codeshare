<template>
 <div>
    <div v-for="item in items" :key="item.Code" class="code">
      <div class="teq">
        <h3>{{item.Title}}</h3>
      </div>

      <code-highlight class="track" language="javascript">
         <pre style="background-color:#1a1f2d;" id="code" class="teq">
          {{item.Code}}
       </pre>
      </code-highlight>
    <div>
      <span>Create Date: <b>{{item.Time}}</b></span>
    </div>
    <div>
      <span>Description: <b>{{item.Description}}</b></span>
    </div>
    <div>
      <span>Author: <b>{{item.Author}}</b></span>
    </div>
    </div>
  <div>
  </div>
   <div/>
 </div>
</template>

<script>
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/prism-tomorrow.css";
export default {
  name: "Code",
  data() {
    return {
      items: [],
    }
  },
  components: {
    CodeHighlight,
  },
  beforeMount() {
    fetch('http://localhost:4000/api/find/' + this.$route.params.id)
        .then(response => response.json())
        .then(data => {
          this.items.push(data);
        })
  },
}
</script>

<style scoped>

.teq {
  display: flex;
  justify-content: center;
  align-content: center;
}


.code {
  padding: 2rem;
  justify-content: center;
  align-items: center;
}

</style>
