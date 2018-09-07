import React, {Component} from 'react';
import './FloatingWindow.css';
import phoneImg from '../image/phone.png';
import Popup from './Popup';
import fork from '../image/fork.png';

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
                <div className="popupFork">
                    <img src={fork} alt="fork" className="forkImg" onClick={this.cancelPopup.bind(this)}/>
                </div>
                <div className="forkContext">
                    <p className="phoneNum">18255408516</p>
                    <button className="phoneButton">拨打</button>
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