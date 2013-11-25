module.exports = (grunt) ->
  grunt.initConfig
    pkg: '<json:package.json>'

    connect:
      server:
        options:
          keepalive: true
          port: 9000
          base: 'build'

    browserify:
      default:
        options:
          transform: ['coffeeify']
        files:
          'build/app_es.js': ['src/**/*.coffee']

  grunt.loadNpmTasks 'grunt-contrib-connect'
  grunt.loadNpmTasks 'grunt-browserify'

  grunt.registerTask 'default', ['browserify']
