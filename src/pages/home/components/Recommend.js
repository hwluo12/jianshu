/*
 * @Description: recommend
 * @Author: hwluo
 * @Date: 2019-10-04 20:10:12
 * @LastEditTime: 2019-10-05 19:10:57
 * @LastEditors: hwluo
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../style'

class Recommend extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <RecommendWrapper>
                {
                    list.map((item) => (
                        <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')} />
                    ))
                }
            </RecommendWrapper>
        )
    }
}

const mapState = (state) => {
    return {
        list: state.getIn(['home', 'recommendList'])
    }
}

export default connect(mapState, null)(Recommend);