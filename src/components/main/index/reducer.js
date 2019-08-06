import { fromJS } from "immutable"
import { GET_INDEX_CITY, GET_INDEX_DATA, GET_HOT_RECOMEND } from "./actionCreator"
const defaultStore = fromJS({
    cityList: [],
    indexTopData: {},
    hotRecommendData: [],
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
    } else if (action.type === GET_HOT_RECOMEND) {
        return state.update("hotRecommendData", val => val = fromJS(action.val.data.data));
    }
    return state;
}