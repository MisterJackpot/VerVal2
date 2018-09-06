// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';
import styles from './Home.css';
import ImageWrapperComponent from '../../components/ImageWrapperComponent/ImageWrapperComponent';
import LoginInputComponent from '../../components/LoginInputComponent/LoginInputComponent';
import UploadCsv from '../../components/UploadCsv/UploadCsv';
import NavigateButtonComponent from '../../components/NavigateButtonComponent/NavigateButtonComponent';
import Senha from '../../utils/DB/DAO/Senha';
import InputComponent from '../../components/LoginInputComponent/InputComponent';

type Props = {};

export default class HomeContainer extends Component<Props> {

  constructor(props) {
    super(props);

    this.state = {
      password: '',
    };
  }

  validarSenha = (passwordInput) => {
    passwordInput = this.state.password;
    Senha.getSenha(function(result){
      if(passwordInput == result) {
        console.log("Senha correta");
      }
      else console.log("Senha errada");
    });
  }

  onChange = (event) => {
    this.setState({password: event.target.value});
  };

  render() {
    const { password } = this.state;
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