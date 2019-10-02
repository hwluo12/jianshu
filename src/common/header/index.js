/*
 * @Description: header
 * @Author: hwluo
 * @Date: 2019-10-02 08:45:40
 * @LastEditTime: 2019-10-02 10:55:29
 * @LastEditors: hwluo
 */
import React, { Component } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import logoPic from '../../statics/logo.png';

const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;
const Logo = styled.a`
    position: absolute;
    left: 0;
    top: 0;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
`;
const Nav = styled.div`
    width: 960px;
    height: 100%;
    padding-right: 70px;
    box-sizing: border-box;
    margin: 0 auto;
`;
const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`;
const SearchWrapper = styled.div`
    float: left;
    position: relative;
    .slide-enter {
        transition: all 200ms ease-out;
    }
    .slide-enter-active {
        width: 220px;
    }
    .slide-exit {
        transition: all 200ms ease-out;
    }
    .slide-exit-active {
        width: 160px;
    }
    .iconfont {
        position: absolute;
        bottom: 5px;
        right: 5px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        font-weight: bold;
        &.focused {
            color: #fff;
            background: #777;
        }
    }
`;
const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    padding: 0 30px 0 20px;
    margin-left: 20px;
    margin-top: 9px;
    border: none;
    outline: none;
    border-radius: 19px;  
    font-size: 14px;
    background: #eee;
    color: #666666;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 220px;
    }
`;
const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;
const Button = styled.button`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px; 
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg {
        color: #ec6149;
        background: #fff;
    }
    &.writing {
        color: #fff;
        background: #ec6149;
    }
`;

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false
        };
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }

    handleInputFocus() {
        this.setState({
            focused: true
        });
    }

    handleInputBlur() {
        this.setState({
            focused: false
        });
    }

    render() {
        return (
            <HeaderWrapper>
                <Logo href="/" />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登陆</NavItem>
                    <NavItem className="right">
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.state.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch 
                                className={this.state.focused ? 'focused' : ''}
                                onFocus={this.handleInputFocus}
                                onBlur={this.handleInputBlur}
                            />
                        </CSSTransition>
                        <span 
                            className={this.state.focused ? 'focused iconfont' : 'iconfont'}                        
                        >&#xe624;</span>
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="writing">
                        <span className="iconfont">&#xe615;</span>
                        写文章
                    </Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

export default Header; 