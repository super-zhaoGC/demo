<template>
  <div>
    <div>
      <Loading v-if="loading"></Loading>
      
    </div>
    <div class="scroll" :style="{ height: height + 'px' }">
      <div class="list">
        <div class="item" v-for="(item, index) in data" :key="index">
          <div class="left">
            <img :src="item.poster" />
          </div>
          <div class="middle">
            <div class="nowPlayingFilm-name">
              <span class="name">{{item.name}}</span>
              <span class="feel">{{item.filmType.name}}</span>
            </div>
            <div>
              <span>观众评分</span>
              <span class="grade">{{item.grade}}</span>
            </div>
            <div>
              <div>主演：{{item.actors | parseActors}}</div>
              <div v-if="type==1">{{item.nation}} | {{item.runtime}}</div>
            </div>
          </div>
          <div class="right">
            <span v-if="type==1">购票</span>
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
import Loading from "../components/Loading";
export default {
  data() {
    return {
      loading: true,
      height: 0,
      bs: null,
      pageNum: 1,
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
    type:{
      type:Number,
      default:0
    }
  },
  created() {
    this.data = this.list;
    if (this.data.length > 0) {
      this.loading = false;
    }
    // this.data=this.list
    console.log(this.data);
  },
  filters:{
    parseActors:function(value){
      let actors=''
      if(value){
        value.forEach((element)=>{
          actors+=element.name+" "
        })
      }else{
        actors="暂无主演"
      }
      return actors
    }
  }
};
</script>

<style lang="scss" scoped>
.scroll {
  // overflow: hidden;
  .list {
    margin-bottom: 51px;
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
        justify-content: space-between;
        width: 55%;

        div:nth-of-type(1) {
          color: #191a1b;
          font-size: 16px;
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