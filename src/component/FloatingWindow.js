import React, {Component} from 'react';
import './FloatingWindow.css';
import phoneImg from '../image/phone.png';
import Popup from './Popup';

class FloatingWindow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            appWidth: 0,
            appHeight: 0,
            appStyle: 'floatingApp',
            popup: false,
            popupShow: false,
        };
        this.handleCLick = this.handleCLick.bind(this);
        this.cancelPopup = this.cancelPopup.bind(this);
    }

    componentWillMount() {
        this.setState({
            appWidth: window.screen.width / 9,
            appHeight: window.screen.width / 9,
        });
    }

    // 父组件的点击事件
    handleCLick() {
        if (this.state.popupShow) {
            this.setState({popupShow: false});
        } else {
            this.setState({appStyle: 'floatingAppClick', popup: true});
        }
    }

    // 子组件的点击事件
    cancelPopup() {
        this.state.appStyle = 'floatingApp';
        this.state.popup = false;
        this.state.popupShow = true;
    }

    // 弹层内容
    popupContext = () => {
        return (
            <div onClick={this.cancelPopup}>
                <h1>test</h1>
            </div>
        );
    };

    render() {
        const appStyle = {
            width: this.state.appWidth,
            height: this.state.appHeight
        };
        return (
            <div className={this.state.appStyle} style={appStyle} onClick={this.handleCLick}>
                <img className="phone" src={phoneImg} alt="phone"/>
                {
                    this.state.popup && <Popup children={this.popupContext()}/>
                }
            </div>
        );
    }
}

export default FloatingWindow;