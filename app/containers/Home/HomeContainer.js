// @flow
import React, { Component } from 'react';
import routes from '../../constants/routes.json';
import styles from './Home.css';
import ImageWrapperComponent from '../../components/ImageWrapperComponent/ImageWrapperComponent';
import LoginInputComponent from '../../components/LoginInputComponent/LoginInputComponent';
import UploadCsv from '../../components/UploadCsv/UploadCsv';
import NavigateButtonComponent from '../../components/NavigateButtonComponent/NavigateButtonComponent';
import { validarSenhaLogin } from '../../utils/BO/SenhaBO';
import InputComponent from '../../components/LoginInputComponent/InputComponent';
import { Redirect } from 'react-router';

type Props = {};

export default class HomeContainer extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      password: '',
      loginPermit: false
    };
  }

  validarSenha = () => {
    validarSenhaLogin(this.state.password).then(result =>{
      if(!result){
        alert("Senha inválida.");
      }
      this.setState({loginPermit:result});
    });
  }

  onChange = (event) => {
    this.setState({password: event.target.value});
  };

  render() {
    const { password,loginPermit } = this.state;
    if(loginPermit) {
      return <Redirect push={true} to= 'COUNTER'/>
    }
    return (
        <div className={styles.container} align="center" data-tid="container">
            <ImageWrapperComponent path={'./Assets/federages.png'}/>
            <InputComponent onChange={this.onChange}/> 
            <NavigateButtonComponent text="Entrar" click={this.validarSenha}/>
        </div>
    );
  }
  props: Props;
}