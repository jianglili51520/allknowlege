<template>
<div id="companyDetail">
  <van-nav-bar
    title="企业详情"
    left-text="返回上一页"
    left-arrow
    @click-left="_c_return"
  >
     <!-- <template #right>
      <van-button plain hairline type="info" @click="_c_report(detailList.report_history_id,companyId)" size="mini">风险报告</van-button>
      <van-button plain hairline type="info" @click="_c_risk(detailList.report_history_id)" size="mini" v-if="risk_item_num">企业风险</van-button>
      <van-button plain hairline type="info" @click="_c_risk(detailList.report_history_id)" size="mini" v-else disabled>无企业风险</van-button>
    </template> -->
  </van-nav-bar>
      <div class="mintitle">
        <van-button plain hairline type="info" @click="_c_report(detailList.report_history_id,companyId)" size="small" style="margin-right:4%">风险报告</van-button>
        <van-button plain hairline type="info" @click="_c_risk(detailList.report_history_id)" size="small" v-if="risk_item_num">企业风险</van-button>
        <van-button plain hairline type="info" @click="_c_risk(detailList.report_history_id)" size="small" v-else disabled>无企业风险</van-button>
      </div>
      <div class="content">
          <van-cell-group v-model="detailList">
            <van-field label="公司名称" :value="detailList.enterprise_name" readonly />
            <van-field label="统一社会信用代码" :value="detailList.uuit_no" readonly />
            <van-field label="行政区" :value="detailList.county_name" readonly />
            <van-field label="街道" :value="detailList.subdistrict_name" readonly />
            <van-field label="注册地址" :value="detailList.rigister_address" readonly />
            <van-field label="注册资金" :value="detailList.rigister_fund" readonly />
            <van-field label="企业规模" :value="detailList.enterprist_scale" readonly />
            <van-field label="经营范围" :value="detailList.business_scope" readonly />
            <van-field label="法定代表人" :value="detailList.legal_person" readonly />
            <van-field label="法人类型" :value="detailList.legal_person_type" readonly />
            <van-field label="法人职务" :value="detailList.legal_person_post" readonly />
            <van-field label="法人固定电话" :value="detailList.legal_person_tel" readonly />
            <van-field label="法人移动电话" :value="detailList.legal_person_cellphone" readonly />
            <van-field label="企业类型" :value="detailList.zj_econ_kind" readonly />
            <van-field label="登记机关" :value="detailList.registration_org" readonly />
            <van-field label="登记状态" :value="detailList.corp_status" readonly />
            <van-field label="登记时间" :value="detailList.register_time" readonly />
            <van-field label="国民经济门类" :value="detailList.indus_type_class" readonly />
            <van-field label="国民经济大类" :value="detailList.indus_type_lagre" readonly />
            <van-field label="国民经济中类" :value="detailList.indus_type_middle" readonly />
            <van-field label="国民经济小类" :value="detailList.indus_type_small" readonly />
            <van-field label="是否规上企业" :value="detailList.above_designated?'是':'否'" readonly />
            <van-field label="是否上报风险报告" :value="detailList.risk_report?'是':'否'" readonly />
            <van-field label="机构编码" :value="detailList.org_code" readonly />
            <van-field label="法定代表人身份证号" :value="detailList.frzjh" readonly />
          </van-cell-group>
      </div>
</div>
  
</template>

<script>
import {companyDetail} from '@/api/company.js'
export default {
  data(){
    return{
        detailList:{},
        companyId:this.$route.params.companyId,
        risk_item_num:""
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
        companyDetail({
          uuit_no:this.companyId
        }).then((res)=>{
          if(res.error_code == 0){
            this.detailList = res.data;
            this.risk_item_num = res.data.report.risk_item_num
          }else{
            this.$message.error(res.message)
          }
        })
      },
      //点击事件
      _c_report(reportId,companyId){
        this.$router.push({
          path:`/riskReport/${reportId}/${companyId}`
        })
      },
      _c_risk(reportId){
        this.$router.push({
          path:`/riskList/${reportId}`
        })
      },
      _c_return() {
        this.$router.push('/search')
      }
  }
}
</script>

<style lang="less">
  #companyDetail{
      width: 100%;
      height: 100%;
      .mintitle{
        margin: 14% 0 -10%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .content{
        width: 100%;
        margin-top: 12%;
      }
  }
</style>