module.exports = (grunt) ->
  grunt.initConfig
    
    # CoffeeScript compilation
    coffee:
      compile:
        files:
          "core/background.js": "src/background.coffee"
          "core/on_click.js": "src/on_click.coffee"

  grunt.loadNpmTasks "grunt-contrib-coffee"
  grunt.registerTask "default", ["coffee"]
