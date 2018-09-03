import React from "react";
import styles from "./NavigateButtonComponent.css";
import { Link } from 'react-router-dom';


type Props = {};

export default class NavigateButtonComponent extends React.Component{
    props: Props;

    render() {
        const {path} = this.props;

        return(
            <div>
                <Link to={this.props.navigate}>
                    <button className={styles.buttonLogin} type="button" align="center">{this.props.text}</button>
                </Link>
            </div>
        )
    }

}