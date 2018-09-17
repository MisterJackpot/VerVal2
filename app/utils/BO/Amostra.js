import Amostra from './../DB/DAO/Amostra';
import { element } from 'prop-types';
const fs = require('fs');

const AmostraBO = {
  insert: amostra => {
    return new Promise((resolve, error) => {
      Amostra.getIds().then(result => {
        console.log(result);
        var aux = '';
        var errorList = [];
        amostra.forEach(element => {
          aux = '';
          aux = result.find(id => {
            return (id.id = element[0]);
          });

          if (aux != undefined) errorList.push(aux.id);
        });

        if (errorList != []) {
          let textError = 'Amostras já existentes:\n';
          errorList.forEach(element => {
            textError = textError.concat(element + '\n');
          });
          fs.writeFile('erros.txt', textError, err => {
            if (err) throw err;
            console.log('Salvo!');
          });
          error(errorList);
        } else {
          Amostra.insert(amostra).then(
            () => {},
            err => {
              error(err);
            }
          );
        }
      });
    });
  }
};

export default AmostraBO;
