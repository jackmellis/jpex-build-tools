var Jpex = require('jpex');
var App = Jpex.extend(function($fs, path, $log){
  var base = path.resolve('.') + path.sep;
  var filename = base + 'coverage/lcov.info';
  $log('lcov-fix');
  $log('Reading ' + filename);
  $fs.readFile(filename, 'utf8')
    .then(function(data){
      while (data.indexOf(base) > -1){
        data = data.replace(base, '');
      }
      return data.replace(/\\/g, '/');
    })
    .then(function(data){
      $log('Writing to ' + base + 'lcov.inf');
      return $fs.writeFile(base + 'lcov.info', data, 'utf8');
    })
    .catch(function (err) {
      $log.error(err.message);
    });
});

App();
