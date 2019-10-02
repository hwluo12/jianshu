/*
 * @Description: reducer
 * @Author: hwluo
 * @Date: 2019-10-02 13:33:21
 * @LastEditTime: 2019-10-02 14:50:49
 * @LastEditors: hwluo
 */
import { combineReducers } from 'redux';
import { reducer as headerReducer } from '../common/header/store';

const reducer = combineReducers({
    header: headerReducer
});

export default reducer;