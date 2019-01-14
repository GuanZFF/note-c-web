import React, {Component} from 'react';
import './OrderButton.css';
import constant from '../constant/constant';
import Button from "./Button";
import {Redirect} from 'react-router-dom';

class OrderButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isJumpPath: false,
            jumpPath: ''
        };
    }

    /**
     * 路径跳转设置
     * @param path
     */
    jump = (path) => this.setState({isJumpPath: true, jumpPath: path});

    render() {
        // 路由跳转
        if (this.state.isJumpPath) {
            return <Redirect push to={this.state.jumpPath}/>
        }

        // 获取父层传来的参数
        const {imgUrl, orderNo, orderTime, state} = this.props;

        // 标签设置
        const buttonName = state === 1 ? 'BlueButtonTag' : 'RedButtonTag';
        let stateDesc = '未确定类型';
        if (state === 1) {
            stateDesc = "订单未完成";
        }
        if (state === 2) {
            stateDesc = "订单完成";
        }
        return (
            <div className="OrderButton" onClick={() => this.jump('/orderDetail?orderNo=' + orderNo)}>
                {
                    // 订单卡片图片
                    <div className="OrderButtonHeader">
                        <img src={imgUrl || constant.defaultAvatar} alt="logo" className="ImgBox"/>
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