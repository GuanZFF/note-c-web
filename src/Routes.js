import React, {Component} from "react";
import {BrowserRouter, Route} from 'react-router-dom';

import CommodityList from './CommodityList';
import CommodityDetail from './CommodityDetail';
import OrderList from './OrderList';
import SubscribeOrder from './SubscribeOrder';

const routes = (
    <BrowserRouter>
        <div>
            <Route exact={true} path="/" component={CommodityList}/>
            <Route path="/index.html" component={CommodityList}/>
            <Route path="/commodityList" component={CommodityList}/>
            <Route path="/commodityDetail" component={CommodityDetail}/>
            <Route path="/orderList" component={OrderList}/>
            <Route path="/subscribeOrder" component={SubscribeOrder}/>
        </div>
    </BrowserRouter>
);


class Routes extends Component {
    render = () => routes;
}

export default Routes;