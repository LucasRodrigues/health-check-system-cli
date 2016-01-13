# Health Check System Command line

A client on command line to Health Check System (https://github.com/LucasRodrigues/health-check-system)

## CI
[![Circle CI](https://circleci.com/gh/LucasRodrigues/health-check-system-cli.svg?style=svg)](https://circleci.com/gh/LucasRodrigues/health-check-system-cli)

## Install

npm install -g health-check-system-cli

## Commands

    -i --input File or Url source of configuration file
    -r --prettyResult   Result in pretty format
    -e --errorHandler  File or Url to handle error on case of bad health

###

## Examples

### Get configuration from file and print result

<pre>
    healthCheckSystem -i /Documents/configuration.json -r
</pre>

### Get configuration from url and run file handler in case of error

<pre>
    healthCheckSystem -i https://mysite/configurations -e /Documents/errorHandler.js
</pre>

## Help

### Configuration File
For configuration file structure [visit](https://github.com/LucasRodrigues/health-check-system/blob/master/readme.md#json-format)

### Error handling

#### Archive

Create a javascript file with this content

```js
function error(status) {
    return new Promise(function(resolve,rejected){
        \\ Your code here
       
    });
}

module.exports = error
```

#### Url
