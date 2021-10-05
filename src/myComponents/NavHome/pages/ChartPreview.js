import React,{Component, PureComponent} from "react";
import {Button} from "react-bootstrap";
import cogoToast from "cogo-toast";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,PieChart, Pie, Cell, BarChart,Bar} from 'recharts';
import {saveAs} from 'file-saver';
import html2canvas from "html2canvas";

class ChartPreview extends Component{
    constructor(props) {
        super(props);

        this.state = {
            chartId: null,
           values: [],
            data : [
                {
                    name: 'Page A',
                    uv: 4000,
                    pv: 2400,
                    amt: 2400,
                },
                {
                    name: 'Page B',
                    uv: 3000,
                    pv: 1398,
                    amt: 2210,
                },
                {
                    name: 'Page C',
                    uv: 2000,
                    pv: 9800,
                    amt: 2290,
                },
                {
                    name: 'Page D',
                    uv: 2780,
                    pv: 3908,
                    amt: 2000,
                },
                {
                    name: 'Page E',
                    uv: 1890,
                    pv: 4800,
                    amt: 2181,
                },
                {
                    name: 'Page F',
                    uv: 2390,
                    pv: 3800,
                    amt: 2500,
                },
                {
                    name: 'Page G',
                    uv: 3490,
                    pv: 4300,
                    amt: 2100,
                },
            ]

        }
    }

    componentDidMount() {
        // check chart
        let getChartId = sessionStorage.getItem('chartId');
        if (getChartId == null){
            this.props.history.push('/');
            cogoToast.error('Please Select A Chart');
        }else{
            //check values
            let getValues = JSON.parse(sessionStorage.getItem('values'));
            if (getValues == null){
               this.props.history.push('/value')
                cogoToast.error('Please Select Some Value');
            }else{
                let getValues = JSON.parse(sessionStorage.getItem('values'));
                // let values = getValues;
                this.setState({
                    values: getValues,
                    chartId: parseInt(getChartId)
                })
            }
        }
    }

    downloadChart(){
        html2canvas(document.getElementById('chart')).then(function(canvas) {
            canvas.toBlob(function(blob) {
                saveAs(blob, "react-chart.png");
            });
        });
    }

    render(){
        console.log(this.state.values)
        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

        const RADIAN = Math.PI / 180;
        const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);

            return (
                <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                    {`${(percent * 100).toFixed(0)}%`}
                </text>
            );
        };
        return(
            <>
                {this.state.chartId === 1 &&
                    <>
                        <div id="chart">
                            <LineChart
                                width={500}
                                height={300}
                                data={this.state.values}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="label" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />

                            </LineChart>
                        </div>

                        <Button className="text-center mt-3 ml-5 pl-5 pr-5" onClick={this.downloadChart}> Download</Button>
                    </>


                }

                {/*pie chart*/}
                {this.state.chartId === 2 &&
                    <>
                        <div id="chart">
                            <PieChart width={400} height={400}>
                                <Pie
                                    data={this.state.values}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {this.state.values.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </div>
                        <Button className="text-center mt-3 ml-5 pl-5 pr-5" onClick={this.downloadChart}> Download</Button>
                    </>
                }

                {this.state.chartId === 3 &&
                <>
                    <div id="chart">
                        <BarChart width={150} height={40} data={this.state.values}>
                            <Bar dataKey="value" fill="#8884d8" />
                        </BarChart>
                    </div>
                    <Button className="text-center mt-3 ml-5 pl-5 pr-5" onClick={this.downloadChart}> Download</Button>
                </>
                }

            </>
        )
    }
}
export default ChartPreview;