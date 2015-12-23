import TreatStatusNotHealth from './treatStatusNotHealthy/process';
import Print from './print';

export default class Output {

  static do(path, result, pretty) {
    return new Promise((resolve, rejected) => {
      if (path) {
        if (!result.health) {
          TreatStatusNotHealth.do(result, path)
            .then(() => {
              resolve();
            })
            .catch(err => {
              rejected(err);
            });
        }
      } else {
        Print.do(result, pretty);
        resolve();
      }
    });
  }
}
