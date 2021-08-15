//加点共用的函数这里
var globalCityOrder = [
  '海安市',
  '如皋市',
  '如东县',
  '海门区',
  '启东市',
  '通州区',
  '崇川区',
  '开发区',
  '苏锡通',
  '通州湾',
]
var globalCityIndex = {}

for (let i = 0; i < globalCityOrder.length; i++) {
  globalCityIndex[globalCityOrder[i]] = i + 1
}

var orderCityData = function(citys, datas) {
  let ret = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  for (let i = 0; i < citys.length; i++) {
    let j = globalCityIndex[citys[i]]
    if (!j) {
      console.error('服务端传入的城市数据不对', citys[i])
      continue
    }

    ret[j - 1] = datas[i]
  }

  return ret
}

// let xx_client_id = '39d81a3e2ffe43f7b5e7cfd65df50899' //用户id
// let xx_client_secret = 'ecb1d20c7def460e8f13b4939ec69a27' //用户密码
let xx_client_id = localStorage.getItem('client_id_1') //用户id
let xx_client_secret = localStorage.getItem('client_secret_1') //用户密码
// let xx_client_id = '27f2ab4b814441b2b0ed3b8c83f44b70' //用户id
// let xx_client_secret = '6b0458cb4c954aacbfc6dfe6086e6b4c' //用户密码
//let xx_egis_base_url = 'https://dev.codenai.com:3399/egis/'
// let xx_egis_base_url = 'https://zhxx.ntyjgl.cn:7777/egis2/'
let xx_egis_base_url = 'http://120.52.31.31:590/'
//开发测试环境,不路由
var egisConfigDev = {
  urlWMTS: xx_egis_base_url + 'service/api/egis/base/v1/wmts', //wmts服务地址
  urlService: xx_egis_base_url + 'service/api/egis/base/v1', //服务地址
  client_id: xx_client_id, //用户id
  client_secret: xx_client_secret, //用户密码
  tokenUrl: xx_egis_base_url + 'oauth/token', //授权服务地址
  ntWMTS: 'https://zhxx.ntyjgl.cn:7777/ntwmts/wmtsservice/nt_raster', //wmts服务地址
  coopServer: 'http://dev.codenai.com:7000', //协同会商API
  coopWSServer: 'ws://dev.codenai.com:7000', //协同会商websocket
  //coopServer: 'https://t.codenai.com:1444', //协同会商API
  //coopWSServer: 'wss://t.codenai.com:1444', //协同会商websocket
  emergencyServer: 'http://dev.codenai.com:4455', //
  dutyServer: 'http://dev.codenai.com:7777', //值守
  teamServer: 'http://dev.codenai.com:5566',
  testURL: 'https://dev.codenai.com:3344', //loginServer
  videoURL: 'http://dev.codenai.com:7892', //视频列表
  fileURL: 'http://dev.codenai.com:7778',
  fileShowURL: 'http://dev.codenai.com:7778',
  previewServer: 'http://dev.codenai.com:7778/file/preview?path=',
  //  xlServer: 'http://192.168.1.100:8030/video',
  xlServer: 'http://192.168.1.110:8050',
  xlTokenServer: 'http://ntyj.codenai.com:6356',
  MobileServer: 'https://dev.codenai.com:3344/autoroutenoauth/xxsb/',
  ReturnPosition: 'https://dev.codenai.com:3344/autoroutenoauth/zbzh',
  openfileUpload: 'https://dev.codenai.com:3344/autoroutenoauth/openfile',
  weatherUrl:
    'https://dev.codenai.com:3344/autoroutenoauth/weather/ntapi/mini/miniIndex/getMiniIndexForView',
  modelServer: 'http://dev.codenai.com:4455/api/ntsecond/3d/',
}

