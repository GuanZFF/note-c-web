import React, {Component} from 'react';
import {orderList} from './mock/mock-api';
import LimitedInfiniteScroll from 'react-limited-infinite-scroll';
import OrderButton from './component/OrderButton';
import './OrderList.css';

class OrderList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNo: 1,                  // 当前页
            pageSize: 10,               // 页大小
            hasNextPage: false,         // 是否还有下一页
            list: [],                   // 订单列表
        };
        // 绑定监听事件
        this.loadNextPage = this.loadNextPage.bind(this);
    }

    /**
     * 初始值
     */
    componentWillMount() {
        this.loadNextPage();
    }

    /**
     * 卡片详情、样式设置
     * @returns {any[]}
     */
    orderList = () => {
        return this.state.list.map((item, index) => {
            return (
                <OrderButton
                    key={index}
                    imgUrl={item.commodityPicture}
                    stateDesc={item.stateDesc}
                    state={item.state}>
                </OrderButton>
            );
        })
    };

    /**
     * 获取订单列表数据
     */
    loadNextPage = () => {
        let openId = "123";

        orderList(openId).then(res => {
            this.setState({
                pageNo: this.state.pageNo + 1,
                hasNextPage: res.data.hasNextPage,
                list: this.state.list.concat(res.data.list)
            });
        }).catch(err => {
            console.log(err);
        });
    };

    render() {
        return (
            <div className="OrderList">
                {
                    // 订单头信息
                    <div className="MyOrderList">
                        <h3 className="MyOrderListHeader">我的订单</h3>
                    </div>
                }
                {
                    // 订单列表
                    <LimitedInfiniteScroll
                        limit={Infinity}
                        autoLoad={false}
                        hasMore={this.state.hasNextPage}
                        spinLoader={<div className="loader">加载中...</div>}
                        mannualLoader={<div className="loader">加载更多</div>}
                        noMore={<div className="loader">亲！你现在还没有订单呢</div>}
                        loadNext={this.loadNextPage}>
                        {this.orderList()}
                    </LimitedInfiniteScroll>
                }
            </div>
        );
    }
}

export default OrderList;