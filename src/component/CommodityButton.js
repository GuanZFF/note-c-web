import './CommodityButton.css';
import React, {Component} from 'react';
import DefaultImg from '../image/defaultImg.jpg';
import Button from "./Button";

/**
 * 商品详情列表卡片
 */
class CommodityButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    /**
     * 页面跳转
     * @param commodityNo 商品订单号
     */
    handleClick = (commodityNo) => {
        window.location.href = `commodityDetail?commodityNo=${commodityNo}`;
    };

    render() {
        // 上层传入的参数
        const {commodityNo, imgUrl, name, price, remark} = this.props;
        // 商品卡片
        return (
            <div className="CommodityApp" onClick={() => this.handleClick(commodityNo)}>
                <div className="CommodityHeader">
                    <img src={imgUrl || DefaultImg} alt="logo" className="ImgBox"/>
                </div>
                <div className="CommodityContext">
                    <p className="CommodityTitle">{name}</p>
                    <p className="CommodityPrice">{price}元</p>
                    <p className="CommodityRemark">{remark}</p>
                </div>
                <div className="commodityTag">
                    <Button name="5成新" buttonName="ButtonTag" callback={() => console.log(123)}/>
                </div>
            </div>
        );
    }

}

export default CommodityButton;