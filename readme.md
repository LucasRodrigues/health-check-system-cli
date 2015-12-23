# Health Check System Command line

A client on command line to Health Check System (https://github.com/LucasRodrigues/health-check-system)

## CI
[![Circle CI](https://circleci.com/gh/LucasRodrigues/health-check-system-cli.svg?style=svg)](https://circleci.com/gh/LucasRodrigues/health-check-system-cli)

## Install

npm install -g health-check-system-cli

## Commands

    -p --path   Path of configuration file
    -r --prettyResult   Result in pretty format
    -e --errorTreatPath  In case of bad health run file
    
## Help

### Configuration File
For configuration file structure [visit](https://github.com/LucasRodrigues/health-check-system/blob/master/readme.md#json-format)

### Treat File

Create a javascript file with this content

```js
function error(status) {
    return new Promise(function(resolve,rejected){
        \\ Your code here
       
    });
}

module.exports = error
```
