import request from "@/core/http/http"
export const GET_THEALISRT_DATA = "ju/get_ju_THEALISRT";
const action = (val, type) => {
    return {
        type,  //GET_INDEX_CITY = "index/get_index_city";
        val   //res
    }
}
// 剧院的接口
// https://api.juooo.com/theatre/index/getTheatreList?page=1&version=6.0.3&referer=2;
export const loadTheaterListData = (dispatch,data) => {
    return () => {
        request({
            method: "get",
            url: "theatre/index/getTheatreList",
            params: {
                page: data,
                version: "6.0.3",
                referer: "2"
            }
        }).then((res) => {
            dispatch(action(res, GET_THEALISRT_DATA))
        })
    }
}

