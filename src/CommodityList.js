import React, {Component} from 'react';
import './CommodityList.css';
import {getRecycleCommodity} from './mock/mock-api';
import BusinessCard from './component/BusinessCard';
import CommodityButton from './component/CommodityButton';
import LimitedInfiniteScroll from 'react-limited-infinite-scroll';
import FloatingWindow from './component/FloatingWindow';

/**
 * 商品列表页面
 */
class CommodityList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNo: 1,             // 当前页
            pageSize: 10,          // 页大小
            hasNextPage: false,    // 是否还有下一页
            list: [],              // 订单列表
        };
        this.loadNextPage = this.loadNextPage.bind(this);
    }

    /**
     * 初始值
     */
    componentWillMount() {
        this.loadNextPage();
    }

    /**
     * 构建商品列表
     *
     * @returns {any[]}
     */
    commodityList = () => {
        return this.state.list.map((item, index) => {
            return (
                <CommodityButton
                    key={index}
                    commodityNo={item.commodityNo}
                    imgUrl={item.commodityPicture}
                    name={item.commodityName}
                    price={item.expectSellPrice}
                    remark={item.remark}/>
            );
        });
    };

    /**
     * 分页加载列表
     */
    loadNextPage = () => {
        getRecycleCommodity(this.state.pageNo)
            .then(res => {
                this.setState({
                    pageNo: this.state.pageNo + 1,
                    hasNextPage: res.data.hasNextPage,
                    list: this.state.list.concat(res.data.list)
                });
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        return (
            <div className="App">
                {/*商品列表头部卡片*/}
                <BusinessCard/>
                {
                    // 商品列表设置
                    <LimitedInfiniteScroll
                        limit={Infinity}
                        autoLoad={false}
                        hasMore={this.state.hasNextPage}
                        spinLoader={<div className="loader">加载中...</div>}
                        mannualLoader={<div className="loader">加载更多</div>}
                        noMore={<div className="loader">没有更多商品啦~</div>}
                        loadNext={this.loadNextPage}>
                        {this.commodityList()}
                    </LimitedInfiniteScroll>
                }
                {/*浮动窗口*/}
                <FloatingWindow/>
            </div>
        );
    }
}

export default CommodityList;
