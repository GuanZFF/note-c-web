import React, {Component} from 'react';
import './CommodityList.css';
import {getRecycleCommodity, getRecycleCollector} from './mock/api';
import BusinessCard from './component/BusinessCard';
import CommodityButton from './component/CommodityButton';
import LimitedInfiniteScroll from 'react-limited-infinite-scroll';
import FloatingWindow from './component/FloatingWindow';
import {getUrlParam} from "./utils/Url";

/**
 * 商品列表页面
 */
class CommodityList extends Component {
    constructor(props) {
        super(props);
        const collectorNo = getUrlParam('collectorNo');
        this.state = {
            pageNo: 1,                  // 当前页
            pageSize: 10,               // 页大小
            hasNextPage: false,         // 是否还有下一页
            list: [],                   // 订单列表
            showHeader: !!collectorNo,  // 是否展示商品头
            showFloating: true,         // 是否展示商品尾
            collectorNo: collectorNo,   // 收集人编号
            phone: '',                  // 收集人手机号
        };
        this.loadNextPage = this.loadNextPage.bind(this);
    }

    /**
     * 初始值
     */
    componentWillMount() {
        this.state.collectorNo && this.initCollector();
        this.loadNextPage();
    }

    /**
     * 初始化收集人信息
     */
    initCollector = () => {
        getRecycleCollector(this.state.collectorNo).then(res => {
            if (res.code !== 200) {
                console.log(res);
                return;
            }
            this.setState({
                phone: res.data.phone
            });
        }).catch(err => {
            console.log(err);
        });
    };

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
                {
                    // 商品列表头部卡片
                    this.state.showHeader && <BusinessCard collectorNo={this.state.collectorNo}/>
                }
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
                {
                    // 浮动窗口
                    this.state.showFloating && <FloatingWindow phone={this.state.phone}/>
                }
            </div>
        );
    }
}

export default CommodityList;
