import React, {Component} from "react";
import {Route} from 'react-router-dom';
import SelectCharts from './pages/SelectCharts';
import ChartValue from "./pages/ChartValue";
import ChartPreview from "./pages/ChartPreview";
import ChartPreviewTo from '../Home/ChartPreview';
class RoutePages extends Component{
    render(){
        return(
            <>
                <Route exact path='/' component={SelectCharts}/>
                <Route path='/value' component={ChartValue}/>
                <Route path='/preview' component={ChartPreview}/>
            </>
        )
    }
}
export default RoutePages;