import React from "react";
import styles from "./InputComponent.css";

type Props = {};

export default class InputComponent extends React.Component{
    props: Props;

    constructor(props) {
        super(props);

        this.state = {
          passwordIsMasked: true,
        };
      }

      togglePasswordMask = () => {
        this.setState(prevState => ({
          passwordIsMasked: !prevState.passwordIsMasked,
        }));
      };

    render() {
        const { passwordIsMasked } = this.state;
        return(
             <div className={styles.container} >
                <input className={styles.input} placeholder="Senha"
                       type={passwordIsMasked ? 'password' : 'text'}
                       onChange = {this.props.onChange} />
                <div className={styles.eyeButton} onClick={this.togglePasswordMask}></div>   
            </div>
        )
    }

}
