import React from 'react';
import ReactDOM from 'react-dom';
import CommodityList from './CommodityList';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CommodityList/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
