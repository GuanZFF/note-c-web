/*
 * @parmas images arrary
 * @parmas autoTime number
 * @parmas auto bool
 */

// 没有使用 react 的事件系统, 直接获取 dom 元素 使用原生的事件系统

import React, {Component} from 'react';
import './Slider.css';

export default class Slider extends Component {
    static defaultProps = {
        index: 0,
        auto: false,
        autoTime: 3000,
        images: [],
        rate: 0.5,
    };
    style = {
        container: {
            position: 'relative',
            overflow: 'hidden',
            cursor: '-webkit-grab',
        },
        indicateBox: {
            position: 'absolute',
            width: '100%',
            bottom: '0',
            textAlign: 'center'
        },
        indicateDot: {
            display: 'inline-block',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,.5)',
            margin: '10px 5px',
            transition: 'all .5s',
            WebkitTransition: 'all .5s',
        },
        scroller: {
            whiteSpace: 'nowrap',
            transition: 'transform .5s',
            WebkitTransition: 'transform .5s',
        },
        img: {
            width: '100%',
            display: 'inline-block',
        }
    };
    moveInfo = {
        active: false,
        startX: 0,
        diffX: 0,
        translateX: 0,
        endX: 0,
        startTime: 0,
        endTime: 0,
        max: 0,
        min: 0,
    };

    constructor(props) {
        super(props);
        this.state = {index: 0}
    }

    shouldComponentUpdate(nextProps, nextState) {
        const {state, props} = this;
        return state.index !== nextState.index ||
            props.auto !== nextProps.auto ||
            props.autoTime !== nextProps.autoTime;
    }

    componentDidMount() {
        console.log("222");
        const {
            refs: {container},
            props: {auto}
        } = this;

        this.initData();

        window.addEventListener('resize', () => {
            this.initData();
            this.onMoveEnd()
        }, false);

        // touch
        container.addEventListener('touchstart', e => {
            const {pageX: x, pageY: y} = e.touches[0];
            this.onMoveStart(x, y)
        }, false);
        container.addEventListener('touchmove', e => {
            const {pageX: x, pageY: y} = e.touches[0];
            this.onMove(x, y)
        }, false);
        container.addEventListener('touchend', this.onMoveEnd);

        // mouse
        container.addEventListener('mousedown', e => {
            e.preventDefault();
            this.onMoveStart(e.pageX, e.pageY)
        }, false);
        container.addEventListener('mousemove', e => {
            e.preventDefault();
            this.onMove(e.pageX, e.pageY)
        }, false);
        container.addEventListener('mouseleave', e => {
            this.onMoveEnd(e.pageX, e.pageY)
        }, false);
        container.addEventListener('mouseup', e => {
            this.onMoveEnd(e.pageX, e.pageY)
        }, false);

        auto && this.autoScroll();
    }

    initData = () => {
        const {container} = this.refs;
        this.moveInfo.containerWidth = container.offsetWidth;
        this.moveInfo.picNum = this.props.images.length;

        // TODO 自定义
        this.moveInfo.maxX = -(this.moveInfo.containerWidth * (this.moveInfo.picNum - 1) + 20)
        this.moveInfo.minX = 20
    };
    onMoveStart = (x, y) => {
        const {container, scroller} = this.refs;
        this.moveInfo.startX = x;
        this.moveInfo.active = true
        this.moveInfo.startTime = Date.now();
        container.style.cursor = '-webkit-grabbing';
        scroller.style.transition = 'none';
        scroller.style.webkitTransition = 'none'
    };
    onMove = (x, y) => {
        const {container, scroller} = this.refs;
        const {startX, endX, translateX, minX, maxX, active} = this.moveInfo
        if (!active) return
        this.moveInfo.diffX = startX - x
        let _translateX = endX - this.moveInfo.diffX
        _translateX = _translateX > minX ? minX : (_translateX < maxX ? maxX : _translateX)
        this.moveInfo.translateX = _translateX
        scroller.style.transform = `translate(${_translateX}px)`
        scroller.style.webkitTransform = `translate(${_translateX}px)`
    };
    onMoveEnd = (e) => {
        const {
            state: {index},
            props: {rate},
            refs: {container, scroller},
            moveInfo: {
                containerWidth,
                translateX,
                startTime,
                picNum,
                diffX,
                minX,
                maxX,
            }
        } = this;

        this.moveInfo.active = false
        container.style.cursor = '-webkit-grab'

        let _index;
        const diffTime = Date.now() - startTime
        if (Math.abs(diffX / diffTime) > rate && translateX < minX && translateX > maxX) {
            if (diffX > 0) {
                if (index !== picNum - 1) {
                    _index = index + 1
                }
            } else {
                if (index !== 0) {
                    _index = index - 1;
                }
            }
        } else {
            _index = Number(Math.abs(translateX / containerWidth).toFixed(0))
        }

        this.moveInfo.endX = -1 * _index * containerWidth;
        this.setState({index: _index});
        scroller.style.transition = 'transform .5s';
        scroller.style.webkitTransition = 'transform .5s';
        scroller.style.transform = `translateX(${this.moveInfo.endX}px)`;
        scroller.style.webkitTransform = `translateX(${this.moveInfo.endX}px)`;

        this.moveInfo.diffX = 0
    };
    autoScroll = () => {
        const {
            props: {autoTime},
            moveInfo: {containerWidth, picNum, active},
            refs: {scroller}
        } = this

        this.intervel = setTimeout(() => {
            if (active) return this.autoScroll()
            let _index = this.state.index + 1

            _index = _index > picNum - 1 ? 0 : _index
            // this.setState({index: _index})
            this.moveInfo.endX = -1 * _index * containerWidth
            scroller.style.transform = `translateX(${this.moveInfo.endX}px)`
            scroller.style.webkitTransform = `translateX(${this.moveInfo.endX}px)`

            this.autoScroll()
        }, autoTime)
    };

    render() {
        const {
            state: {index},
            props: {images},
            style
        } = this;
        console.log(images);
        return (
            <div className="container" ref="container">
                <div className="scroller" ref="scroller">
                    {
                        images.map((src, i) =>
                            <img key={i} className="img" src={src}/>
                        )
                    }
                </div>
                <div className="indicateBox">
                    {
                        images.map((_, i) => {
                            const activeStyle = Object.assign({}, style.indicateDot, {background: 'rgba(255,255,255,.9)'})
                            return <span key={i} style={i === index ? activeStyle : style.indicateDot}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

