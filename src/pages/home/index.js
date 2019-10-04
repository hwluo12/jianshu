/*
 * @Description: home
 * @Author: hwluo
 * @Date: 2019-10-04 19:52:58
 * @LastEditTime: 2019-10-04 20:17:02
 * @LastEditors: hwluo
 */
import React, { Component } from 'react';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import Topic from './components/Topic';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;