import React, {Component} from 'react';
import './SliderImg.css';

class SliderImg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            images: []
        };
    }

    componentWillMount() {
    }

    componentDidMount() {
        const {refs: {sliderApp}} = this;

        this.autoScroll();

        // 触屏事件监听 触控开始
        sliderApp.addEventListener('touchstart', (e) => {
            console.log(e);
        });

        // 触屏事件监听 触控移动
        sliderApp.addEventListener('touchmove', (e) => {
            console.log(e);
        });

        // 触屏事件监听 触控结束
        sliderApp.addEventListener('touchend', (e) => {
            console.log(e);
        });

    }

    componentWillReceiveProps(nextProps) {
        // 组装新的图片列表，在列表中第一张前加上最后一张，最后一张后加上第一张
        Object.assign(this.state.images, nextProps.images);
        this.state.images.push(nextProps.images[0]);
        this.state.images.unshift(nextProps.images[nextProps.images.length - 1]);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    // 自动播放设置
    autoScroll = () => {
        const {refs: {sliderImage}} = this;

        setTimeout(() => {
            let newIndex = ++this.state.index > this.props.images.length - 1 ? 0 : this.state.index;

            this.setState({index: newIndex});

            sliderImage.style.transition = 'transform .5s';
            sliderImage.style.transform = `translateX(${-320 * newIndex}px)`;
            this.autoScroll();
        }, 2000);
    };

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
                                <span key={index} className={index === this.state.index ? 'activeCatalog' : 'negativeCatalog'}/>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default SliderImg;