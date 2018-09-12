import React, {Component} from 'react';
import './BusinessCard.css';

class BusinessCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.cardClick = this.cardClick.bind(this);
    }

    /**
     * 卡片的点击事件
     */
    cardClick = () => {
        console.log("123");
    };

    render() {
        return (
            <header className="App-header">
                <div className="BusinessCardApp" onClick={() => this.cardClick()}>
                    <p>rer</p>
                </div>
            </header>
        );
    }
}

export default BusinessCard;