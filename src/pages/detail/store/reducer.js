/*
 * @Description: 
 * @Author: hwluo
 * @Date: 2019-10-02 14:41:00
 * @LastEditTime: 2019-10-06 13:18:32
 * @LastEditors: hwluo
 */
import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    title: '',
    content: ''
}); 

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.GET_DETAIL:
            return state.merge({
                title: action.title,
                content: action.content
            })
        default:
            return state;
    }
}