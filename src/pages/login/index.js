/*
 * @Description: detail
 * @Author: hwluo
 * @Date: 2019-10-04 19:56:04
 * @LastEditTime: 2019-10-06 15:28:02
 * @LastEditors: hwluo
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actionCreators } from './store'
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style';

class Login extends PureComponent {
    render() {
        const { loginState } = this.props;
        if(!loginState) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' ref={(input) => {this.account = input}} />
                        <Input placeholder='密码' type="password" ref={(input) => {this.password = input}} />
                        <Button onClick={() => this.props.login(this.account, this.password)}>登陆</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to='/' />
        }
    }
}

const mapState = (state) => ({
    loginState: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch) => ({
    login(accountElem, passwordElem) {
        dispatch(actionCreators.login(accountElem.value, passwordElem.value))
    }
})

export default connect(mapState, mapDispatch)(Login);