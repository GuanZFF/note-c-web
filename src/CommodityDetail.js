import React, {Component} from 'react';
import './CommodityDetail.css';
import {getUrlParam} from './utils/Url';
import {getCommodityDetail, getRecycleCollector} from './mock/mock-api';
import SliderImg from './component/SliderImg';
import ArrowRight from './component/ArrowRight';


class CommodityDetail extends Component {

    constructor(props) {
        super(props);
        this.commodityNo = getUrlParam('commodityNo');
        this.state = {
            commodityNo: '',
            commodityName: '',
            commodityPicture: '',
            recycleTime: '',
            expectSellPrice: '',
            imgUrl: [],
            auto: true,
            autoTime: 2000,
            contactName: '',
            contactPhone: '',
            wechatNo: ''
        };
    }

    componentWillMount() {
        this.initCommodityDetail();
    }

    initCommodityDetail = () => {
        getCommodityDetail(this.commodityNo)
            .then(res => {
                this.setState({
                    commodityNo: res.data.commodityNo,
                    commodityName: res.data.commodityName,
                    commodityPicture: res.data.commodityPicture,
                    recycleTime: res.data.recycleTime,
                    expectSellPrice: res.data.expectSellPrice,
                    imgUrl: res.data.imgUrl,
                });
                this.initCollectorDetail(res.data.collectorNo);
            })
            .catch(err => {
                console.log(err);
            });
    };

    initCollectorDetail = (collectorNo) => {
        getRecycleCollector(collectorNo)
            .then(res => {
                this.setState({
                    contactName: res.data.username,
                    contactPhone: res.data.phone,
                    wechatNo: res.data.wechatNo
                });
            })
            .catch(err => {
                console.log(err);
            })
    };

    componentDidMount() {

    }

    render() {
        return (
            <div className="DetailApp">
                <div className="DetailHeader">
                    <SliderImg images={this.state.imgUrl}/>
                </div>
                <div className="DetailContextFirst">
                    <div className="commodityNameDiv">
                        <p className="commodityName">{this.state.commodityName}</p>
                        <p className="commodityPrice">{this.state.expectSellPrice} 元</p>
                    </div>
                    <hr/>
                    <h1>推文设计</h1>
                    <p className="NoteContent">注意 : 若想购买需要通过下面的电话联系卖家！！！</p>
                </div>
                <div className="DetailContextSecond">
                    <ArrowRight title="姓名" content={this.state.contactName}/>
                    <hr/>
                    <ArrowRight title="手机号" content={this.state.contactPhone} showArrow="true"/>
                    <hr/>
                    <ArrowRight title="微信号" content={this.state.wechatNo} showArrow="true"/>
                </div>
                <div className="DetailContextThird">
                    <h1>卖家信息设计</h1>
                </div>
            </div>
        );
    }
}

export default CommodityDetail;