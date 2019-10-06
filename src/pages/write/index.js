/*
 * @Description: detail
 * @Author: hwluo
 * @Date: 2019-10-04 19:56:04
 * @LastEditTime: 2019-10-06 15:42:15
 * @LastEditors: hwluo
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Write extends PureComponent {
    render() {
        const { loginState } = this.props;
        if(loginState) {
            return <div>写文章页面</div>
        }else{
            return <Redirect to='/login' />
        }
 }
}

const mapState = (state) => ({
    loginState: state.getIn(['login', 'login'])
});

export default connect(mapState, null)(Write);