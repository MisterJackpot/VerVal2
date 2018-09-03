import React from "react";
import styles from "./LoginInputComponent.css";
type Props= {};
export default class LoginInputComponent extends React.Component{
    render(){
        return(
            <div>
                <input className={styles.input} placeholder="SENHA" type="password"> 
                
                </input>
            </div>
        )
    }
}