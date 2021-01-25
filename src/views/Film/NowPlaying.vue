<template>
  <div>
    <film-list :list='list' :key="'film'+list.length" :type="type"/>
  </div>
</template>

<script>
import { nowPlayingUriData } from "../../api/api";
import FilmList from '@/components/FilmList'
export default {
  data(){
    return{
      list:[],
      type:1
    }
  },
  components:{
    FilmList,
  },
  async mounted() {
    try {
      let ret = await nowPlayingUriData();
      // console.log(ret);
      this.list=ret.data.data.films
      // console.log(this.list);
    } catch (error) {}
  },
};
</script>

<style>
</style>