import React, {Component} from 'react';
import './BusinessCard.css';

class BusinessCard extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="BusinessCardApp">
                <h1>我的名片</h1>
            </div>
        );
    }
}

export default BusinessCard;