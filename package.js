Package.describe({
  name: "cscottnet:alertify-bootstrap",
  summary: "Alert/Notification System, bootstrap theme. http://fabien-d.github.com/alertify.js/",
  version: "0.3.11",
  git: "https://github.com/cscott/meteor-alertify"
});

Package.on_use(function (api) {
  api.add_files('vendor/lib/alertify.js', 'client');
  api.add_files('vendor/themes/alertify.core.css', 'client');
  api.add_files('vendor/themes/alertify.bootstrap.css', 'client');
  api.add_files('export.js', 'client');

  if (api.export){
    api.export('alertify', 'client');
  }
});

Package.on_test(function (api) {
  api.use(['cscottnet:alertify-bootstrap', 'underscore', 'tinytest', 'test-helpers'], 'client');
  api.add_files(['alertify-tests.js'], 'client');
});
