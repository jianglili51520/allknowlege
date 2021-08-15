<template>
  <div>
     <!-- <van-nav-bar
      title="统计"
    /> -->
    <div id="statistics">
      <div class="query" @click="_c_query()">
        <van-icon name="search" size="16px" style=""/>
        <span style="margin-left:3px">搜索</span>
      </div>
      <div class="top">
          <div class="title">风险报告统计</div>
        <div class="content">
          <van-grid :column-num="3" :gutter="10" v-model="statisticsData">
            <van-grid-item class="firstReport">
              <span class="head">首次报告</span>
              <div class="num">{{statisticsData.firstReport}}<span class="jia">家</span></div>
            </van-grid-item>
            <van-grid-item class="secondReport">
              <span class="head">再次报告</span>
              <div class="num">{{statisticsData.secondReport}}<span class="jia">家</span></div>
            </van-grid-item>
            <van-grid-item class="changeReport">
              <span class="head">变更报告</span>
              <div class="num">{{statisticsData.changeReport}}<span class="jia">家</span></div>
            </van-grid-item>
          </van-grid>
        </div>
        <div class="content1">
          <van-grid :column-num="2" :gutter="10" v-model="statisticsData">
            <van-grid-item class="level2Company">
              <span class="head">较大风险</span>
              <div class="num">{{statisticsData.level2Company}}<span class="jia">家</span></div>
              <div class="num">{{statisticsData.level2Count}}<span class="jia">条</span></div>
            </van-grid-item>
            <van-grid-item class="level1Company">
              <span class="head">重大风险</span>
              <div class="num">{{statisticsData.level1Company}}<span class="jia">家</span></div>
              <div class="num">{{statisticsData.level1Count}}<span class="jia">条</span></div>
            </van-grid-item>
            <van-grid-item class="upCompany">
              <span class="head">规上企业</span>
              <div class="num">{{statisticsData.upCompany}}<span class="jia">家</span></div>
              <div class="num">{{statisticsData.upCount}}<span class="jia">条</span></div>
            </van-grid-item>
            <van-grid-item class="downCompany">
              <span class="head">规下企业</span>
              <div class="num">{{statisticsData.downCompany}}<span class="jia">家</span></div>
              <div class="num">{{statisticsData.downCount}}<span class="jia">条</span></div>
            </van-grid-item>
          </van-grid>
        </div>
      </div>
      <div class="bottom">
        <div class="title" style="text-align: center;">各区县完成风险报告企业数</div>
        <div class="content">
              <div class="barchart">
                <BarChart2 elemId="main_line1" :data="data1" @getname="_c_getname"/>
              </div>
        </div>
      </div>
      <van-dialog v-model="show" title="企业查询" show-cancel-button>
        <van-search v-model="companyName" placeholder="请输入企业名称" input-align="left" @input="_c_company_query()"></van-search>
        <ul v-for="(item,index) in companyList" :key="index">
          <li>{{item.enterprise_name}}</li>
        </ul>
      </van-dialog>
    </div>
  </div>
</template>

