import React, {Component} from 'react';
import './ReverseOrderButton.css';

class ReverseOrderButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="ReverseOrderButton">
                <div className="ReverseContext">
                    <p className="ReverseOrderContext">【联系人单号】{this.props.orderNo}</p>
                    <p className="ReverseOrderContext">【联系人手机】{this.props.phone}</p>
                    <p className="ReverseOrderContext">【联系人地址】{this.props.address}</p>
                    <p className="ReverseOrderContext">【时间】{this.props.startTime} ~ {this.props.endTime}</p>
                </div>
            </div>
        );
    }
}

export default ReverseOrderButton;
