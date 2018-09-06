import React, {Component} from 'react';
import './CommodityDetail.css';
import {getUrlParam} from './utils/Url';
import {getCommodityDetail} from './mock/mock-api';
import SliderImg from './component/SliderImg';
import FloatingWindow from './component/FloatingWindow';


class CommodityDetail extends Component {

    constructor(props) {
        super(props);
        this.commodityNo = getUrlParam('commodityNo');
        this.state = {
            commodityNo: '',
            commodityName: '',
            commodityPictureUrl: '',
            recycleTime: '',
            expectSellPrice: '',
            imgUrl: [],
            auto: true,
            autoTime: 2000,
        };
    }

    componentWillMount() {
        this.initCommodityDetail();
    }

    initCommodityDetail = () => {
        getCommodityDetail(this.commodityNo)
            .then(res => {
                this.setState({
                    commodityNo: res.data.commodityNo,
                    commodityName: res.data.commodityName,
                    commodityPictureUrl: res.data.commodityPictureUrl,
                    recycleTime: res.data.recycleTime,
                    expectSellPrice: res.data.expectSellPrice,
                    imgUrl: res.data.imgUrl,
                });
            })
            .catch(err => {
                console.log(err);
            });
    };

    componentDidMount() {
        document.body.addEventListener('touchstart', () => {
            console.log(this)
        })
    }

    render() {
        return (
            <div className="Detail-App">
                <SliderImg images={this.state.imgUrl}/>
                <FloatingWindow/>
            </div>
        );
    }
}

export default CommodityDetail;