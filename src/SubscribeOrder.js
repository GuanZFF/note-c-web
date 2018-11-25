import React, {Component} from 'react';
import './SubscribeOrder.css';
import Button from './component/Button';
import Input from './component/Input';

class SubscribeOrder extends Component {
    constructor(props) {
        super(props);
    }

    /**
     * 创建订单
     */
    createOrder = () => {
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
                        <Input placeholder="请输入手机号"/>
                        <Input placeholder="请输入地址"/>
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