import {
    RESTAURANT_LIST_SUCCESS,
    RESTAURANT_LIST_FAIL
} from '../constants/restaurantConstant'

export const restuarantReducer=(state,{restaurants:[],action})=>{
    switch(action.type){
        case RESTAURANT_LIST_SUCCESS:return {restaurants:action.payload}
        case RESTAURANT_LIST_FAIL: return {restaurants:action.error}
        default: return state
    }
}