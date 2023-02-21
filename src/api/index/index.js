import axios from '@/utils/http/axios'

export default{
  // 获取轮播图
  getBannerInfo(){
    return axios({
      url: '/breze/portal/banner/select',
      method: 'get'
    })
  },
  // 获取导航信息
  getNavbarList(param){
    return axios({
      url: '/breze/portal/navbar/select',
      method: 'get',
      params: param
    })
  },
  getContentList(param){
    return axios({
      url: '/breze/portal/mainContent/findAllData',
      method: 'get',
      params: param
    })
  }
}