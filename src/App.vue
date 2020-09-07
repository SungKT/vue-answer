<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "./style/normalize.css";
@import "./style/base.scss";

#app {
  width: 100%;
  height: 100%;
}
</style>

<script>
import store from "@/store";

export default {
  data() {
    return {
      itemDetail: [],
    };
  },

  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http.get("json/answer.json").then(
        (response) => {
          this.itemDetail = response.data;
          this.add();
        },
        (response) => {
          console.log("error", response);
        }
      );
    },
    add() {
      console.log("----", this.itemDetail);
      store.commit("changeItemDetail", this.itemDetail);
       console.log("S",store.state)
    },
  },
};
</script>


