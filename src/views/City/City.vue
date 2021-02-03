<template>
  <div class="scroll">
    <div>
      <van-index-bar :index-list="indexList" highlight-color="red">
        <template v-for="item in cityList">
          <van-index-anchor
            :index="item.index"
            :key="item.index"
            style="background: #eee"
          />
          <van-cell
            v-for="(sub, key) in item.data"
            @click="chooseCity(sub.name, sub.cityId)"
            :title="sub.name"
            :key="key"
          />
        </template>
      </van-index-bar>
    </div>
  </div>
</template>
<script>
import { cityListData } from "../../api/api";
import BScroll from "better-scroll";
import Vue from "vue";
import { IndexBar, IndexAnchor, Cell } from "vant";
import "vant/lib/index.css";

Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);
export default {
  data() {
    return {
      cityList: [],
      indexList: [],
    };
  },
  async created() {
    let ret = await cityListData();
    // console.log(ret);
    this.cityList = ret[0];
    this.indexList = ret[1];
    this.eventBus.$emit("footerNav", false);
  },
  methods:{
    chooseCity:function(cityName){
      this.$store.commit('setCity',cityName)
      this.$router.go(-1)
    }
  },
  beforeDestroy() {
    this.eventBus.$emit("footerNav", true);
  },
};
</script>

<style>
</style>