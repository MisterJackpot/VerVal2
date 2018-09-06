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
                       value = {this.props.password}
                       onChange= {this.props.onChange}/>
                <button style={{marginTop:'12px'}} onClick={this.togglePasswordMask}>
                    troca tipo
                </button>
            </div>
        )
    }

}
