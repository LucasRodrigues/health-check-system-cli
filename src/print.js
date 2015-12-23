import prettyjson from 'prettyjson';

export default class Print {

  static do(result, isPrettyResult) {
    if (isPrettyResult) {
      result = prettyjson.render(result);
    }
    console.log(result);
  }
}
