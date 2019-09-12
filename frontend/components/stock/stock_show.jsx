import React from 'react';
import StockInfoContainer from './stock_info_container';
import ChartContainer from './chart_container';
import NavContainer from '../nav/nav_container';

class StockShow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header className="user-page-header">
                    <NavContainer />
                </header>
                <div className="stock-show-wrapper">
                    <StockInfoContainer />
                    <ChartContainer />
                </div>
            </div>
        )
    }
}
export default StockShow;