import commander from 'commander';

export default class CommanderConfiguration {

  static get() {
    const version = '0.0.1';
    const parameterPath = {
      name: '-i --input [input]',
      description: 'File or Url source of configuration file'
    };
    const parameterPrettyResult = {
      name: '-r --prettyResult',
      description: 'Result in pretty format'
    };
    const parameterFileCaseError = {
      name: '-e --errorHandler [errorHandler]',
      description: 'File or Url to handle error on case of bad health'
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
