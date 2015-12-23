import request from 'request-promise';

export default class Url {

  static get(url) {
    return new Promise((resolve, rejected) => {
      const options = {
        method: 'GET',
        uri: url,
        json: true,
        resolveWithFullResponse: true
      };

      request(options)
        .then(response => {
          if (response.statusCode === 200) {
            resolve(response.body);
          } else {
            rejected('Status code is different from 200');
          }
        })
        .catch(error => {
          rejected(error);
        });
    });
  }
}
