import React, {Component} from 'react';
import './CommodityDetail.css';
import {getUrlParam} from './utils/Url';
import {getCommodityDetail, getRecycleCommodity} from './mock/mock-api';
import Silder from './component/Slider';
import BusinessCard from './component/BusinessCard';
import SliderImg from './component/SliderImg';


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
        const images = [
            'http://static.bootcss.com/www/assets/img/opencdn.png',
            'http://static.bootcss.com/www/assets/img/gulpjs.png',
            'http://static.bootcss.com/www/assets/img/flat-ui.png',
        ]
        return (
            <div className="Detail-App">
                {/*<div className="Detail-Header">
                    <img src={this.state.commodityPictureUrl} alt="logo"
                         className="detail-img-box"
                         width={document.documentElement.scrollWidth - 20}
                         height={(document.documentElement.scrollWidth - 20) / 2}/>
                </div>
                <div className="Detail-Context">
                    <h1>{this.state.commodityName}</h1>
                </div>
                <Silder images={images} auto={this.state.auto} autoTime={this.state.autoTime}/>
                <BusinessCard/>
*/}
                <SliderImg images={this.state.imgUrl}/>
            </div>
        );
    }
}

export default CommodityDetail;