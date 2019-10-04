/*
 * @Description: actionCreators.js
 * @Author: hwluo
 * @Date: 2019-10-02 14:54:19
 * @LastEditTime: 2019-10-04 16:37:44
 * @LastEditors: hwluo
 */
import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';
export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
});

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data)
});

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json')
            .then((res) => {
                const data = res.data;
                dispatch(changeList(data.data));
            })
            .catch((err) => {
                console.log(err)
            });
    }
}