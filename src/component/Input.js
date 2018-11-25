import React, {Component} from 'react';
import './Input.css';

class Input extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {placeholder} = this.props;
        return (
            <div className="Input">
                <input placeholder={placeholder || "请输入内容"} className="InputContext"/>
            </div>
        );
    }
}

export default Input;