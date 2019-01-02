import React, {Component} from 'react';
import arrow_right from '../image/arrow-right.png';
import './ArrowRight.css';

class ArrowRight extends Component {
    constructor(props) {
        super(props);
    }

    defaultCallback = () => {
        console.log(123);
    };

    render() {
        return (
            <div className="arrowRight" onClick={this.props.callback || this.defaultCallback}>
                <div className="arrowRightTitle">
                    {this.props.title}
                </div>
                <div className="arrowRightImgDiv">
                    {
                        this.props.showArrow && <img src={arrow_right} alt="arrow-right" className="arrowRightImg"/>
                    }
                </div>
                <div className="arrowRightContent">
                    {this.props.content}
                </div>
                <div className="clear"/>
            </div>
        );
    }
}

export default ArrowRight;