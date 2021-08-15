<template>
  <div id="riskReport">
      <van-nav-bar
        title="企业风险报告"
        left-text="返回上一页"
        left-arrow
        @click-left="_c_return(companyId)"
      >
      </van-nav-bar>
      <div class="content">
          <van-cell-group v-model="reportList">
            <van-field label="企业名称" :value="reportList.enterprise_name" readonly />
            <van-field label="统一社会信用代码" :value="reportList.enterprise_id" readonly />
            <van-field label="报告时间" :value="reportList.report_time" readonly />
            <van-field label="报告状态" :value="reportList.report_status = 1?'上报':'草稿'" readonly />
            <van-field label="报告类型" :value="reportList.report_type" readonly />
            <van-field label="变更理由" :value="reportList.change_reason" readonly />
            <van-field label="企业是否有较大以上安全生产风险" :value="reportList.enterprise_name?'是':'否'" readonly />
            <van-field label="风险数量" :value="reportList.risk_item_num" readonly />
            <van-field label="重大风险数量" :value="reportList.level_1_num" readonly />
            <van-field label="较大风险数量" :value="reportList.level_2_num" readonly />
            <van-field label="省份" :value="reportList.province_name" readonly />
            <van-field label="市级" :value="reportList.city_name" readonly />
            <van-field label="县（区）" :value="reportList.county_name" readonly />
            <van-field label="街道（乡镇）" :value="reportList.subdistrict_name" readonly />
            <van-field label="法定代表人" :value="reportList.legal_person" readonly />
            <van-field label="规上规下" :value="reportList.above_designated" readonly />
            <van-field label="行业领域" :value="reportList.supervision_name" readonly />
          </van-cell-group>
      </div>
  </div>
</template>

<script>
import {riskReport} from '@/api/company.js'
export default {
  data(){
    return{
        reportList:{},
        reportId:this.$route.params.reportId,
        companyId:this.$route.params.companyId
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
        riskReport({
          id:this.reportId
        }).then((res)=>{
          if(res.error_code == 0){
            console.log(res);
            this.reportList = res.data;
            if(res.data.report_type == 1){
                this.reportList.report_type = "初次报告"
            }else if(res.data.report_type == 2){
                this.reportList.report_type = "再次报告"
            }else {
                this.reportList.report_type = "变更报告"
            }
          }
        })
      },
      //点击事件
      _c_return(companyId) {
        this.$router.push({
          path:`/companyDetail/${companyId}`
        })
      }
  }
  
}
</script>

<style lang="less">
  #riskReport{
      width: 100%;
      height: 100%;
      margin-top: 46px;
      .title{
          margin:18% 0 2%;
          font-size: 0.5rem;
      }
  }
</style>