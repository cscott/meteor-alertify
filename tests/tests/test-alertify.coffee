assert = require 'assert'

suite 'Alertify', ->

  test 'Environment setup', (done, server, client) ->
    client.eval ->
      Meteor.startup ->
        emit 'isAlertifyExist', alertify?

    client.once 'isAlertifyExist', (expectTrue) ->
      assert expectTrue
      done()

  test 'Alertify API', (done, server, client) ->
    client.eval ->
      Meteor.startup ->
        emit 'isAlertifyApi', _.every [
          alertify.alert?
          alertify.confirm?
          alertify.prompt?
          alertify.log?
          alertify.success?
          alertify.error?
        ]

    client.once 'isAlertifyApi', (expectTrue) ->
      assert expectTrue
      done()
