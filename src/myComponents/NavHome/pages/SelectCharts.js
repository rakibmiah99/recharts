import React,{Component} from "react";
import '../../Home/Home.css';
import lineChartIcon from '../../../assets/images/5.png';
import barChartIcon from '../../../assets/images/bar2.png';
import pieChartIcon from '../../../assets/images/pie2.png';
import {LineChart,Line,BarChart,CartesianGrid,XAxis,Tooltip,YAxis,Bar,Legend} from "recharts";
import {Container, Col, Row, Card, Button} from 'react-bootstrap';
import ReactDOM from "react-dom";
class SelectChats extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedChart: null,
            charts: [
                {id: 1,name:'first Chart',img: lineChartIcon},
                {id: 2,name:'Second Chart',img: pieChartIcon},
                {id: 3,name:'first Chart',img: barChartIcon},
            ]
        }
    }
    componentDidMount() {
        let getChartId = sessionStorage.getItem('chartId');
        if (getChartId == null){
            this.setState({
                selectedChart: null
            })
        }else{
            this.setState({
                selectedChart: parseInt(getChartId)
            })
        }

    }

    getChart = (e) => {
        let elem = e.target;
        let chartId = e.target.getAttribute('chartId');
        this.setState({
            selectedChart: parseInt(chartId)
        });
    }

    veriryChart = () => {
        sessionStorage.setItem('chartId',this.state.selectedChart);
        this.props.history.push('/value')
    }

    render(){
        return(
            <>
                <Row>
                    {
                        this.state.charts.map( (d,i) =>
                            <Col key={i} sm={3}>
                                <Card className={this.state.selectedChart === d.id ? "sChart active" : "sChart"}  onClick={this.getChart}  chartId={d.id}>
                                    <Card.Body style={{pointerEvents:"none"}}>
                                        <Card.Img height="200px" width="150px" variant="top" src={d.img}/>

                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                </Row>

                {this.state.selectedChart == null && <Button className="mt-5 pl-5 btn-success pr-5 disabled">Next</Button>}
                {this.state.selectedChart != null && <Button className="mt-5 pl-5 btn-success pr-5" onClick={this.veriryChart}>Next</Button>}
            </>
        )
    }
}
export default SelectChats;