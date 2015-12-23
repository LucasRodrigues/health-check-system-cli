import url from './url';
import file from './file';
import validUrl from 'valid-url';

export default class Process {

  static get(path) {
    return new Promise((resolve, rejected) => {
      let getData = validUrl.isWebUri(path) ? url : file;

      getData.get(path)
        .then(result => {
          resolve(result);
        })
        .catch(error => {
          rejected(error);
        });
    });
  }
}
