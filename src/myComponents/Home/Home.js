import React, {Component} from 'react';
import './Home.css';
import '../../assets/css/bootstrap.min.css';
import SelectCharts from './SelectCharts';
import ChartValue from "./ChartValue";
import ChartPreview from './ChartPreview';
import cogoToast from "cogo-toast";
import {Container, Row, Col, Button} from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
class Home extends  Component {
    constructor() {
        super();
        this.state = {
            activePage: 1,
            selectedChart: null,
            chartValue: null
        }
    }

    getPage = (e) => {
        let selectedPage = e.target.getAttribute('navItem');
        selectedPage = parseInt(selectedPage);
        this.setState({
            activePage: selectedPage
        });
    }

    nothing = (chartError, valueError) => {
        cogoToast.error(chartError + ' ' + valueError, {
            position: 'bottom-center'
        });
    }

    fun = (e) => {
        alert(e.target.className);
    }

    render(){
        return(
            <>
                <Container>
                    <h1 className='p-3 text-center'>React Chart Application</h1>
                    <ul className='tab'>
                        <li navItem='1' onClick={this.getPage} className={this.state.activePage === 1 ? ' tabItem active' : 'tabItem'} >Select A Chart</li>
                        <li navItem='2' onClick={this.state.selectedChart === null ? this.nothing.bind(this,'please Select A Chart','') : this.getPage} className={this.state.activePage === 2 ? ' tabItem active' : 'tabItem'}>Select Value</li>
                        <li navItem='3' onClick={(this.state.selectedChart === null ||  this.state.chartValue === null) ? this.nothing.bind(this,'please Select A Chart','Or Value') : this.getPage} className={this.state.activePage === 3 ? ' tabItem active' : 'tabItem'}>Preview</li>
                        {/*<li navItem='4' onClick={this.getPage} className={this.state.activePage === 4 ? ' tabItem active' : 'tabItem'}>test</li>*/}
                    </ul>


                    {this.state.activePage === 1 && <SelectCharts selectEvent={this.fun}></SelectCharts>}
                    {this.state.activePage === 2 && <ChartValue/>}
                    {this.state.activePage === 3 && <ChartPreview/>}









                    {/*<Tabs className='card'>*/}
                    {/*    <TabList className='tab'>*/}
                    {/*        <Tab className='tabItem '>Select A Chart</Tab>*/}
                    {/*        <Tab className='tabItem'>Add Value</Tab>*/}
                    {/*        <Tab className='tabItem'>Preview</Tab>*/}
                    {/*    </TabList>*/}

                    {/*    <TabPanel>*/}
                    {/*        <h2>Any content 1</h2>*/}
                    {/*    </TabPanel>*/}
                    {/*    <TabPanel>*/}
                    {/*        <h2>Any content 2</h2>*/}
                    {/*    </TabPanel>*/}
                    {/*    <TabPanel>*/}
                    {/*        <h2>Any content 34</h2>*/}
                    {/*    </TabPanel>*/}
                    {/*</Tabs>*/}
                </Container>
            </>
        );
    };
}

export default Home;