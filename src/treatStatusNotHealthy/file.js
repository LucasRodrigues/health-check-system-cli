import path from 'path';
import extName from 'ext-name';

export default class File {

  static _isValid(path) {
    const validExtension = 'js';
    const fileExt = extName(path);

    return validExtension === fileExt.ext;
  }

  static do(status, filePath) {
    return new Promise((resolve, rejected) => {
      if (this._isValid(filePath)) {
        const errorThreat = require(path.join(process.env.HOME, filePath));

        errorThreat(status)
          .then(() => {
            resolve();
          })
          .catch(() => {
            rejected('Error on file method');
          });
      } else {
        rejected('File type not valid, only accepted js file');
      }
    });
  }
}
