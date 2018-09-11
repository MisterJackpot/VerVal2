// @flow
import React, { Component } from 'react';
import routes from '../../constants/routes.json';
import styles from './Home.css';
import ImageWrapperComponent from '../../components/ImageWrapperComponent/ImageWrapperComponent';
import LoginInputComponent from '../../components/LoginInputComponent/LoginInputComponent';
import UploadCsv from '../../components/UploadCsv/UploadCsv';
import NavigateButtonComponent from '../../components/NavigateButtonComponent/NavigateButtonComponent';
import Senha from '../../utils/DB/DAO/Senha';
import InputComponent from '../../components/LoginInputComponent/InputComponent';
import { Redirect } from 'react-router';

type Props = {};

export default class HomeContainer extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      password: '',
      loginPermit: true
    };
  }

  validarSenha = () => {
    Senha.getSenha().then((result) => {
      if(result == this.state.password) {
        this.setState({loginPermit: true});
      }else {
        alert("Senha inválida");
      }
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