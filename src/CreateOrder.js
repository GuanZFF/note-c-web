import React, {Component} from 'react';
import './CreateOrder.css';
import {getUrlParam} from "./utils/Url";
import {Redirect} from 'react-router-dom';
import {getCommodityDetail, insertOrder} from './mock/api';
import constant from "./constant/constant";
import Input from './component/Input';
import TextArea from './component/TextArea';
import {getCookie, setCookie} from "./utils/CookieUtil";

class CreateOrder extends Component {
    constructor(props) {
        super(props);
        this.commodityNo = getUrlParam('commodityNo');
        this.state = {
            collectorNo: '',
            commodityNo: '',
            commodityName: '',
            commodityPicture: '',           // 商品头图片信息
            recycleTime: '',
            expectSellPrice: '',
            imgUrl: [],
            contactName: '',
            contactPhone: '',
            wechatNo: '',
            commodityTypeDesc: '',
            collectorRemark: '',
            isJumpPath: false,              // 是否执行路径跳转
            jumpPath: '',                   // 需要跳转的路径

            phone: getCookie(constant.phoneKey),        // 获取cookie中存储的电话信息
            address: getCookie(constant.addressKey),    // 获取cookie中存储的地址信息
            remark: ''
        };
    }

    componentWillMount() {
        this.initPay();
    }

    initPay = () => {
        // 初始化商品信息
        getCommodityDetail(this.commodityNo).then(res => {
            console.log(res);
            this.setState({
                collectorNo: res.data.collectorNo,
                commodityNo: res.data.commodityNo,
                commodityName: res.data.commodityName,
                commodityPicture: res.data.commodityPicture,
                recycleTime: res.data.recycleTime,
                expectSellPrice: res.data.expectSellPrice,
                imgUrl: res.data.imgUrl,
                commodityTypeDesc: res.data.commodityTypeDesc
            });
            this.initCollectorDetail(res.data.collectorNo);
        }).catch(err => {
            console.log(err);
        });
    };

    /**
     * 路径跳转
     * @param path
     */
    jump = (path) => this.setState({isJumpPath: true, jumpPath: path});

    handlePhone = (input) => {
        this.setState({
            phone: input.target.value
        });
    };

    handleAddress = (input) => {
        this.setState({
            address: input.target.value
        });
    };

    handleRemark = (text) => {
        this.setState({
            remark: text.target.value
        });
    };

    /**
     * 创建订单
     */
    createOrder = () => {
        // 获取用户cookie信息
        let openId = getCookie('openId');

        if (!openId) {
            openId = constant.defaultOpenId;
        }

        // 插入订单
        insertOrder(openId, this.state.commodityPicture, this.state.phone, this.state.address, this.state.remark).then(res => {
            if (res.code !== 200) {
                console.log(res);
            }
            // 跳转至订单详情
            this.jump('/orderDetail?orderNo=' + res.data.orderNo);

            // 设置cookie信息
            setCookie(constant.phoneKey, this.state.phone);
            setCookie(constant.addressKey, this.state.address);
        }).catch(err => {
            console.log(err);
        });
    };

    render() {
        if (this.state.isJumpPath) {
            return <Redirect push to={this.state.jumpPath}/>
        }

        return (
            <div className="CreateOrderPay">
                {
                    // 支付商品信息
                    <div className="PayCommodityInfo">
                        <div className="PayCommodityHeader">
                            <img src={this.state.commodityPicture || constant.defaultAvatar} alt="logo"
                                 className="PayCommodityImg"/>
                        </div>
                        <div className="PayCommodityContent">
                            <h4 className="PayCommodityTitle">{this.state.commodityName}</h4>
                            <p className="PayCommodityContentInfo">{this.state.commodityTypeDesc}</p>
                            <p className="PayCommodityContentInfo">{this.state.commodityName}</p>
                        </div>
                    </div>
                }
                {
                    // 支付收件人信息
                    <div className="PayPurchaserInfo">
                        <Input placeholder="请输入联系人手机号" value={this.handlePhone.bind(this)}
                               defaultValue={this.state.phone}/>
                        <Input placeholder="请输入联系人地址" value={this.handleAddress.bind(this)}
                               defaultValue={this.state.address}/>
                        <TextArea placeholder="请输入备注" value={this.handleRemark.bind(this)}
                                  defaultValue={this.state.remark}/>
                    </div>
                }
                {
                    // 底部支付列表以及样式设置
                    <div className="Pay">
                        <div className="PayContent">
                            <p className="PayContentTxt">付款金额：<b
                                className="PayMoney">{this.state.expectSellPrice}元</b>&emsp;</p>
                        </div>
                        <div className="PayButton" onClick={() => this.createOrder()}>
                            <p className="PayButtonTxt">支 付</p>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default CreateOrder;