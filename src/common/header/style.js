/*
 * @Description: header style
 * @Author: hwluo
 * @Date: 2019-10-02 13:43:03
 * @LastEditTime: 2019-10-02 16:13:54
 * @LastEditors: hwluo
 */
import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.a`
    position: absolute;
    left: 0;
    top: 0;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
`;
export const Nav = styled.div`
    width: 960px;
    height: 100%;
    padding-right: 70px;
    box-sizing: border-box;
    margin: 0 auto;
`;
export const NavItem = styled.div`
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
export const SearchWrapper = styled.div`
    float: left;
    position: relative;
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
export const NavSearch = styled.input.attrs({
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
    &.slide-enter {
        transition: all 200ms ease-out;
    }
    &.slide-enter-active {
        width: 220px;
    }
    &.slide-exit {
        transition: all 200ms ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
`;
export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 270px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`;
export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;
export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
`;
export const SearchInfoList = styled.div`
    overflow: hidden;
    margin-top: 10px;
`;
export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    line-height: 20px;
    padding: 0 5px;
    margin-right: 10px;
    margin-bottom: 10px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
`;
export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;
export const Button = styled.button`
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