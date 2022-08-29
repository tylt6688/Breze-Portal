import axios from '@/utils/http/axios'

export default{
  // 获取轮播图
  getBannerInfo(){
    return axios({
      url: '/breze/portal/banner/select',
      method: 'get'
    })
  },
  // 分类数据获取
  getNotifyInfo(params){
    return axios({
      url: '/breze/portal/notify/select',
      method: 'get',
      params: params
    })
  },
  getNewsInfo(params){
    return axios({
      url: '/breze/portal/news/select',
      method: 'get',
      params: params
    })
  },
  getPresenceInfo(params){
    return axios({
      url: '/breze/portal/presence/select',
      method: 'get',
      params: params
    })
  },
  getThoughtInfo(params){
    return axios({
      url: '/breze/portal/thought/select',
      method: 'get',
      params: params
    })
  },

}