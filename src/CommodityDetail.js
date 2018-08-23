import React, {Component} from 'react';
import './CommodityDetail.css';
import {getUrlParam} from './utils/Url';
import {getCommodityDetail} from './mock/mock-api'

class CommodityDetail extends Component{

    constructor(props) {
        super(props);
        this.commodityNo = getUrlParam('commodityNo');
        this.state = {
            commodityNo: '',
            commodityName: '',
            commodityPictureUrl: '',
            recycleTime: '',
            expectSellPrice: '',
        }
    }

    componentWillMount() {
        getCommodityDetail(this.commodityNo)
            .then(res => {
                this.setState({
                    commodityNo: res.data.commodityNo,
                    commodityName: res.data.commodityName,
                    commodityPictureUrl: res.data.commodityPictureUrl,
                    recycleTime: res.data.recycleTime,
                    expectSellPrice: res.data.expectSellPrice,
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    componentDidMount() {
        document.body.addEventListener('touchstart', () => {
            console.log(this)
        })
    }

    render() {
        return (
            <div className="Detail-App">
                <div className="Detail-Header">
                    <img src={this.state.commodityPictureUrl} alt="logo" className="detail-img-box"/>
                </div>
                <div className="Detail-Context">
                    <h1>{this.state.commodityName}</h1>
                </div>
            </div>
        );
    }
}

export default CommodityDetail;