//开发环境2
var egisConfigDev2 = {
  urlWMTS: xx_egis_base_url + 'service/api/egis/base/v1/wmts', //wmts服务地址
  urlService: xx_egis_base_url + 'service/api/egis/base/v1', //服务地址
  client_id: xx_client_id, //用户id
  client_secret: xx_client_secret, //用户密码
  tokenUrl: xx_egis_base_url + 'oauth/token', //授权服务地址
  ntWMTS: 'https://zhxx.ntyjgl.cn:7777/ntwmts/wmtsservice/nt_raster', //wmts服务地址
  coopServer: 'https://dev.codenai.com:3344/xths', //协同会商API
  coopWSServer: 'wss://dev.codenai.com:3344/xths', //协同会商websocket
  emergencyServer: 'https://dev.codenai.com:3344/ntyj', //
  dutyServer: 'https://dev.codenai.com:3344/yjzs', //值守
  teamServer: 'https://dev.codenai.com:3344/emergencyteam',
  testURL: 'https://dev.codenai.com:3344', //loginServer
  videoURL: 'http://dev.codenai.com:7892', //视频列表
  fileURL: 'https://dev.codenai.com:3344/fileserver',
  fileShowURL: 'http://dev.codenai.com:7778',
  previewServer: 'http://dev.codenai.com:7778/file/preview?path=',
  // previewServer: 'https://dev.codenai.com:3344/autoroute/preview/onlinePreview?url=',
  xlServer: 'http://192.168.1.100:8030/video',
  xlTokenServer: 'http://ntyj.codenai.com:6356',
  MobileServer: 'https://dev.codenai.com:3344/autoroutenoauth/xxsb/',
  ReturnPosition: 'https://dev.codenai.com:3344/autoroutenoauth/zbzh',
  openfileUpload: 'https://dev.codenai.com:3344/autoroutenoauth/openfile',
  weatherUrl:
    'https://dev.codenai.com:3344/autoroutenoauth/weather/ntapi/mini/miniIndex/getMiniIndexForView',
  modelServer: 'http://dev.codenai.com:4455/api/ntsecond/3d/',
}

var egisConfigDev3 = {
  urlWMTS: xx_egis_base_url + 'service/api/egis/base/v1/wmts', //wmts服务地址
  urlService: xx_egis_base_url + 'service/api/egis/base/v1', //服务地址
  client_id: xx_client_id, //用户id
  client_secret: xx_client_secret, //用户密码
  tokenUrl: xx_egis_base_url + 'oauth/token', //授权服务地址
  ntWMTS: 'https://dev.codenai.com:3399/ntwmts/wmtsservice/nt_raster', //wmts服务地址
  coopServer: 'https://dev.codenai.com:3399/xths', //协同会商API
  coopWSServer: 'wss://dev.codenai.com:3399/xths', //协同会商websocket
  emergencyServer: 'https://dev.codenai.com:3399/ntyj', //
  dutyServer: 'https://dev.codenai.com:3399/yjzs', //值守
  teamServer: 'https://dev.codenai.com:3399/emergencyteam',
  testURL: 'https://dev.codenai.com:3399', //loginServer
  videoURL: 'http://dev.codenai.com:7892', //视频列表
  fileURL: 'https://dev.codenai.com:3399/fileserver',
  fileShowURL: 'http://dev.codenai.com:7778',
  previewServer: 'http://dev.codenai.com:7778/file/preview?path=',
  // previewServer: 'https://dev.codenai.com:3399/autoroute/preview/onlinePreview?url=',
  xlServer: 'http://192.168.1.100:8030/video',
  xlTokenServer: 'http://ntyj.codenai.com:6356',
  MobileServer: 'https://dev.codenai.com:3399/autoroutenoauth/xxsb/',
  ReturnPosition: 'https://dev.codenai.com:3399/autoroutenoauth/zbzh',
  openfileUpload: 'https://dev.codenai.com:3399/autoroutenoauth/openfile',
  weatherUrl:
    'https://dev.codenai.com:3399/autoroutenoauth/weather/ntapi/mini/miniIndex/getMiniIndexForView',
  bigdata: 'https://dev.codenai.com:3399/autoroute/bigdata',
  modelServer: 'http://dev.codenai.com:4455/api/ntsecond/3d/',
}
//内网环境
var egisConfigProd = {
  urlWMTS: xx_egis_base_url + 'service/api/egis/base/v1/wmts', //wmts服务地址
  urlService: xx_egis_base_url + 'service/api/egis/base/v1', //服务地址
  client_id: xx_client_id, //用户id
  client_secret: xx_client_secret, //用户密码
  tokenUrl: xx_egis_base_url + 'oauth/token', //授权服务地址
  ntWMTS: 'https://zhxx.ntyjgl.cn:7777/ntwmts/wmtsservice/nt_raster', //wmts服务地址
  coopServer: 'https://zhxx.codenai.com:7777/xths', //协同会商API
  coopWSServer: 'wss://zhxx.codenai.com:7777/xths', //协同会商websocket
  emergencyServer: 'https://zhxx.codenai.com:7777/ntyj', //
  dutyServer: 'https://zhxx.codenai.com:7777/yjzs', //值守
  teamServer: 'https://zhxx.codenai.com:7777/emergencyteam', //队伍
  testURL: 'https://zhxx.codenai.com:7777', //loginServer
  videoURL: 'http://2.82.74.204:7892', //视频列表
  fileURL: 'https://zhxx.codenai.com:7777/fileserver',
  fileShowURL: 'http://2.82.74.204:7778',
  previewServer: 'https://zhxx.ntyjgl.cn:7777/autoroute/preview/onlinePreview?url=',
  xlServer: 'http://',
  MobileServer: 'https://zhxx.ntyjgl.cn:7777/autoroutenoauth/xxsb/',
  ReturnPosition: 'https://zhxx.ntyjgl.cn:7777/autoroutenoauth/zbzh',
  openfileUpload: 'https://zhxx.ntyjgl.cn:7777/autoroutenoauth/openfile',
  weatherUrl: 'https://zhxx.ntyjgl.cn:7777/ntweather/ntapi/mini/miniIndex/getMiniIndexForView',
  modelServer: 'http://dev.codenai.com:4455/api/ntsecond/3d/',
}

