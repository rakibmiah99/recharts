import React,{Component} from "react";
import {BrowserRouter} from 'react-router-dom';
import Nav from './Nav';
import RoutePages from "./RoutePages";
class NavHome extends Component{

    render(){
        return(
            <>
                <BrowserRouter>
                    <Nav/>
                    <RoutePages/>
                </BrowserRouter>
            </>
        );
    }
}

export default NavHome;