import request from '@/plugin/axios'
import api from './api'
//统计
export function statistics(params) {
  return request({
    url: api + '/province/statistics',
    method: 'get',
    params
  })
}
//企业名称模糊搜索
export function companyQuery(params) {
  return request({
    url: api + '/province/search',
    method: 'get',
    params
  })
}
//企业详情
export function companyDetail(params) {
    return request({
      url: api + '/province/getinfobyenterpriseid',
      method: 'get',
      params
    })
  }
//企业风险报告
export function riskReport(params) {
  return request({
    url: api + '/province/getreportbyid',
    method: 'get',
    params
  })
}
//企业风险列表
export function riskList(params) {
  return request({
    url: api + '/province/getriskitem',
    method: 'get',
    params
  })
}