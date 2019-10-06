/*
 * @Description: reducer
 * @Author: hwluo
 * @Date: 2019-10-02 13:33:21
 * @LastEditTime: 2019-10-05 09:15:02
 * @LastEditors: hwluo
 */
import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store'

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer
});

export default reducer;