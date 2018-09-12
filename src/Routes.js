import React, {Component} from "react";
import {BrowserRouter, Route} from 'react-router-dom';

import CommodityList from './CommodityList';
import CommodityDetail from './CommodityDetail';

const routes = (
    <BrowserRouter>
        <div>
            <Route exact={true} path="/" component={CommodityList}/>
            <Route path="/commodityList" component={CommodityList}/>
            <Route path="/commodityDetail" component={CommodityDetail}/>
        </div>
    </BrowserRouter>
);


class Routes extends Component {
    render = () => routes;
}

export default Routes;