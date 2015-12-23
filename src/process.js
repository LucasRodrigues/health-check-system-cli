import ConfigurationData from './configurationData/process';
import HealthCheckSystem from 'health-check-system';

export default class Process {

  static do(path) {
    return new Promise((resolve, rejected) => {
      ConfigurationData.get(path)
        .then(configurations => {
          return HealthCheckSystem.do(configurations);
        })
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          rejected(err);
        });
    });
  }
}
