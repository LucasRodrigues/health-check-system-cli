import commander from 'commander';

export default class CommanderConfiguration {

  static get() {
    const version = '0.0.1';
    const parameterPath = {
      name: '-p --path [path]',
      description: 'Path of configuration file'
    };
    const parameterPrettyResult = {
      name: '-r --prettyResult',
      description: 'Result in pretty format'
    };
    const parameterFileCaseError = {
      name: '-e --errorFilePath [errorFile]',
      description: 'File to run case health is bad'
    };

    commander
      .version(version)
      .option(parameterPath.name, parameterPath.description)
      .option(parameterPrettyResult.name, parameterPrettyResult.description)
      .option(parameterFileCaseError.name, parameterFileCaseError.description)
      .parse(process.argv);

    return commander;
  }

}
