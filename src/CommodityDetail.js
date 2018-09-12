import React, {Component} from 'react';
import './CommodityDetail.css';
import {getUrlParam} from './utils/Url';
import {getCommodityDetail} from './mock/mock-api';
import SliderImg from './component/SliderImg';
import Button from './component/Button';
import ArrowRight from './component/ArrowRight';


class CommodityDetail extends Component {

    constructor(props) {
        super(props);
        this.commodityNo = getUrlParam('commodityNo');
        this.state = {
            commodityNo: '',
            commodityName: '',
            commodityPictureUrl: '',
            recycleTime: '',
            expectSellPrice: '',
            imgUrl: [],
            auto: true,
            autoTime: 2000,
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
                    commodityPictureUrl: res.data.commodityPictureUrl,
                    recycleTime: res.data.recycleTime,
                    expectSellPrice: res.data.expectSellPrice,
                    imgUrl: res.data.imgUrl,
                });
            })
            .catch(err => {
                console.log(err);
            });
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
                </div>
                <div className="DetailContextSecond">
                    <ArrowRight title="姓名" content="关振锋"/>
                    <hr/>
                    <ArrowRight title="手机号" content="18255408516" showArrow="true"/>
                    <hr/>
                    <ArrowRight title="微信号" content="buft8497134" showArrow="true"/>
                </div>
                <div className="DetailContextThird">
                    <Button name="test"/>
                    <h1>卖家信息设计</h1>
                </div>
            </div>
        );
    }
}

export default CommodityDetail;