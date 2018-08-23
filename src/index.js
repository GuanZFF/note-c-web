import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import CommodityList from './CommodityList';
import CommodityDetail from './CommodityDetail';

const map = new Map();
map.set('commodityList', <CommodityList/>);
map.set('commodityDetail', <CommodityDetail/>);

function handlePath() {
    const pathName = window.location.pathname.replace('/', '');
    return (map.get(pathName));
}

ReactDOM.render(handlePath(), document.getElementById('root'));
registerServiceWorker();
