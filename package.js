Package.describe({
  summary: "JavaScript Alert/Notification System for Meteor. http://fabien-d.github.com/alertify.js/"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');

  api.add_files('vendor/lib/alertify.js', 'client');
  api.add_files('vendor/themes/alertify.core.css', 'client');
  api.add_files('vendor/themes/alertify.default.css', 'client');
  api.add_files('main.js', 'client');

  if (api.export){
    api.export('alertify', 'client');
  }
});
