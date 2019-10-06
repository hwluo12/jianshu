/*
 * @Description: topic
 * @Author: hwluo
 * @Date: 2019-10-04 20:10:20
 * @LastEditTime: 2019-10-06 11:07:23
 * @LastEditors: hwluo
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';

class Topic extends PureComponent {
    render() {
        const list = this.props.list;
        return (
            <TopicWrapper>
                {
                    list.map((item) => (
                        <TopicItem key={item.get('id')}>
                            <img 
                                className='topic-pic'
                                src={item.get('imgUrl')}
                                alt={item.get('title')}
                            />
                            {item.get('title')}
                        </TopicItem>
                    ))
                }
            </TopicWrapper>
        )
    }
}

const mapState = (state) => {
    return {
        list: state.getIn(['home', 'topicList'])
    }
};

export default connect(mapState, null)(Topic);