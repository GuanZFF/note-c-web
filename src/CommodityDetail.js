import React, {Component} from 'react';
import './CommodityDetail.css';
import {getUrlParam} from './utils/Url';
import {getCommodityDetail, getRecycleCollector} from './mock/api';
import SliderImg from './component/SliderImg';
import ArrowRight from './component/ArrowRight';
import {Redirect} from 'react-router-dom';

class CommodityDetail extends Component {

    constructor(props) {
        super(props);
        this.commodityNo = getUrlParam('commodityNo');
        this.state = {
            collectorNo: '',
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
            wechatNo: '',
            remark: '',
            commodityTypeDesc: '',
            collectorRemark: '',
            isJumpPath: false,      // 是否执行路径跳转
            jumpPath: ''            // 需要跳转的路径
        };
    }

    componentWillMount() {
        this.initCommodityDetail();
    }

    initCommodityDetail = () => {
        getCommodityDetail(this.commodityNo)
            .then(res => {
                console.log(res);
                this.setState({
                    collectorNo: res.data.collectorNo,
                    commodityNo: res.data.commodityNo,
                    commodityName: res.data.commodityName,
                    commodityPicture: res.data.commodityPicture,
                    recycleTime: res.data.recycleTime,
                    expectSellPrice: res.data.expectSellPrice,
                    imgUrl: res.data.imgUrl,
                    remark: res.data.remark,
                    commodityTypeDesc: res.data.commodityTypeDesc
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
                    wechatNo: res.data.wechatNo,
                    collectorRemark: res.data.remark
                });
            })
            .catch(err => {
                console.log(err);
            })
    };

    recommendDesign = () => {
        return (
            <div className="RecommendDesignApp">
                <p>【商品单号】{this.state.commodityNo}</p>
                <p>【类型】{this.state.commodityTypeDesc}</p>
                <p>【上架时间】{this.state.recycleTime}</p>
                <p>【备注】{this.state.remark}</p>
            </div>
        );
    };

    sellerDesign = () => {
        return (
            <div className="SellerDesignApp">
                <p>【备注】{this.state.collectorRemark}</p>
            </div>
        );
    };

    /**
     * 路径跳转
     * @param path
     */
    jump = (path) => this.setState({isJumpPath: true, jumpPath: path});

    componentDidMount() {

    }

    render() {
        if (this.state.isJumpPath) {
            return <Redirect push to={this.state.jumpPath}/>
        }
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
                    {this.recommendDesign()}
                    <hr/>
                    <p className="NoteContent">注意 : 若想购买需要通过下面的电话联系卖家！！！</p>
                </div>
                <div className="DetailContextSecond">
                    <ArrowRight title="姓名" content={this.state.contactName}/>
                    <hr/>
                    <ArrowRight title="卖家单号" content={this.state.collectorNo} showArrow="true"
                                callback={() => this.jump('/?collectorNo='+this.state.collectorNo)}/>
                    <hr/>
                    <ArrowRight title="手机号" content={this.state.contactPhone} showArrow="true"
                                callback={() => window.location.href = "tel:" + this.state.contactPhone}/>
                    <hr/>
                    <ArrowRight title="微信号" content={this.state.wechatNo}/>
                </div>
                <div className="DetailContextThird">
                    {this.sellerDesign()}
                </div>
            </div>
        );
    }
}

export default CommodityDetail;