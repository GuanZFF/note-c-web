import React, {Component} from 'react';
import './TextArea.css';

class TextArea extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {};
    }

    render() {
        return (
            <div className="TextArea">
                <textarea className="TextAreaContext"
                          placeholder={this.props.placeholder || '输入文本内容'}
                          onChange={this.props.value}
                          value={this.props.defaultValue || ''}/>
            </div>
        );
    }
}

export default TextArea;