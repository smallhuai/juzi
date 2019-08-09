import { fromJS } from "immutable"
import { GET_THEALISRT_DATA } from "./actionCreator";
const defaultStore = fromJS({
    theartList: ""
})
export default (state = defaultStore, action) => {
    if (action.type === GET_THEALISRT_DATA) {
        // console.log(action.val);
        // console.log(state.theartList);
        return state.update("theartList", (val) => {
            if(!state.theartList){
                console.log(1)
                return val = action.val.data.data.theatre_list
            }else{
                console.log(2)
                return val = action.val.data.data.theatre_list.concat(state.theartList)
            }
        })
    }
    return state;
}