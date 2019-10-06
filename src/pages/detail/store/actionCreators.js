/*
 * @Description: 
 * @Author: hwluo
 * @Date: 2019-10-06 12:24:19
 * @LastEditTime: 2019-10-06 13:33:46
 * @LastEditors: hwluo
 */
import axios from 'axios';
import * as constants from './constants';

const changeDetail = (title, content) => ({
    type: constants.GET_DETAIL,
    title,
    content
});

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id='+id)
            .then((result) => {
                const res = result.data.data;
                dispatch(changeDetail(res.title, res.content));
            })
    }
}