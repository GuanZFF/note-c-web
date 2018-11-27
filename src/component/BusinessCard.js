import React, {Component} from 'react';
import './BusinessCard.css';
import {getRecycleCollectorDetail} from '../mock/mock-api';
import Button from "./Button";
import IconUser from '../image/icon-user1.png';
import DefaultImg from '../image/defaultImg.jpg';

class BusinessCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            phone: '',
            recycleCommodity: '',
            avatar: ''
        };
        this.cardClick = this.cardClick.bind(this);
        this.myOrderList = this.myOrderList.bind(this);
    }

    componentWillMount() {
        this.initRecycleCollector();
    }

    initRecycleCollector = () => {
        getRecycleCollectorDetail(this.props.collectorNo).then(res => {
            if (res.code !== 200) {
                console.log(res);
                return;
            }
            this.setState({
                username: res.data.username,
                phone: res.data.phone,
                recycleCommodity: res.data.recycleCommodity,
                avatar: res.data.avatar
            });
            console.log(this.state);
        }).catch(err => {
            console.log(err);
        })
    };

    /**
     * 卡片的点击事件
     */
    cardClick = () => {
        window.location.href = '/subscribeOrder';
    };

    /**
     * 我的订单列表
     */
    myOrderList = () => {
        window.location.href = `/orderList`;
    };

    render() {
        return (
            <header className="App-header">
                <div className="BusinessCardApp">
                    <div className="BusinessCardHeader">
                        <div className="BusinessCardHeaderTitle">
                            <h3 className="BusinessCardHeaderTitle-title">商品回收平台</h3>
                        </div>
                        <div className="BusinessCardHeaderImg" onClick={this.myOrderList}>
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
                        <Button name="预约回收" buttonName="ButtonB" callback={() => this.cardClick()}/>
                    </div>
                </div>
            </header>
        );
    }
}

export default BusinessCard;