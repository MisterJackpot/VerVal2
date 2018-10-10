import React from "react";
import styles from './ChangeGraphComponent.css';
import Select from 'react-select';

export default class ChangeGraphComponent extends React.Component{

    props: Props;

    render(){
        const {path} = this.props;
        
        const options = [
            {value: '0', label: '3D'},
            {value: '1', label: 'P1-P2'}
        ]
    
        return(
            <div id='select'>
                <Select options={options} onChange={this.props.change} defaultValue={{value: '0', label: '3D'}}/>
            </div>
        )
    }
}