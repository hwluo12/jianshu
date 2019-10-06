/*
 * @Description: 
 * @Author: hwluo
 * @Date: 2019-10-06 14:00:07
 * @LastEditTime: 2019-10-06 15:26:00
 * @LastEditors: hwluo
 */
import axios from "axios"
import * as constants from "./constants";

const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
});

export const login = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account='+account+'&password='+password)
            .then((res) => {
                const result = res.data.data;
                if(result) {
                    dispatch(changeLogin())
                }else{
                    alert('登陆失败')
                }
            })
    }
}

export const logout = () => ({
    type: constants.LOGOUT,
    value: false
})