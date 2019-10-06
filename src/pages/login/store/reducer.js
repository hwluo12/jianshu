/*
 * @Description: 
 * @Author: hwluo
 * @Date: 2019-10-02 14:41:00
 * @LastEditTime: 2019-10-06 15:27:03
 * @LastEditors: hwluo
 */
import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    login: false
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_LOGIN:
            return state.set('login', action.value);
        case constants.LOGOUT:
            return state.set('login', action.value);
        default:
            return state;
    }
}