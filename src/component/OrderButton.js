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
        const {imgUrl, stateDesc, state} = this.props;
        const buttonName = state === 1 ? 'BlueButtonTag' : 'RedButtonTag';
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

                    </div>
                }
                {
                    // 订单标签
                    <div className="OrderButtonTag">
                        <Button name={stateDesc} buttonName={buttonName}/>
                    </div>
                }
            </div>
        );
    }
}

export default OrderButton;