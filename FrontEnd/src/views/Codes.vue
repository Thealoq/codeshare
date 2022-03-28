<template>
  <div class="Codes">
    <div class="wrap">
      <div class="search">
        <input  type="text" class="searchTerm" placeholder="Search Code">
        <button type="submit" class="searchButton">
          <i class='bx bx-search-alt-2'></i>
        </button>
      </div>
    </div>
    <div class="Cards">
      <div id="Card" v-for="item in items" v-bind:style="`border: 2px solid #${item.color};`" :key="item.title" class="Card">
        <div>
          <h3>{{item.title}}</h3>
        </div>
        <div>
          <span>{{item.description}}</span>
        </div>
        <div>
          <a :href="item.link"> <button v-bind:style="`border: 2px solid #${item.color};`" id="buttons">Tıkla Ve Git</button></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "codes",
  data() {
    return {
      items: [
         {
          title: "Thealoq Normal",
          rank: "Normal",
          color: "fff",
          link: "#",
          description: "Kullanıcılara süreli veya sınırsız premium verebilirsiniz. Kullanıcılar sürelerini kontrol edebilir. İstediğiniz kişiden premium alıp verebilirsiniz."
        },
         {
          title: "Thealoq Gold",
          rank: "Gold",
          color: "f7c223",
          link: "#",
          description: "Kullanıcılara süreli veya sınırsız premium verebilirsiniz. Kullanıcılar sürelerini kontrol edebilir. İstediğiniz kişiden premium alıp verebilirsiniz."
        },
        {
        title: "Thealoq Diamond",
        rank: "Diamond",
        color: "4ae",
        link: "#",
        description: "Kullanıcılara süreli veya sınırsız premium verebilirsiniz. Kullanıcılar sürelerini kontrol edebilir. İstediğiniz kişiden premium alıp verebilirsiniz."
      },
         {
          title: "Thealoq Emerald",
          rank: "Emerald",
          color: "6d7",
           link: "#",
          description: "Kullanıcılara süreli veya sınırsız premium verebilirsiniz. Kullanıcılar sürelerini kontrol edebilir. İstediğiniz kişiden premium alıp verebilirsiniz."
        }]
    }
  },
  created() {
  }
}

</script>

<style scoped>
.Codes{
  margin-top: -1rem;
}
button{
  border : 2px solid #f7c223;
  background: #1a1f2d;
  padding: 0.5rem;
  color: white;
  border-radius: 12px;
}

span{
  font-size: 13px;
}
.Card div{
  padding: 10px;
}

.Card{
  padding: 1rem;
  background-color: #1a1f2d;
  border-radius: 12px;
  width: 250px;
  margin: 1rem;
  height: 230px;
  display: block;
  align-content: center;
  justify-content: center;
  flex-direction: column;

}

.Cards{
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
}

.search {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
}

.searchTerm {
  width: 500px;
  border: 3px solid #1a1f2d;
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 12px 0 0 12px;
  outline: none;
  color: white;
}

.searchTerm:focus {
  color: white;
}

.searchButton {
  width: 40px;
  height: 36px;
  border: 1px solid #1a1f2d;
  background: #1a1f2d;
  text-align: center;
  color: #fff;
  border-radius: 0 12px 12px 0;
  cursor: pointer;
  font-size: 20px;
}

input {
  background-color: #1a1f2d;
}

.wrap {
  margin-top: 3rem;
}


</style>

