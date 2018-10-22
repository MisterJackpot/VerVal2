import React from "react";
import styles from "./AGNESComponent.css";
import { Link } from 'react-router-dom';
import AGNES from '../../utils/BO/AGNESBO.js'
type Props = {};

export default class AGNESComponent extends React.Component{
    props: Props;
     
    async doAgnes(){
        let matrix = (await AGNES.clusterize());
        console.log(matrix);  
    }
    render() {
        const {path} = this.props
        return(
            <div>
                <button className={styles.button} onClick={this.doAgnes} type="button" align="center">
                     {this.props.text}
                </button>
            </div>
        )
    }

}