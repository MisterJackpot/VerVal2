import React from "react";
import { Link } from 'react-router-dom';
import styles from './ChangeGraphComponent.css';

type Props = {};

export default class ChangeGraphComponent extends React.Component{
    props: Props;

    render() {
        const {path} = this.props
        return(
            <div>
                <label className={styles.switch}>
                    <input type="checkbox" onClick={this.props.click} />
                    <span className={styles.slider}></span>
                </label>
            </div>
        )
    }
}