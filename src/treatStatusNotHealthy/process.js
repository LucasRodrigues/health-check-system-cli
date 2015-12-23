import Url from './url';
import File from './file';
import validUrl from 'valid-url';

export default class Process {

  static do(statuses, path) {
    return new Promise((resolve, rejected) => {
      let processTreatStatusNotHealthy = validUrl.isWebUri(path) ? Url : File;

      processTreatStatusNotHealthy.do(statuses, path)
        .then(result => {
          resolve(result);
        })
        .catch(error => {
          rejected(error);
        });
    });
  }
}
