import React, {Component} from "react";
import {BrowserRouter, Route} from 'react-router-dom';

import CommodityList from './CommodityList';
import CommodityDetail from './CommodityDetail';
import OrderList from './OrderList';
import OrderDetail from './OrderDetail';
import SubscribeOrder from './SubscribeOrder';
import CreateOrder from './CreateOrder';

const routes = (
    <BrowserRouter>
        <div>
            <Route exact={true} path="/" component={CommodityList}/>
            <Route path="/index.html" component={CommodityList}/>
            <Route path="/commodityList" component={CommodityList}/>
            <Route path="/commodityDetail" component={CommodityDetail}/>
            <Route path="/orderList" component={OrderList}/>
            <Route path="/subscribeOrder" component={SubscribeOrder}/>
            <Route path="/orderDetail" component={OrderDetail}/>
            <Route path="/createOrder" component={CreateOrder}/>
        </div>
    </BrowserRouter>
);


class Routes extends Component {
    render = () => routes;
}

export default Routes;