<script>
// import Search from '@/components/Search.vue'
import {statistics,companyQuery} from '@/api/company.js'
// import BarChart from '@/components/echarts/BarChart.vue';
import BarChart2 from '@/components/echarts/BarChart2.vue';
export default {
  name: 'statistics',
  components: {
    // BarChart
    BarChart2
  },
  data(){
    return{
      statisticsData:[],
      show:false,
      companyName:"",
      companyList:[],
      data1:{
        name:[],
        total:[]
      },
      county_name:""
    }
  },
  created(){
    this._m_init()
  },
  methods: {
    //---------------普通事件-------------------
    _m_init(){
      this.data1.name=[]
      this.data1.total=[]
      statistics().then((res)=>{
        if(res.error_code == 0){
          this.statisticsData = res.data;
          res.data.county.forEach(item => {
            this.data1.total.push(item.total);
            this.data1.name.push(item.county_name)
          })
        }
      })
    },
    //----------------点击事件--------------------
    //点击查询弹框弹出
    _c_query(){
      // this.show=true;
      this.$router.push('/search')
    },
    _c_getname(params){
      console.log(params);
      if(params.name == "海安市"){
        this.county_name = "通州湾";
      }else if(params.name == "如皋市"){
        this.county_name = "苏锡通"
      }else if(params.name == "如东县"){
        this.county_name = "开发区"
      }else if(params.name == "海门区"){
        this.county_name = "崇川区"
      }else if(params.name == "启东市"){
        this.county_name = "通州区"
      }else if(params.name == "通州湾"){
        this.county_name = "海安市"
      }else if(params.name == "苏锡通"){
        this.county_name = "如皋市"
      }else if(params.name == "开发区"){
        this.county_name = "如东县"
      }else if(params.name == "崇川区"){
        this.county_name = "海门区"
      }else if(params.name == "通州区"){
        this.county_name = "启东市"
      }
      console.log(this.county_name);
      statistics({county_name:this.county_name}).then((res)=>{
        if(res.error_code == 0){
          this.statisticsData = res.data
        }
      })
    },
    //输入框输入内容变化触发事件
    _c_company_query(){
      companyQuery({
        enterprise_name:this.companyName,
        ...this.page
      }).then((res)=>{
        if(res.error_code == 0){
          console.log(res);
          this.companyList = res.data.data;
        }else{
          this.$message.error(res.message)
        }
      })
    }
  }
}
</script>

<style lang="less">
  #statistics{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 5%;
    overflow: hidden;
    .query{
      width: 18%;
      height: 5%;
      cursor:pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top:2.5%;
      right:8%
    }
    .top{
      width: 100%;
      height: 45%;
      margin-top: 5px;
      .title{
        margin-bottom:3%;
        font-size: 0.45rem;
        font-weight: 600;
        text-align: center;
      }
      .content1{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -1%;
        .van-grid{
          width: 63%;
          height: 110px;
          .level2Company{
            .van-grid-item__content--center {
              border-top: 3px solid #fb5431!important;
            }
          }
          .level1Company{
            .van-grid-item__content--center {
              border-top: 3px solid #5bc497!important;
            }
          }
          .upCompany{
            .van-grid-item__content--center {
              border-top: 3px solid #af95d2!important;
            }
          }
          .downCompany{
            .van-grid-item__content--center {
              border-top: 3px solid #77aaec!important;
            }
          }
          .van-grid-item{
            height: 90px;
            margin-bottom: 3%;
            .box{
              margin: 2px 2px;
            }
            .head{
              color: #3b5ef6;
              font-size: 15px;
              font-weight: 550;
            }
            .num{
              color: #000;
              font-size: 17px;
              margin-top: 8px;
              .jia{
                color: #666!important;
                font-size: 13px!important;
                padding: 3px;
              }
            }
          }
        }
      }
      .content{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 5%;
        .van-grid{
          width: 88%;
          height: 110px;
          .firstReport{
            .van-grid-item__content--center {
              border-top: 3px solid #3b5ef6!important;
            }
          }
          .secondReport{
            .van-grid-item__content--center {
              border-top: 3px solid #3ea0ca!important;
            }
          }
          .changeReport{
            .van-grid-item__content--center {
              border-top: 3px solid #ef941f!important;
            }
          }
          .van-grid-item{
            height: 90px;
            .box{
              margin: 2px 2px;
            }
            .head{
              color: #3b5ef6;
              font-size: 15px;
              font-weight: 550;
            }
            .num{
              color: #000;
              font-size: 17px;
              margin-top: 8px;
              .jia{
                color: #666!important;
                font-size: 13px!important;
                padding: 3px;
              }
            }
          }
        }
      }
    }
    .bottom{
      width: 100%;
      height: 45%;
      .title{
        margin-top: 3rem;
        font-size: 0.45rem;
        font-weight: 600;
        margin-bottom: -2.4rem;
      }
      .content{
        width: 100%;
        height: 6.5rem;
        margin-top: 26%;
        .barchart{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
