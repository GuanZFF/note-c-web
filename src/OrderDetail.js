import React, {Component} from 'react';
import {getRecycleOrder} from './mock/api';
import './OrderDetail.css';
import {getUrlParam} from './utils/Url';
import Button from './component/Button';

class OrderDetail extends Component {
    constructor(props) {
        super(props);
        this.orderNo = getUrlParam('orderNo');
        this.state = {
            address: '',                // 下单地址
            orderTime: '',              // 下单时间
            phone: '',                  // 手机号
            remark: '',                 // 备注
        };
    }

    componentWillMount() {
        this.initOrderDetail();
    }

    /**
     * 初始化订单详情
     */
    initOrderDetail = () => {
        getRecycleOrder(this.orderNo).then(res => {
            if (res.code === 200) {
                console.log(res);
                this.setState({
                    address: res.data.address,
                    orderTime: res.data.orderTime,
                    phone: res.data.phone,
                    remark: res.data.remark,
                });
                console.log(this.state)
            } else {
                console.log(res);
            }
        }).catch(error => {
            console.log(error);
        });
    };

    render() {
        return (
            <div className="OrderDetail">
                <div className="OrderDetailHeader">
                    <h3>订单详情</h3>
                </div>
                <div className="OrderDetailContent">
                    <div className="OrderDetailNo">
                        <p className="OrderDetailContentLeft">订单号</p>
                        <p className="OrderDetailContentRight">{this.orderNo}</p>
                    </div>
                    <div className="OrderDetailPhone">
                        <p className="OrderDetailContentLeft">手机号</p>
                        <p className="OrderDetailContentRight">{this.state.phone}</p>
                    </div>
                    <div className="OrderDetailTime">
                        <p className="OrderDetailContentLeft">下单时间</p>
                        <p className="OrderDetailContentRight">{this.state.orderTime}</p>
                    </div>
                    <div className="OrderDetailAddress">
                        <p className="OrderDetailContentLeft">下单地址</p>
                        <p className="OrderDetailContentRight">{this.state.address}</p>
                    </div>
                    <div className="OrderDetailRemark">
                        <p className="OrderDetailContentLeft">备注</p>
                        <p className="OrderDetailContentRight">{this.state.remark}</p>
                    </div>
                </div>
                <div className="OrderDetailOther">
                    <Button name="意见反馈" buttonName="ButtonTag" callback={() => console.log(123)}/>
                </div>
            </div>
        );
    }
}

export default OrderDetail;