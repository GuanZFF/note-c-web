import React, {Component} from 'react';
import './Button.css';

class Button extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {ButtonA} = this.refs;

        ButtonA.addEventListener('touchstart',() => {
            ButtonA.style.backgroundColor = '#0e80d2';
            ButtonA.style.color = 'rgba(255, 255, 255, 0.3)';
        });
        ButtonA.addEventListener('touchend',() => {
            ButtonA.style.backgroundColor = '#108ee9';
            ButtonA.style.color = '#fff';
        });
    }

    render() {
        return (
            <div className="ButtonDiv">
                <a className="ButtonA" ref="ButtonA">
                    <span className="ButtonSpan">{this.props.name}</span>
                </a>
            </div>
        );
    }
}

export default Button;
