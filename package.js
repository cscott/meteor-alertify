Package.describe({
  summary: "JavaScript Alert/Notification System for Meteor. http://fabien-d.github.com/alertify.js/",
  version: "0.3.11",
  git: "https://github.com/ovcharik/meteor-alertify"
});

Package.on_use(function (api) {
  api.add_files('vendor/lib/alertify.js', 'client');
  api.add_files('vendor/themes/alertify.core.css', 'client');
  api.add_files('vendor/themes/alertify.default.css', 'client');
  api.add_files('export.js', 'client');

  if (api.export){
    api.export('alertify', 'client');
  }
});

Package.on_test(function (api) {
  api.use(['ovcharik:alertify', 'underscore', 'tinytest', 'test-helpers'], 'client');
  api.add_files(['alertify-tests.js'], 'client');
});
