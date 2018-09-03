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
        >
          <span>Arraste um arquivo csv aqui.</span>
        </Dropzone>
      </div>
    );
  }
}
