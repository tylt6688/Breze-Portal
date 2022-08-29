import axios from "@/utils/http/axios";

export default {
    getNotifyInfo(id) {
        return axios({
            url: "/breze/portal/notify/selectbyid/"+id,
            method: 'get'
        })
    }
}