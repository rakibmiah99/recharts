import React,{Component} from "react";
import {BrowserRouter} from 'react-router-dom';
import Nav from './Nav';
import RoutePages from "./RoutePages";
import {Container} from "react-bootstrap";
import './NavHome.css';
class NavHome extends Component{

    render(){
        return(
            <>
                <Container fluid>
                    <BrowserRouter>
                        <Nav/>
                        <RoutePages/>
                    </BrowserRouter>
                </Container>
            </>
        );
    }
}

export default NavHome;