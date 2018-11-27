import React, {Component} from 'react';
import './Input.css';

class Input extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="Input">
                <input placeholder={this.props.placeholder || "请输入内容"}
                       className="InputContext"
                       onChange={this.props.value}
                       value={this.props.defaultValue || ''}/>
            </div>
        );
    }
}

export default Input;