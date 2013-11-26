module.exports = (grunt) ->
  grunt.initConfig  
    # CoffeeScript compilation
    coffee:
      compile:
        files:
          "core/background.js": "src/background.coffee"
          "core/on_click.js": "src/on_click.coffee"

    # Watch definitions
    watch:
      files: ["src/background.coffee", "src/on_click.coffee"]
      tasks: ["coffee"]

  grunt.loadNpmTasks "grunt-contrib-coffee"
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.registerTask "default", ["coffee"]
