/*
 * @Description: 
 * @Author: hwluo
 * @Date: 2019-10-02 14:41:00
 * @LastEditTime: 2019-10-04 16:32:45
 * @LastEditors: hwluo
 */
import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    list: []
});

export default (state = defaultState, action) => {
    if(action.type === constants.SEARCH_FOCUS) {
        // immutable对象的set方法，会结合之前immutable对象的值
        // 和设置的值，返回一个全新的对象
        return state.set('focused', true);
    }
    if(action.type === constants.SEARCH_BLUR) {
        return state.set('focused', false);
    }
    if(action.type === constants.CHANGE_LIST) {
        return state.set('list', action.data);
    }
    return state;
}