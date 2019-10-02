/*
 * @Description: 
 * @Author: hwluo
 * @Date: 2019-10-02 14:41:00
 * @LastEditTime: 2019-10-02 15:06:07
 * @LastEditors: hwluo
 */
import * as constants from './constants';

const defaultState = {
    focused: false
}

export default (state = defaultState, action) => {
    if(action.type === constants.SEARCH_FOCUS) {
        return {
            focused: true
        }
    }
    if(action.type === constants.SEARCH_BLUR) {
        return {
            focused: false
        }
    }
    return state;
}