import { fromJS } from "immutable"
import {
    GET_INDEX_CITY,//城市编码
    GET_INDEX_DATA,//首页数据编码
    GET_HOT_RECOMEND,//热点推荐编码
    GET_TOUR_RECOMMED,//巡回演唱编码
    GET_FLOORSHOW_DATA,//底部剧种展示编码
    GET_HOTTHEATER_DATA//获取剧院的编码
} from "./actionCreator"
import { from } from "rxjs";
const defaultStore = fromJS({
    cityList: [],
    indexTopData: {},
    hotRecommendData: [],
    tourRecommendData: [],
    floorShowData:[],
    hotTheaterData:[],
    currentCity: {
        city_id: 0,
        abbreviation: "",
        name: "全国"
    },
    num: 0
})
export default (state = defaultStore, action) => {
    // 获取城市的数据
    if (action.type === GET_INDEX_CITY) {
        let res = action.val.data.data;
        let rel = [];
        for (let n in res) {
            rel.push(res[n]);
        }
        return state.update("cityList", val => val = fromJS(rel)).update("currentCity", x => x = fromJS(action.val.currentCity));  //Map=Map
    }
    // 获取首页的数据  
    else if (action.type === GET_INDEX_DATA) {
        let indexres = action.val.data.data;
        return state.update("indexTopData", val => val = fromJS(indexres))
    } 
    // 获取热点推荐数据
    else if (action.type === GET_HOT_RECOMEND) {
        return state.update("hotRecommendData", val => val = fromJS(action.val.data.data));
    } 
    // 获取巡回演唱的数据
    else if (action.type === GET_TOUR_RECOMMED) {
        return state.update("tourRecommendData", val => val = fromJS(action.val.data.data));
    }
    // 获取底部剧种展示部分
    else if(action.type===GET_FLOORSHOW_DATA){
        return state.update("floorShowData",val=>val=fromJS(action.val));
    }
    //获取剧院播放的相关数据
    else if(action.type===GET_HOTTHEATER_DATA){
        return state.update("hotTheaterData",(val)=>val=fromJS(action.val));
    }
    return state;
}