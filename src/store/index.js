/*
 * @Description: createstore
 * @Author: hwluo
 * @Date: 2019-10-02 13:32:03
 * @LastEditTime: 2019-10-04 15:59:19
 * @LastEditors: hwluo
 */
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer  from './reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;