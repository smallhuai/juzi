// https://m.juooo.com/Search/getShowCategory?version=6.0.3&referer=2
import axios from 'axios';
export const getCategoryData = (callback) => {
    axios({
        method: "get",
        url: "/ip/Search/getShowCategory",
        params: {
            version: "6.0.3",
            referer: "2"
        }
    }).then(callback)
}
// 演出的接口 https://m.juooo.com/Search/getShowList?category=35&city_id=0&page=1&keywords=&version=6.0.3&referer=2
export const getShowListData=(data,callback)=>{
    axios({
        method:"get",
        url:"/ip/Search/getShowList",
        params:{
            category:data.category,
            city_id:data.city_id,
            page:"1",
            keywords:"",
            version:"6.0.3",
            referer:"2"
        }
    }).then(callback)
}
// 调取城市部分演出城市的接口  https://m.juooo.com/Search/getCity?version=6.0.3&referer=2
export const getCityData=(callback)=>{
    axios({
        method:"get",
        url:"/ip/Search/getCity?",
       params:{
        version:"6.0.3",
        referer:"2"
       }
    }).then(callback)
}
