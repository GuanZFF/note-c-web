import React from 'react';
import ReactDOM from 'react-dom';
import './Popup.css';

const appRoot = document.getElementById('root');

class Popup extends React.Component {
    constructor(props) {
        super(props);
        // Create a div that we'll render the modal into.
        this.el = document.createElement('div');
    }

    componentDidMount() {
        // render into the modal container element
        appRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        // Remove the element from the DOM when we unmount
        appRoot.removeChild(this.el);
    }

    render() {
        // Use a portal to render the children into the elementthis.
        const {children} = this.props;
        return ReactDOM.createPortal(
            <div className="popup">
                <div className="content">
                    {children}
                </div>
            </div>,
            this.el,
        );
    }
}

export default Popup;
