Package.describe({
  summary: "JavaScript Alert/Notification System for Meteor. http://fabien-d.github.com/alertify.js/",
  version: "0.3.11",
  git: "https://github.com/ovcharik/meteor-alertify"
});

Package.on_use(function (api) {
  api.versionsFrom && api.versionsFrom("METEOR@0.9.0");

  api.add_files('vendor/lib/alertify.js', 'client');
  api.add_files('vendor/themes/alertify.core.css', 'client');
  api.add_files('vendor/themes/alertify.default.css', 'client');
  api.add_files('main.js', 'client');

  if (api.export){
    api.export('alertify', 'client');
  }
});
