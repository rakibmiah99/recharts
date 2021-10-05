import React, {Component} from "react";
import {Link} from 'react-router-dom';
class Nav extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isChartSelected: false,
            isValue: false
        }
    }

    componentDidMount() {
        // check chart
        let getChartId = sessionStorage.getItem('chartId');
        if (getChartId == null){
            this.setState({
                isChartSelected: false
            })
        }else{
            this.setState({
                isChartSelected: true
            })
        }
        //check values
        let getValues = JSON.parse(sessionStorage.getItem('values'));
        if (getValues == null){
            this.setState({
                isValue: false
            })
        }else{
            this.setState({
                isValue: true
            })
        }
    }

    render(){
        return(
            <>
                <div  className="navbar navbar navbar-expand-sm bg-white mt-2 mb-2 shadow-sm">
                    <a className="navbar-brand" href="#">React Chart Application</a>

                   <ul className='navbar-nav'>
                       <li className="nav-item">
                           <Link className='tabItem nav-link' to='/'>Select A Chart</Link>
                       </li>
                       <li className="nav-item">
                           <Link className={this.state.isChartSelected?'tabItem nav-link':'tabItem nav-link disable'} to='/value'>Chart Value</Link>
                       </li>
                       <li className="nav-item">
                           <Link className={this.state.isChartSelected && this.state.isValue?'tabItem nav-link':'tabItem nav-link disable'} to='/preview'>Preview</Link>
                       </li>

                   </ul>
                </div>
            </>
        )
    }
}
export default Nav;