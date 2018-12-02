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
                        <div className="OrderButtonContextTag">
                            <Button name={stateDesc} buttonName={buttonName}/>
                        </div>
                        <h5 className="OrderButtonContextHeader">洗衣机洗衣机洗衣机</h5>
                        <p>2018-07-09 12:13:23</p>
                    </div>
                }
            </div>
        );
    }
}

export default OrderButton;