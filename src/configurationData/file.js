import fs from 'fs';
import path from 'path';
import extName from 'ext-name';

export default class File {

  static _isValid(path) {
    const validExtension = 'json';
    const fileExt = extName(path);

    return validExtension === fileExt.ext;
  }

  static get(filePath) {
    return new Promise((resolve, rejected) => {
      if (this._isValid(filePath)) {
        const callbackReadFile = (err, data) => {
          if (err) {
            rejected(err);
          } else {
            const jsonIt = JSON.parse(data);
            resolve(jsonIt);
          }
        };
        const filePathFormatted = path.join(process.env.HOME, filePath);

        fs.readFile(filePathFormatted, 'utf8', callbackReadFile);
      } else {
        rejected('File type not valid, only accepted json file');
      }
    });
  }
}
