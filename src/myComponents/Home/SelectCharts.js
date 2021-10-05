import React,{Component} from "react";
import './Home.css';
import one from '../../assets/images/1.png';
import two from '../../assets/images/2.png'
import {LineChart,Line,BarChart,CartesianGrid,XAxis,Tooltip,YAxis,Bar,Legend} from "recharts";
import {Container, Col, Row, Card, Button} from 'react-bootstrap';
class SelectChats extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                name: 'PageA',year:400,pv: 2400, amt: 2400,

            }]
        }
    }
    render(){
        return(
            <>
                <Row>
                    <Col>
                        <Card className="sChart" ref={(card) => { this.cardRef = card;}} onClick={this.props.selectEvent} chartId={1}>
                            <Card.Body>
                                <Card.Img variant="top" src="https://img.icons8.com/officel/16/000000/line-chart.png"/>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Img variant="top" src={two}/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Img variant="top" src={one}/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </>
        )
    }
}
export default SelectChats;