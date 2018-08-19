import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {getRecycleCommodity} from './mock-api';
import img1 from './image/img1.jpg'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentWillMount() {
        getRecycleCommodity()
            .then(res => {
                this.setState({
                    list: res.data.list
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        const list = this.state.list;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                {
                    list.map((item, i) => {
                        return (
                            <div className="List" key={i}>
                                <div className="Header">
                                    <img src={item.commodityPictureUrl || img1} alt="logo" width="100" height="95" className="img-box"/>
                                </div>
                                <div className="Context">
                                    <p className="title">{item.commodityName}</p>
                                    <p className="price">{item.expectSellPrice}元</p>
                                    <p className="remark">{item.remark}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default App;
