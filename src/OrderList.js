import React, {Component} from 'react';
import {orderList, reverseOrderList} from './mock/api';
import LimitedInfiniteScroll from 'react-limited-infinite-scroll';
import OrderButton from './component/OrderButton';
import ReverseOrderButton from './component/ReverseOrderButton';
import './OrderList.css';
import {getCookie} from './utils/CookieUtil';
import constant from './constant/constant';

class OrderList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNo: 1,                                      // 当前页
            pageSize: 10,                                   // 页大小
            hasNextPage: false,                             // 是否还有下一页
            list: [],                                       // 订单列表
            reversePageNo: 1,                               // 当前页
            reversePageSize: 10,                            // 页大小
            reverseHasNextPage: false,                      // 是否还有下一页
            reverseList: [],                                // 反向订单列表
            orderListClassName: 'LeftOrderList',            // 订单列表class名称
            reverseOrderListClassName: '_RightOrderList',   // 反向订单列表
            orderTitle1: 'OrderTitle1',                     // 标题
            orderTitle2: '_OrderTitle2',                    // 标题
        };
        // 绑定监听事件
        this.loadNextPage = this.loadNextPage.bind(this);
    }

    /**
     * 初始值
     */
    componentWillMount() {
        this.loadNextPage();
        this.loadNextReversePage();
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
                    imgUrl={item.orderImg}
                    orderNo={item.orderNo}
                    orderTime={item.orderTime}
                    state={item.status}>
                </OrderButton>
            );
        })
    };

    /**
     * 反向卡片详情、样式设置
     * @returns {any[]}
     */
    reverseOrderList = () => {
        return this.state.reverseList.map((item, index) => {
            return (
                <ReverseOrderButton
                    key={index}
                    orderNo={item.orderNo}
                    imgUrl={item.orderImg}
                    phone={item.phone}
                    address={item.address}
                    startTime={item.startTime}
                    endTime={item.endTime}
                    state={item.status}>
                </ReverseOrderButton>
            );
        })
    };

    /**
     * 获取订单列表数据
     */
    loadNextPage = () => {
        let openId = getCookie('openId');

        if (!openId) {
            openId = constant.defaultOpenId;
        }

        orderList(openId, this.state.pageNo).then(res => {
            console.log(res);
            this.setState({
                pageNo: this.state.pageNo + 1,
                hasNextPage: res.data.hasNextPage,
                list: this.state.list.concat(res.data.list)
            });
        }).catch(err => {
            console.log(err);
        });
    };

    /**
     * 获取反向订单列表数据
     */
    loadNextReversePage = () => {
        let openId = getCookie('openId');

        if (!openId) {
            openId = constant.defaultOpenId;
        }

        reverseOrderList(openId, this.state.reversePageNo).then(res => {
            console.log(res);
            this.setState({
                reversePageNo: this.state.reversePageNo + 1,
                reverseHasNextPage: res.data.hasNextPage,
                reverseList: this.state.reverseList.concat(res.data.list)
            });
        }).catch(err => {
            console.log(err);
        });
    };

    handleLeftOrderTitle = () => {
        this.setState({
            orderListClassName: 'LeftOrderList',
            reverseOrderListClassName: '_RightOrderList',
            orderTitle1: 'OrderTitle1',
            orderTitle2: '_OrderTitle2'
        });
    };

    handleRightOrderTitle = () => {
        this.setState({
            orderListClassName: '_LeftOrderList',
            reverseOrderListClassName: 'RightOrderList',
            orderTitle1: '_OrderTitle1',
            orderTitle2: 'OrderTitle2'
        });
    };

    render() {
        return (
            <div className="OrderList">
                {
                    // 订单头信息
                    <div className="MyOrderList">
                        <h3 className="MyOrderListHeader">我的订单</h3>
                        <hr/>
                        <div className="OrderTitle">
                            <div className={this.state.orderTitle1} onClick={this.handleLeftOrderTitle}>
                                <p className="OrderTitleP">预约订单</p>
                            </div>
                            <div className={this.state.orderTitle2} onClick={this.handleRightOrderTitle}>
                                <p className="OrderTitleP">购买订单</p>
                            </div>
                        </div>
                    </div>
                }
                {
                    // 购买订单列表
                    <div className={this.state.orderListClassName}>
                        <LimitedInfiniteScroll
                            limit={Infinity}
                            autoLoad={false}
                            hasMore={this.state.hasNextPage}
                            spinLoader={<div className="loader">加载中...</div>}
                            mannualLoader={<div className="loader">加载更多</div>}
                            noMore={<div className="loaderNoMore">哼，我是有底线的！！！</div>}
                            loadNext={this.loadNextPage}>
                            {this.orderList()}
                        </LimitedInfiniteScroll>
                    </div>
                }
                {
                    // 预定订单列表
                    <div className={this.state.reverseOrderListClassName}>
                        <LimitedInfiniteScroll
                            limit={Infinity}
                            autoLoad={false}
                            hasMore={this.state.reverseHasNextPage}
                            spinLoader={<div className="loader">加载中...</div>}
                            mannualLoader={<div className="loader">加载更多</div>}
                            noMore={<div className="loaderNoMore">哼，我是有底线的！！！</div>}
                            loadNext={this.loadNextReversePage}>
                            {this.reverseOrderList()}
                        </LimitedInfiniteScroll>
                    </div>
                }
            </div>
        );
    }
}

export default OrderList;