/*
 * @Description: reducer
 * @Author: hwluo
 * @Date: 2019-10-02 13:33:21
 * @LastEditTime: 2019-10-06 12:32:07
 * @LastEditors: hwluo
 */
import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as detailReducer } from '../pages/detail/store'

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer
});

export default reducer;