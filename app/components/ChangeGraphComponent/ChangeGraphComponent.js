import React from "react";
import Select from 'react-select';

export default class ChangeGraphComponent extends React.Component{

    props: Props;

    render(){
        const {path} = this.props;
        
        const options = [
            {value: '0', label: '3D'},
            {value: '1', label: 'P1-P2'}
        ]
        const customStyles = {
            control: (base, state) => ({
              ...base,
              width: "18%",
              background: "whitesmoke"
            }),
            menu: state => ({
              ...state,  
              width: "18%",
              position:"absolute",
              left:"41%",
            }),
            menuList: base => ({
                ...base,
              borderRadius: "4px",
              // kill the white space on first and last option
              padding: 0
            })
          };
        return(
            <div>
                <Select styles={customStyles} options={options} onChange={this.props.change} defaultValue={{value: '0', label: '3D'}}/>
            </div>
        )
    }
}