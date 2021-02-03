<template>
  <div id="app">
    <FooterNav v-if="is_show"></FooterNav>
    <router-view/>
  </div>
</template>
<script>
import FooterNav from '@/components/FooterNav'
export default {
  data(){
    return{
      is_show:true
    }
  },
  created(){
    this.eventBus.$on('footernav',(flag)=>{
      this.is_show=flag
    })
  },
  components:{
    FooterNav,
  }
}
</script>
<style lang="scss">
* {
    margin: 0;
    padding: 0;
}
html,
body {
    touch-action: none;
    height: 100%;
    ul,
    li {
        list-style: none;
    }
}
</style>
