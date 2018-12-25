import React, {Component} from 'react';
import './BusinessCard.css';
// import {getRecycleCollectorDetail} from '../mock/mock-api';
import {getRecycleCollector} from '../mock/api';
import Button from "./Button";
import IconUser from '../image/icon-user1.png';
import DefaultImg from '../image/defaultImg.jpg';
import {Redirect} from 'react-router-dom';

class BusinessCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            phone: '',
            recycleCommodity: '',
            avatar: '',
            isJumpPath: false,      // 是否执行路径跳转
            jumpPath: ''            // 需要跳转的路径
        };
        this.jump = this.jump.bind(this);
    }

    componentWillMount() {
        this.initRecycleCollector();
    }

    initRecycleCollector = () => {
        getRecycleCollector(this.props.collectorNo).then(res => {
            if (res.code !== 200) {
                console.log(res);
                return;
            }
            this.setState({
                username: res.data.username,
                phone: res.data.phone,
                recycleCommodity: res.data.remark,
                avatar: res.data.avatar
            });
            console.log(this.state);
        }).catch(err => {
            console.log(err);
        })
    };

    /**
     * 路径跳转
     * @param path
     */
    jump = (path) => {
        this.setState({
            isJumpPath: true,
            jumpPath: path
        });
    };

    render() {
        if (this.state.isJumpPath) {
            return <Redirect to={this.state.jumpPath}/>
        }
        return (
            <header className="App-header">
                <div className="BusinessCardApp">
                    <div className="BusinessCardHeader">
                        <div className="BusinessCardHeaderTitle">
                            <h3 className="BusinessCardHeaderTitle-title">商品回收平台</h3>
                        </div>
                        <div className="BusinessCardHeaderImg" onClick={() => this.jump("orderList")}>
                            <img src={IconUser} className="IconUser"/>
                        </div>
                    </div>
                    <hr/>
                    <div className="ContactInfo">
                        <div className="ContactInfoImgDiv">
                            <img src={this.state.avatar || DefaultImg} className="ContactInfoImg"/>
                        </div>
                        <div className="ContactInfoThem">
                            {this.state.username}
                            <br/>
                            {this.state.phone}
                        </div>
                        <div className="ContactInfoTag">
                            <Button name="回收人信息" buttonName="ButtonTag"/>
                        </div>
                        <div className="clear"/>
                        <div className="ContactInfoEnd">
                            主收 : {this.state.recycleCommodity}
                        </div>
                    </div>
                    <hr/>
                    <div className="BusinessCardContext">
                        <p className="BusinessCardContextNote">注意 : 你的预约单会由此人上门回收</p>
                        <Button name="预约回收" buttonName="ButtonB" callback={() => this.jump("subscribeOrder")}/>
                    </div>
                </div>
            </header>
        );
    }
}

export default BusinessCard;