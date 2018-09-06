import React, {Component} from 'react';
import './SliderImg.css';
import PropTypes from 'prop-types';

class SliderImg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: -1,              // 图片索引，取反
            images: [],             // 封装后的图片链接
            moveDirection: -1,      // 自动轮播方向
            containWidth: 320,      // 容器宽度
            sliderHandler: 0        // 自动轮播句柄，用于关闭轮播
        };
    }

    moveInfo = {
        startClientX: 0,            // 水平触控起始点
        moveDistanceX: 0,           // 水平华滑动距离
    };

    componentWillMount() {
        this.setState({
            containWidth: window.screen.width
        });
    }

    componentDidMount() {
        const {refs: {sliderApp, sliderImage}} = this;
        sliderImage.style.transition = 'transform .5s';
        sliderImage.style.transform = `translateX(${this.state.containWidth * this.state.index}px)`;

        this.startSlider(sliderImage);

        // 触屏事件监听 触控开始
        sliderApp.addEventListener('touchstart', (e) => {
            this.stopSlider();
            this.moveInfo.startClientX = e.touches[0].clientX;
        });

        // 触屏事件监听 触控移动
        sliderApp.addEventListener('touchmove', (e) => {
            this.moveInfo.moveDistanceX = this.moveInfo.startClientX - e.touches[0].clientX;
            sliderImage.style.transition = 'none';
            sliderImage.style.transform = `translateX(${this.state.containWidth * this.state.index - this.moveInfo.moveDistanceX}px)`;
        });

        // 触屏事件监听 触控结束
        sliderApp.addEventListener('touchend', () => {
            let touchDirection = (this.moveInfo.moveDistanceX * 2 / this.state.containWidth) << 0;
            let newIndex = this.state.index - touchDirection;

            this.setState({index: newIndex});
            sliderImage.style.transition = 'transform .5s';
            sliderImage.style.transform = `translateX(${this.state.containWidth * this.state.index}px)`;

            this.startSlider(sliderImage);

            if (0 > newIndex && newIndex >= -this.props.images.length) {
                return;
            }

            setTimeout(() => {
                newIndex = newIndex + this.props.images.length * touchDirection;

                this.setState({index: newIndex});
                sliderImage.style.transition = 'none';
                sliderImage.style.transform = `translateX(${this.state.containWidth * newIndex}px)`;
            }, 500);
        });

    }

    componentWillReceiveProps(nextProps) {
        // 组装新的图片列表，在列表中第一张前加上最后一张，最后一张后加上第一张
        Object.assign(this.state.images, nextProps.images);
        this.state.images.push(nextProps.images[0]);
        this.state.images.unshift(nextProps.images[nextProps.images.length - 1]);
    }

    // 开启自动轮播设置
    startSlider = (sliderImage) => this.state.sliderHandler = setInterval(() => {
        let newIndex = this.state.index + this.state.moveDirection;

        this.setState({index: newIndex});
        sliderImage.style.transition = 'transform .5s';
        sliderImage.style.transform = `translateX(${this.state.containWidth * newIndex}px)`;

        if (0 > newIndex && newIndex >= -this.props.images.length) {
            return;
        }

        setTimeout(() => {
            newIndex = newIndex - this.props.images.length * this.state.moveDirection;

            this.setState({index: newIndex});
            sliderImage.style.transition = 'none';
            sliderImage.style.transform = `translateX(${this.state.containWidth * newIndex}px)`;
        }, 500);
    }, 2000);

    // 关闭自动轮播设置
    stopSlider = () => clearInterval(this.state.sliderHandler);

    render() {
        return (
            <div className="sliderApp" ref="sliderApp">
                <div className="sliderImage" ref="sliderImage">
                    {
                        // 图片处理
                        this.state.images.map((image, index) => {
                            return (
                                <img key={index} src={image} alt="image" className="imgBox"/>
                            );
                        })
                    }
                </div>
                <div className="sliderCatalog">
                    {
                        // 图片目录处理
                        this.props.images.map((_, index) => {
                            return (
                                <span key={index}
                                      className={index === -this.state.index - 1 ? 'activeCatalog' : 'negativeCatalog'}/>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

// 属性定义
SliderImg.propTypes = {
    images: PropTypes.array,
};

export default SliderImg;