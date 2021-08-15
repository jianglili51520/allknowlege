<template>
  <div id="riskList">
    <van-nav-bar
      title="企业风险"
      left-text="返回上一页"
      left-arrow
      @click-left="_c_return"
    ></van-nav-bar>
    <div class="content" v-if="riskList.length>0">
      <van-collapse v-model="activeNames">
        <van-collapse-item  v-for="(item,index) in riskList" :key="index"  :name="index" :title="item.risk_name">
          <template #title>
            <div>{{item.risk_name}}<span class="tag" :style="'border:1px solid '+item.bdcolor+';background-color:'+item.bgcolor">{{item.level}}</span></div>
          </template>
          <template #default>
            <div><span class="title">风险点</span> <span class="desc">{{item.risk_point}}</span></div>
            <div><span class="title">具体风险描述</span> <span class="desc">{{item.risk_info}}</span></div>
            <div><span class="title">主要事故类别</span> <span class="desc">{{item.accident_type}}</span></div>
            <div><span class="title">管控措施信息</span> <span class="desc">{{item.measures_info}}</span></div>
            <div><span class="title">责任部门</span> <span class="desc">{{item.responsible_department}}</span></div>
            <div><span class="title">责任人</span> <span class="desc">{{item.responsible_person}}</span></div>
          </template>
        </van-collapse-item>
      </van-collapse>

      <van-pagination v-model="currentPage" :page-count="page.total" mode="simple" @change="_c_page_change" style="margin-top:1rem"/>
    </div>
    <div v-else>
      <van-empty description="暂无数据" />
    </div>
  </div>
</template>

<script>
import {riskList} from '@/api/company.js'
export default {
  data(){
    return{
        reportId:this.$route.params.reportId,
        page:{
            pageNo:1,
            pageSize:10,
            total:0
        },
        activeNames: [],
        riskList:[],
        currentPage:1
    }
  },
  created(){
      this._m_init()
  },
  mounted(){
      
  },
  methods:{
      //普通事件
      _m_init(){
        riskList({
          report_history_id:this.reportId,
          ...this.page
        }).then((res)=>{
          if(res.error_code == 0){
            console.log(res.data);
            this.page.total = res.data.totalPage
            this.riskList = res.data.data.map(item=>{
              item.level = item.risk_level ==1?'重大':'较大'
              item.bdcolor = item.risk_level ==1?'#f55e3e':'orange'
              item.bgcolor = item.risk_level ==1?'#f55e3e':'orange'
              return item
            })
          }
        })
      },
      _c_return() {
        this.$router.back()
      },
      _c_page_change(val) {
        this.page.pageNo = val
        this._m_init()
      }
  }
  
}
</script>

<style lang="less">
#riskList {
  margin-top: 46px;
  .tag {
    color: #fff;
    width: 100%;
    height: 24px;
    padding: 0.05rem;
    margin-left:0.1rem;
    border-radius: 0.1rem;
  }
  .title {
    margin-right: 0.5rem;
  }
  .desc {
    color: #666!important;
  }
}
</style>