import AmostraDAO from '../DB/DAO/AmostraDAO';
import { element } from 'prop-types';
const fs = require('fs');
const csv = require('fast-csv');

const AmostraBO = {
  readCSV: file => {
    return new Promise((resolve, error) => {
      var stream = fs.createReadStream(file[0].path);
      let result = [];
      var csvStream = csv()
        .on('data', function(data) {
          data.forEach((element, index) => {
            if (!result[index]) {
              result[index] = [];
            }
            if (data[0] != '' && index >= 1) {
              result[index].push(parseFloat(element.replace(',', '.')));
            } else result[index].push(element);
          });
        })
        .on('end', function() {
          result.splice(0, 1);
          result.forEach(element => {
            element.splice(2, 1);
            var d = new Date();
            element.push(d);
          });
          AmostraBO.insert(result).then(
            result => {resolve(result)},
            err => {
              error(err);
            }
          );
        });
      stream.pipe(csvStream);
    });
  },

  insert: amostra => {
    return new Promise((resolve, error) => {
      AmostraDAO.getIds().then(result => {
        console.log(result);
        var aux = '';
        var errorList = [];
        amostra.forEach(element => {
          aux = '';
          aux = result.find(id => {
            return (id.id = element[0]);
          });

          if (aux != void 0) errorList.push(aux.id);
        });

        console.log(errorList)
        console.log(amostra)
        if (errorList.length > 0) {
          let textError = 'Amostras já existentes:\n';
          errorList.forEach(element => {
            textError = textError.concat(element + '\n');
          });
          const dir = './log';
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
          }
          var date = new Date()
            .toISOString()
            .replace(/T/, ' ')
            .replace(/\..+/, '');
          const f = './log/AmostrasRepetidas ' + date + '.txt';
          const file = fs.writeFile(f, textError, err => {
            if (err) throw err;
          });
          error(f);
        } else {
          AmostraDAO.insert(amostra).then(
            result => {resolve(result)},
            err => {
              error(err);
            }
          );
        }
      });
    });
  },

  getAmostras: () => {
    return new Promise((resolve, error) => {
      AmostraDAO.getIds().then(result => {
        return result;
      });
    });
  }
};

export default AmostraBO;
