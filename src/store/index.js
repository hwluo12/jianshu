/*
 * @Description: createstore
 * @Author: hwluo
 * @Date: 2019-10-02 13:32:03
 * @LastEditTime: 2019-10-02 14:52:09
 * @LastEditors: hwluo
 */
import { createStore, compose } from 'redux';
import reducer  from './reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers());

export default store;