import React from "react";
import styles from "./EuclideanComponent.css";
import { Link } from 'react-router-dom';
import Euclides from '../../utils/BO/EuclideanBO.js';
type Props = {};

export default class EuclideanComponent extends React.Component{
    props: Props;
    async doEuclidean(){
        console.log(await Euclides.getAllCorrelation("082.2"));
    }
    
    
    render() {
        const {path} = this.props
        return(
            <div>
                <button className={styles.button} onClick={this.doEuclidean} type="button" align="center">
                     {this.props.text}
                </button>
            </div>
        )
    }

}