/*
 * @Description: actionCreators.js
 * @Author: hwluo
 * @Date: 2019-10-02 14:54:19
 * @LastEditTime: 2019-10-02 15:05:15
 * @LastEditors: hwluo
 */
import * as constants from './constants';
export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
});