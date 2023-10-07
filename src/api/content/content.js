import axios from '@/utils/http/axios'

export default{
  // 获取轮播图
  getContentById(id){
    return axios({
      url: '/breze/portal/detailContent/get_content_by_id/'+id,
      method: 'get'
    })
  },
}