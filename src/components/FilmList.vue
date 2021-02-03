<template>
  <div>
    <div>
      <Loading v-if="loading"></Loading>
    </div>
    <div class="scroll" :style="{ height: height + 'px' }">
      <div class="list">
        <div class="item" v-for="(item, index) in data" :key="index" @click="goDetail(item.filmId)">
          <div class="left">
            <img v-lazy="item.poster" />
          </div>
          <div class="middle">
            <div class="nowPlayingFilm-name">
              <span class="name">{{ item.name }}</span>
              <span class="feel">{{ item.filmType.name }}</span>
            </div>
            <div v-if="type==1">
              <span v-if="type == 1">观众评分</span>
              <span class="grade">{{ item.grade }}</span>
            </div>
            <div>
              <div>主演：{{ item.actors | parseActors }}</div>
              <div v-if="type == 1">{{ item.nation }} | {{ item.runtime }}</div>
            </div>
            <div v-if="type==2">上映日期：{{item.premiereAt | premiereAt}}</div>
          </div>
          <div class="right">
            <span v-if="type == 1">购票</span>
            <span v-else>预约</span>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="scroll" :style="{ height: height + 'px' }">
      <div class="list">
        <div
          class="item"
          v-for="(item, index) in data"
          :key="index"
          @click="goDetail(item.filmId)"
        >
          <div class="left">
            <img :src="item.poster" />
          </div>
          <div class="middle">
            <div class="nowPlayingFilm-name">
              <span class="name">{{ item.name }}</span>
              <span class="feel">{{ item.filmType.name }}</span>
            </div>
            <div>
              <span>观众评分 </span>
              <span class="grade">{{ item.grade }}</span>
            </div>
            <div>主演：{{ item.actors | parseActors }}</div>
            <div v-if="type == 1">{{ item.nation }} | {{ item.runtime }}</div>
          </div>
          <div class="right">
            <span v-if="type == 1">购票</span>
            <span v-else>预约</span>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import Loading from "@/components/Loading";
import moment from 'moment'
import BScroll from 'better-scroll'
import { comingSoonUriData, nowPlayingUriData } from '../api/api';
export default {
  data() {
    return {
      loading: true,
      height: 0,
      bs: null,
      pageNum: 2,
      flag: true,
      data: [],
    };
  },
  components: {
    Loading,
  },
  props: {
    list: {
      type: Array,
      default: [],
    },
    type: {
      type: Number,
      default: 0,
    },
  },
  created() {
    this.data = this.list;
    if (this.data.length > 0) {
      this.loading = false;
    }else{
      this.loading=true
    }
    // this.data=this.list
    // console.log(this.data);
  },
   methods:{
    goDetail:function(filmid){
      this.$router.push({name:"detail",params:{filmid}})
    },
    getData:async function(){
      if(this.flag){
        this.pageNum++;
        if(this.type==1){
          var ret=await nowPlayingUriData(this.pageNum)
        }else{
          var ret=await comingSoonUriData(this.pageNum)
        }
        if(ret.data.data.films.length<10){
          this.flag=false
        }
        this.data=this.data.concat(ret.data.data.films)
      }
    }
  },
  mounted() {
     this.height=document.documentElement.clientHeight-100
     this.$nextTick(()=>{
       this.bs=new BScroll('.scroll',{
         pullUpLoad:true,
         pullDownRefresh:true,
         click:true
       })
       this.bs.on('pullingUp',()=>{
         this.getData()
         this.bs.finishPullUp()
       })
       this.bs.on('pullingDown',()=>{
         this.getData()
         this.bs.finishPullUp()
       })
     })
  },
  beforeDestroy() {
    this.bs=null
  },
  watch:{
    data(){
      this.$nextTick(()=>{
        this.bs.refresh()
        this.bs.finishPullUp()
      })
    }
  },
  filters: {
    parseActors: function (value) {
      let actors = "";
      if (value) {
        value.forEach((element) => {
          actors += element.name + " ";
        });
      } else {
        actors = "暂无主演";
      }
      return actors;
    },
    premiereAt:function(value){
      // let week=['日','一','二','三','四','五','六']
       
      return moment(value*1000).format('周ddd MM月DD日')      
    }
  },
 
};
</script>

<style lang="scss" scoped>
.scroll {
  overflow: hidden;
  .list {
    padding-bottom: 51px;
    // margin-bottom: 51px;
    .item {
      margin-top: 15px;
      padding-bottom: 15px;
      display: flex;
      color: #797d82;
      font-size: 13px;
      border-bottom: 1px solid #ededed;

      .left {
        width: 77px;
        height: 100px;
        margin-left: 20px;
        img {
          width: 66px;
          height: 100%;
        }
      }

      .middle {
        display: flex;
        flex-direction: column;
        // justify-content: space-between;
        width: 55%;

        div:nth-of-type(1) {
          color: #797d82;
          font-size: 13px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        div:nth-of-type(3) {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .name {
          max-width: calc(100% - 25px);
          color: #191a1b;
          font-size: 16px;
          height: 22px;
          line-height: 22px;
          margin-right: 5px;
          overflow: hidden;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .feel {
          font-size: 9px;
          color: #fff;
          background-color: #d2d6dc;
          height: 14px;
          line-height: 14px;
          padding: 0 2px;
          border-radius: 2px;
        }

        .grade {
          color: #ffb232;
          font-size: 14px;
        }
      }

      .right {
        width: 15%;
        display: flex;
        align-items: center;
        margin-right: 20px;

        span {
          border: 1px solid #ff5f16;
          background: white;
          color: #ff5f16;
          border-radius: 2px;
          height: 25px;
          line-height: 25px;
          font-size: 13px;
          width: 50px;
          text-align: center;
        }
      }
    }
  }
}
</style>