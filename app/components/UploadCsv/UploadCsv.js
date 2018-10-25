import React from 'react';
import Dropzone from 'react-dropzone';
import styles from './UploadCsv.css';


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
          className={styles.csv}
          rejectStyle={{borderColor: 'green'}}
        >
          <span id="dropzoneText" >Arraste um arquivo csv ou clique aqui.</span>
        </Dropzone>
      </div>
    );
  }
}

