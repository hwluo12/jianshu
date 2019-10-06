/*
 * @Description: topic
 * @Author: hwluo
 * @Date: 2019-10-04 20:10:20
 * @LastEditTime: 2019-10-06 11:59:59
 * @LastEditors: hwluo
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ListItem, ListInfo, LoadMore } from '../style';
import { actionCreators } from '../store';

class Topic extends PureComponent {
    render() {
        const { list, page, getMoreList } = this.props;
        return (
            <div>
                {
                    list.map((item) => (
                        <Link key={item.get('id')} to="/detail">
                            <ListItem>
                                <img 
                                    className='pic'
                                    src={item.get('imgUrl')}
                                    alt={item.get('title')}
                                />
                                <ListInfo>
                                    <h3 className="title">{item.get('title')}</h3>
                                    <p className="desc">{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    ))
                }
                <LoadMore onClick={() => getMoreList(page)}>加载更多</LoadMore>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        list: state.getIn(['home', 'articleList']),
        page: state.getIn(['home', 'articlePage'])
    }
};

const mapDispatch = (dispatch) => ({
    getMoreList(page) {
        dispatch(actionCreators.getMoreList(page));
    }
})

export default connect(mapState, mapDispatch)(Topic);