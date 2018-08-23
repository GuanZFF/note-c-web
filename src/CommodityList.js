import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './CommodityList.css';
import {getRecycleCommodity} from './mock/mock-api';
import img1 from './image/img1.jpg'

class CommodityList extends Component {
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

    componentDidMount() {
        document.body.addEventListener('touchend', () => {
            let h = document.documentElement.scrollHeight - document.documentElement.scrollTop;
            if (h <= document.documentElement.clientHeight) {
                getRecycleCommodity()
                    .then(res => {
                        res.data.list.forEach(item => this.state.list.push(item));
                    })
                    .catch(err => {
                        console.log(err);
                    });
                ReactDOM.render(<CommodityList/>, document.getElementById('root'));
            }
        });
    }

    static handle(commodityNo) {
        window.location.href = `commodityDetail?commodityNo=${commodityNo}`;
    }

    render() {
        const list = this.state.list;
        console.log(this.state);
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                {
                    list.map((item, i) => {
                        return (
                            <div className="List" key={i} onClick={() => CommodityList.handle(item.commodityNo)}>
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

export default CommodityList;
