import Process from './process';
import CommanderConfiguration from './commanderConfiguration';
import Output from './output';

export default class Main {

  static _finish() {
    process.exit();
  }

  static init() {
    const commander = CommanderConfiguration.get();

    if (commander.path) {
      Process.do(commander.path)
        .then(result => {
          return Output.do(
            commander.errorFilePath,
            result,
            commander.prettyResult
          );
        })
        .then(() => {
          this._finish();
        })
        .catch(err => {
          console.log(err);
          this._finish();
        });
    } else {
      console.log('Path necessary');
      this._finish();
    }
  }
}
