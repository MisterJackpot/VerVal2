import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MyChart from '../../components/MyCharts/MyChart';
import UploadCSV from '../../components/UploadCsv/UploadCsv';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';


type Props = {};

export default class CounterPage extends Component<Props> {
    props: Props;

    teste(file){
      var stream = fs.createReadStream(file[0].path);
      let result = [];
      var csvStream = csv()
      .on("data", function(data){
           data.forEach((element, index) => {
             if(!result[index]){
              result[index] = []
             }
             result[index].push(element)
           });
      })
      .on("end", function(){
        return new Promise(()=>{
          result.splice(0,1)
          result.splice(1,1)
        }).then(()=>{
          result.forEach(element => {
            console.log(JSON.stringify(element))
          }); 
        })

      });


      stream.pipe(csvStream);

    }

    render() {
    return( 
      <div>
      <Link to={routes.HOME}>
      <i className="fa fa-arrow-left fa-3x" />
    </Link>
    <UploadCsv acceptedFunction={this.teste} />
    </div>
  );
    }
    render() {
      return (
        <div>
        <Link to={routes.HOME}>
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
        <UploadCSV acceptedFunction={(file)=>console.log(file)} />
        </div>
      )}
  }
