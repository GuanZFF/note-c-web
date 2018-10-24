import React, {Component} from 'react';
import './BusinessCard.css';
import {getRecycleCollector} from '../mock/api';

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
        this.getCollector();
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
                <div className="BusinessCardApp" onClick={() => this.cardClick()}>
                </div>
            </header>
        );
    }
}

export default BusinessCard;