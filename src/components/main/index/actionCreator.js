import request from "@/core/http/http"
export const GET_INDEX_CITY = "index/get_index_city";
export const GET_INDEX_DATA = "index/get_index_data";
export const GET_HOT_RECOMEND = "index/get_index_RECOMMEND";
export const GET_TOUR_RECOMMED = "index/get_index_TOUR";
export const GET_FLOORSHOW_DATA = "index/get_index_FLOORSHOW";
export const GET_HOTTHEATER_DATA = "index/get_index_HOTTHEATER";
const action = (val, type) => {
    return {
        type,  //GET_INDEX_CITY = "index/get_index_city";
        val   //res
    }
}
//获取城市列表数据
export const loadCityDataAsync = (dispatch, currentCity) => {
    return () => {
        request({
            method: "get",
            url: "/city/city/getSortedCityList?version=6.0.1&referer=1"
        }).then((res) => {
            res.currentCity = currentCity
            dispatch(action(res, GET_INDEX_CITY));
        })
    }
}
// 调用首页的接口
// https://api.juooo.com/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.0.1&referer=2
export const loadIndexData = (dispatch, currentCity) => {
    // 获取首页数据
    return () => {
        request({
            method: "get",
            url: "/home/index/getClassifyHome",
            params: {
                city_id: currentCity.city_id,
                abbreviation: currentCity.abbreviation,
                version: "6.0.1",
                referer: "1"
            }
        }).then((res) => {
            dispatch(action(res, GET_INDEX_DATA));
        })
    }
}
// 热门演出的接口
// https://api.juooo.com/home/index/getHotsRecommendList?city_id=0&version=6.0.3&referer=2;
export const loadRecommendDataAsync = (dispatch, currentCity) => {
    return () => {
        request({
            method: "get",
            url: "home/index/getHotsRecommendList",
            params: {
                city_id: currentCity.city_id,
                version: "6.0.3",
                referer: "2"
            }
        }).then((res) => {
            dispatch(action(res, GET_HOT_RECOMEND))
        })
    }
}
// 循环演出的接口数据 https://api.juooo.com/home/index/getTourRecommendList?city_id=0&version=6.0.3&referer=2
export const loadTourRecommendDataAsync = (dispatch, currentCity) => {
    return () => {
        request({
            method: "get",
            url: "home/index/getTourRecommendList",
            params: {
                city_id: currentCity.city_id,
                version: "6.0.3",
                referer: "2"
            }
        }).then((res) => {
            dispatch(action(res, GET_TOUR_RECOMMED))
        })
    }
}
//底部剧种展示的接口 FLOORSHOW https://api.juooo.com/home/index/getFloorShow?city_id=0&version=6.0.3&referer=2
export const loadFloorShowDataAsync = (dispatch, currentCity) => {
    return () => {
        request({
            method: "get",
            url: "home/index/getFloorShow",
            params: {
                city_id: currentCity.city_id,
                version: "6.0.3",
                referer: "2"
            }
        }).then((res) => {
            dispatch(action(res.data.data, GET_FLOORSHOW_DATA))
        })
    }
}
//为你推荐接口 https://api.juooo.com/home/index/getRecommendShow?cityAdd=&page=1&version=6.0.3&referer=2;


// 南山体育中心 https://api.juooo.com/home/index/getHotTheatre?version=6.0.3&referer=2
export const loadHotTheaterData = (dispatch) => {
    return () => {
        request({
            method: "get",
            url: "home/index/getHotTheatre",
            params: {
                version: "6.0.3",
                referer: "2"
            }
        }).then((res) => {
            dispatch(action(res.data.data.theatre_list, GET_HOTTHEATER_DATA))
        })
    }
}