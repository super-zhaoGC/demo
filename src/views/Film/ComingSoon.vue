<template>
<div>
  <film-list :list='list' :key="'come'+list.length"/>
</div>
</template>

<script>
import FilmList from "../../components/FilmList";
import {comingSoonUriData} from '../../api/api'
export default {
  components: {
    FilmList,
  },
  data(){
    return {
      list:[],
      type:2
    }
  },
  async created() {
    let ret=await comingSoonUriData()
    this.list=ret.data.data.films
    // console.log(this.list);
  },
};
</script>

<style>
</style>