import React, {Component} from 'react';
import './OrderButton.css';
import DefaultImg from '../image/defaultImg.jpg';
import Button from "./Button";

class OrderButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {imgUrl, orderNo, orderTime, state} = this.props;
        const buttonName = state === 1 ? 'BlueButtonTag' : 'RedButtonTag';
        let stateDesc = '未确定类型';
        if (state === 1) {
            stateDesc = "订单未完成";
        }
        if (state === 2) {
            stateDesc = "订单完成";
        }
        return (
            <div className="OrderButton">
                {
                    // 订单卡片图片
                    <div className="OrderButtonHeader">
                        <img src={imgUrl || DefaultImg} alt="logo" className="ImgBox"/>
                    </div>
                }
                {
                    // 订单卡片详情
                    <div className="OrderButtonContext">
                        <div className="OrderButtonContextTag">
                            <Button name={stateDesc} buttonName={buttonName}/>
                        </div>
                        <h4 className="OrderButtonContextHeader">{orderNo}</h4>
                        <p>{orderTime}</p>
                    </div>
                }
            </div>
        );
    }
}

export default OrderButton;