import React from 'react';
import Dropzone from 'react-dropzone';


type Props = {};

export default class UploadCsv extends React.Component {
  onDrop(acceptedFiles, rejectedFiles) {
    const { rejectedFunction, acceptedFunction } = this.props;

    if (acceptedFunction && acceptedFiles) {
      acceptedFunction(acceptedFiles);
    }
    if (rejectedFunction && rejectedFiles) {
      rejectedFunction(rejectedFiles);
    }
  }

  render() {
    return (
      <div>
        <Dropzone
          accept=".csv"
          onDrop={(accepted, rejected) => this.onDrop(accepted, rejected)}
          style={{    
            padding: '14%',
            minHeight: '5rem',
            minWidth: '11rem',
            borderWidth: '2px',
            borderColor: 'gray',
            backgroundColor:'whitesmoke',
            borderStyle: 'solid',
            borderRadius: '.5rem',
            textAlign:'center',
            display: 'table-cell'        
          }}
          rejectStyle={{
            padding: '14%',
            minHeight: '5rem',
            minWidth: '11rem',
            borderWidth: '2px',
            borderColor: 'red',
            backgroundColor:'whitesmoke',
            borderStyle: 'solid',
            borderRadius: '.5rem',
            textAlign:'center',
            display: 'table-cell'  
          }}
          acceptStyle={{
            padding: '14%',
            minHeight: '5rem',
            minWidth: '11rem',
            borderWidth: '2px',
            borderColor: 'green',
            backgroundColor:'whitesmoke',
            borderStyle: 'solid',
            borderRadius: '.5rem',
            textAlign:'center',
            display: 'table-cell'  
          }}
        >
          <span style={{fontWeight:'bold'}}>Arraste um arquivo csv ou clique aqui.</span>
        </Dropzone>
      </div>
    );
  }
}

