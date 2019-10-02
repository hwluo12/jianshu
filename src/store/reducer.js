/*
 * @Description: reducer
 * @Author: hwluo
 * @Date: 2019-10-02 13:33:21
 * @LastEditTime: 2019-10-02 15:32:10
 * @LastEditors: hwluo
 */
import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';

const reducer = combineReducers({
    header: headerReducer
});

export default reducer;