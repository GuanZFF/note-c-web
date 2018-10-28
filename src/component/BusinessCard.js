import React, {Component} from 'react';
import './BusinessCard.css';
import {getRecycleCollector} from '../mock/api';
import Button from "./Button";
import IconUser from '../image/icon-user1.png';
import DefaultImg from '../image/defaultImg.jpg';

class BusinessCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log(this.props.collectorNo);
        this.cardClick = this.cardClick.bind(this);
    }

    /**
     * 卡片的点击事件
     */
    cardClick = () => {
        console.log("123");
    };

    getCollector = () => {
        getRecycleCollector(this.props.collectorNo).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    };

    render() {
        return (
            <header className="App-header">
                <div className="BusinessCardApp">
                    <div className="BusinessCardHeader">
                        <div className="BusinessCardHeaderTitle">
                            <h3 className="BusinessCardHeaderTitle-title">商品回收平台</h3>
                        </div>
                        <div className="BusinessCardHeaderImg">
                            <img src={IconUser} className="IconUser"/>
                        </div>
                    </div>
                    <hr/>
                    <div className="ContactInfo">
                        <div className="ContactInfoImgDiv">
                            <img src={DefaultImg} className="ContactInfoImg"/>
                        </div>
                        <div className="ContactInfoThem">
                            关现场
                            <br/>
                            18255408516
                        </div>
                        <div className="ContactInfoTag">
                            <Button name="回收人信息" buttonName="ButtonTag" callback={() => this.cardClick()}/>
                        </div>
                        <div className="clear"/>
                        <div className="ContactInfoEnd">
                            主收 : 电冰箱/洗衣机/空调/电视机/风扇/旧手机等
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