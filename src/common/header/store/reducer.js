/*
 * @Description: 
 * @Author: hwluo
 * @Date: 2019-10-02 14:41:00
 * @LastEditTime: 2019-10-04 16:52:02
 * @LastEditors: hwluo
 */
import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    list: []
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focused', true);
        case constants.SEARCH_BLUR:
            return state.set('focused', false);
        case constants.CHANGE_LIST:
            return state.set('list', action.data);
        default:
            return state;
    }
}