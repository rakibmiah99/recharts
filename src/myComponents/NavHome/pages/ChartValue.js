import React,{Component} from "react";
import {Button, Card} from "react-bootstrap";
import cogoToast from "cogo-toast";

class ChartValue extends Component{
    constructor(props) {
        super(props);

        this.state = {
            lastItemId: 0,
            elems: [],
            clInp: null,
            cvInp: null,
            inpFeilds: [],
            isFeildError: false
        }
    }
    componentDidMount() {
        let getChartId = sessionStorage.getItem('chartId');
        if(getChartId == null){
            this.props.history.push('/');
        }
    }
    addItem = () => {
        const newItem = {id: this.state.lastItemId,labelName: 'label',valueName: 'value'};
        const newItems = [...this.state.elems,newItem];

        const values = [...this.state.inpFeilds];
        values[this.state.lastItemId] = {id: this.state.lastItemId,label:'',value: ''};
        this.setState({
            elems: newItems,
            lastItemId : this.state.lastItemId+1,
            inpFeilds: values
        });
    }
    deleteItem = (e) => {
        let getItemId = e.target.getAttribute('id');
        let filterItems = this.state.elems.filter((item) => parseInt(item.id) !== parseInt(getItemId));
        let filterInput = this.state.inpFeilds.filter((item) => item.id !== parseInt(getItemId));
        console.log(filterInput)

        this.setState({
            elems: filterItems,
            inpFeilds: filterInput
        });
    }

    labeInputHandle = (event) => {
        let getInpKey = event.target.getAttribute('inpKey');
        let name = event.target.name;
        let value= event.target.value;
        const values = [...this.state.inpFeilds];
        if(name === 'label'){
            this.setState({
                clInp: value
            });
            values[getInpKey] = {id: parseInt(getInpKey),label:value,value: parseInt(this.state.cvInp)};
        }
        if(name === 'value'){
            this.setState({
                cvInp: value
            });
            values[getInpKey] = {id: parseInt(getInpKey),label:this.state.clInp,value: parseInt(value)};
        }



        this.setState({
            inpFeilds: values,
        });
    }


    preview = () => {
        console.log(this.state.inpFeilds);
        let get = this.state.inpFeilds.filter((data) => (data.label === "" || data.label == null) || (data.value === "" || data.value ==null));
        if(get.length >0){
            cogoToast.error('some input feild is empty.')
        }else{
            cogoToast.success('all input is set.')
            let arr = JSON.stringify(this.state.inpFeilds)
            sessionStorage.setItem('values',arr);
            this.props.history.push('/preview');
        }
    }

    runOnClick(action,index,event){
            this.setState({
                clInp: null,
                cvInp: null
            })

    }
    render(){
        return(
            <>
                <Button onClick={this.addItem} className='btn btn-success mb-2'>Add New</Button>
                {
                    this.state.elems.map((e,i) =>
                        <Card key={i} className="mt-1">
                            <Card.Body className='m-0 p-0'>
                                <div className="d-flex align-items-center">
                                    <div className='form-group'>
                                        <label>Label</label>
                                        <input inpkey={e.id} ref={(input) => {this.labelInput = input}} onClick={this.runOnClick.bind(this,e,i)} onChange={this.labeInputHandle} type='text' name={e.labelName} className='form-control'/>
                                    </div>
                                    <div className='form-group ml-3 mr-3'>
                                        <label>Value</label>
                                        <input inpkey={e.id} onChange={this.labeInputHandle} type='number' name={e.valueName} className='form-control'/>
                                    </div>
                                    <Button id={e.id} onClick={this.deleteItem.bind(this)} className='btn mt-3 btn-danger'>Delete</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    )
                }
                <br></br>
                <Button className='btn-success' onClick={this.preview}>Preview</Button>
            </>
        )
    }
}
export default ChartValue;