import request from 'request-promise';

export default class Url {

  static do(statuses, url) {
    return new Promise((resolve, rejected) => {
      const options = {
        method: 'POST',
        uri: url,
        json: true,
        form: {
          statuses: statuses
        },
        resolveWithFullResponse: true
      };

      request.post(options)
        .then(response => {
          if (response.statusCode === 200) {
            resolve();
          } else {
            rejected();
          }
        })
        .catch(error => {
          rejected(error);
        });
    });
  }
}
