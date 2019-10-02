/*
 * @Description: header
 * @Author: hwluo
 * @Date: 2019-10-02 08:45:40
 * @LastEditTime: 2019-10-02 09:46:39
 * @LastEditors: hwluo
 */
import React, { Component } from 'react';
import styled from 'styled-components';
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
const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    padding: 0 20px;
    margin-left: 20px;
    margin-top: 9px;
    border: none;
    outline: none;
    border-radius: 19px;  
    font-size: 14px;
    background: #eee;
    &::placeholder {
        color: #999;
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
    render() {
        return (
            <HeaderWrapper>
                <Logo href="/" />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登陆</NavItem>
                    <NavItem className="right">Aa</NavItem>
                    <NavSearch />
                </Nav>
                <Addition>
                    <Button className="writing">写文章</Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

export default Header; 