import React, {Component} from 'react';
import './SubscribeOrder.css';
import Button from './component/Button';
import Input from './component/Input';
import TextArea from './component/TextArea';
import {insertOrder} from './mock/api';
import {getCookie} from "./utils/CookieUtil";

class SubscribeOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            address: '',
            remark: ''
        };
    }

    /**
     * 创建订单
     */
    createOrder = () => {
        let openId = getCookie('openId');

        if (!openId) {
            openId = "123";
        }

        let confirm = window.confirm("确认下单");
        if (confirm) {
            insertOrder(openId, this.state.phone, this.state.address, this.state.remark).then(res => {
                console.log(res);
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
                        <h3 className="SubscribeOrderH">下单页面</h3>
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
                    </div>
                }
                {
                    // 下单按钮
                    <div className="OrderButtonTag">
                        <Button name="下 单" buttonName="ButtonA" callback={this.createOrder}/>
                    </div>
                }
            </div>
        );
    }
}

export default SubscribeOrder;