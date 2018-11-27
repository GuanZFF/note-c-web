import React, {Component} from 'react';
import './FloatingWindow.css';
import phoneImg from '../image/phone.png';
import Popup from './Popup';
import iconClose from '../image/icon-close1.png';
import Button from './Button';

class FloatingWindow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            appWidth: 0,
            appHeight: 0,
            appStyle: 'floatingApp',
            popup: false,
        };
        this.handleCLick = this.handleCLick.bind(this);
    }

    componentWillMount() {
        this.setState({
            appWidth: window.screen.width / 9,
            appHeight: window.screen.width / 9,
        });
    }

    // 父组件的点击事件
    handleCLick() {
        this.setState({appStyle: 'floatingAppClick', popup: true});
    }

    // 子组件的点击事件
    cancelPopup() {
        this.setState({appStyle: 'floatingApp', popup: false});
    }

    // 弹层内容
    popupContext = () => {
        return (
            <div className="popupApp">
                <div className="empty">

                </div>
                <div className="title">
                    <h4>联系人电话</h4>
                </div>
                <div className="popupClose">
                    <img src={iconClose} alt="fork" className="iconClose" onClick={this.cancelPopup.bind(this)}/>
                </div>
                <div className="forkContext">
                    <p className="phoneNum">18255408516</p>
                    <div className="popupButton">
                        <Button name="拨打" callback={() => window.location.href = "tel:18255408516"}/>
                    </div>
                </div>
            </div>
        );
    };

    render() {
        const appStyle = {
            width: this.state.appWidth,
            height: this.state.appHeight
        };
        return (
            <div className={this.state.appStyle} style={appStyle}>
                <img className="phone" src={phoneImg} alt="phone" onClick={this.handleCLick}/>
                {
                    this.state.popup && <Popup children={this.popupContext()}/>
                }
            </div>
        );
    }
}

export default FloatingWindow;
