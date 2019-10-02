/*
 * @Description: header
 * @Author: hwluo
 * @Date: 2019-10-02 08:45:40
 * @LastEditTime: 2019-10-02 16:12:36
 * @LastEditors: hwluo
 */
import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { 
    HeaderWrapper, 
    Logo, 
    Nav, 
    NavItem, 
    SearchWrapper, 
    NavSearch, 
    Addition,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
    Button 
} from './style';

const getListArea = (show) => {
    if (show) {
        return (
            <SearchInfo>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch>
                        换一批
                    </SearchInfoSwitch>
                    <SearchInfoList>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                    </SearchInfoList>
                </SearchInfoTitle>
            </SearchInfo>
        )
    } else {
        return null;
    }
}

const Header = (props) => {
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
                        in={props.focused}
                        timeout={200}
                        classNames="slide" 
                    >
                        <NavSearch 
                            className={props.focused ? 'focused' : ''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        />
                    </CSSTransition>
                    <span 
                        className={props.focused ? 'focused iconfont' : 'iconfont'}                        
                    >&#xe624;</span>
                    {getListArea(props.focused)}
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

const mapStateToProps = (state) => {
    return {
        // focused: state.get('header').get('focused') // state.getIn(['header', 'focused'])
        focused: state.getIn(['header', 'focused'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header); 