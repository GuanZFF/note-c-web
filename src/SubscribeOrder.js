import React, {Component} from 'react';
import './SubscribeOrder.css';
import Button from './component/Button';
import Input from './component/Input';
import TextArea from './component/TextArea';
import {insertReverseOrder} from './mock/api';
import {getCookie} from "./utils/CookieUtil";
import constant from "./constant/constant";

class SubscribeOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: getCookie(constant.phoneKey),
            address: getCookie(constant.addressKey),
            remark: ''
        };
    }

    /**
     * 创建订单
     */
    createOrder = () => {
        let openId = getCookie('openId');

        if (!openId) {
            openId = constant.defaultOpenId;
        }

        let confirm = window.confirm("确认预约回收");
        if (confirm) {
            insertReverseOrder(openId, this.state.phone, this.state.address, this.state.remark).then(res => {
                if (res !== 200) {
                    console.log(res);
                }
                this.setState({
                    phone: '',
                    address: '',
                    remark: ''
                });
            }).catch(err => {

            });
        }
    };

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

    render() {
        return (
            <div className="SubscribeOrder">
                {
                    // 下单头信息
                    <div className="SubscribeOrderHeader">
                        <h3 className="SubscribeOrderH">预约页面</h3>
                    </div>
                }
                {
                    // 下单内容
                    <div className="SubscribeOrderContext">
                        <Input placeholder="请输入手机号" value={this.handlePhone.bind(this)}
                               defaultValue={this.state.phone}/>
                        <Input placeholder="请输入地址" value={this.handleAddress.bind(this)}
                               defaultValue={this.state.address}/>
                        <TextArea placeholder="备注" value={this.handleRemark.bind(this)}
                                  defaultValue={this.state.remark}/>
                        <p className="SubscribeOrderNote">注意 : 预约后我们会在12个小时内进行上门回收，如有其他要求请在备注中注明</p>
                    </div>
                }
                {
                    // 下单按钮
                    <div className="OrderButtonTag">
                        <Button name="预 约" buttonName="ButtonA" callback={this.createOrder}/>
                    </div>
                }
            </div>
        );
    }
}

export default SubscribeOrder;