var egisConfigProd2 = {
  urlWMTS: xx_egis_base_url + 'service/api/egis/base/v1/wmts', //wmts服务地址
  urlService: xx_egis_base_url + 'service/api/egis/base/v1', //服务地址
  client_id: xx_client_id, //用户id
  client_secret: xx_client_secret, //用户密码
  tokenUrl: xx_egis_base_url + 'oauth/token', //授权服务地址
  ntWMTS: 'https://zhxx.ntyjgl.cn:7777/ntwmts/wmtsservice/nt_raster', //wmts服务地址
  coopServer: 'https://zhxx.ntyjgl.cn:7777/xths', //协同会商API
  coopWSServer: 'wss://zhxx.ntyjgl.cn:7777/xths', //协同会商websocket
  emergencyServer: 'https://zhxx.ntyjgl.cn:7777/ntyj', //
  dutyServer: 'https://zhxx.ntyjgl.cn:7777/yjzs', //值守
  teamServer: 'https://zhxx.ntyjgl.cn:7777/emergencyteam', //队伍
  testURL: 'https://zhxx.ntyjgl.cn:7777', //loginServer
  videoURL: 'http://2.82.74.204:7892', //视频列表
  fileURL: 'https://zhxx.ntyjgl.cn:7777/fileserver',
  fileShowURL: 'http://2.82.74.204:7778',
  previewServer: 'https://zhxx.ntyjgl.cn:7777/fileserver/file/preview?path=',
  // previewServer: 'https://zhxx.ntyjgl.cn:7777/autoroute/preview/onlinePreview?url=',
  xlServer: 'https://zhxx.ntyjgl.cn:7777/video',
  xxsbServer: 'https://zhxx.ntyjgl.cn:7777/xxsb',
  zbzhServer: 'https://zhxx.ntyjgl.cn:7777/zbzh',
  xlTokenServer: 'https://zhxx.ntyjgl.cn:7777/autoroute/secret',
  MobileServer: 'https://zhxx.ntyjgl.cn:7777/autoroutenoauth/xxsb/',
  ReturnPosition: 'https://zhxx.ntyjgl.cn:7777/autoroutenoauth/zbzh',
  uploadFileServer: 'http://zhxx.ntyjgl.cn:7777/autoroutenoauth/openfile/',
  modelServer: 'http://dev.codenai.com:4455/api/ntsecond/3d/',
}

//通州湾演示环境
var egisConfigDevTZW = {
  urlWMTS: xx_egis_base_url + 'service/api/egis/base/v1/wmts', //wmts服务地址
  urlService: xx_egis_base_url + 'service/api/egis/base/v1', //服务地址
  client_id: xx_client_id, //用户id
  client_secret: xx_client_secret, //用户密码
  tokenUrl: xx_egis_base_url + 'oauth/token', //授权服务地址
  ntWMTS: 'https://zhxx.ntyjgl.cn:7777/ntwmts/wmtsservice/nt_raster', //wmts服务地址
  coopServer: 'https://ntyj.codenai.com:3344/xths', //协同会商API
  coopWSServer: 'wss://ntyj.codenai.com:3344/xths', //协同会商websocket
  emergencyServer: 'https://ntyj.codenai.com:3344/ntyj', //
  dutyServer: 'https://ntyj.codenai.com:3344/yjzs', //值守
  teamServer: 'https://ntyj.codenai.com:3344/emergencyteam', //队伍
  testURL: 'https://ntyj.codenai.com:3344', //loginServer
  videoURL: 'http://2.82.74.204:7892', //视频列表
}
var egisConfig = egisConfigDev
