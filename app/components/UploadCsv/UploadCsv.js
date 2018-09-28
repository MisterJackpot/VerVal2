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
            position: 'relative',
            width: '12rem',
            height: '12rem',
            borderWidth: '2px',
            borderColor: 'gray',
            backgroundColor:'whitesmoke',
            borderStyle: 'dashed',
            borderRadius: '5px',
            textAlign:'center',
            display: 'table-cell',
            verticalAlign: 'middle'
          }}
        >
          <span style={{fontWeight:'bold'}}>Arraste um arquivo csv ou clique aqui.</span>
        </Dropzone>
      </div>
    );
  }
}

// position: relative;
// width: 200px;
// height: 200px;
// border-width: 2px;
// border-color: red;
// border-style: dashed;
// border-radius: 5px;
