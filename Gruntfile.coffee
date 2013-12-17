module.exports = (grunt) ->
  grunt.initConfig  
    # CoffeeScript compilation
    coffee:
      compile:
        files:[
          expand: true
          cwd: 'src/'
          src: ['**/*.coffee']
          dest: 'core/'
          ext: '.js'
        ]

    # Watch definitions
    watch:
      files: "src/**/*.coffee",
      tasks: ["coffee"]

  grunt.loadNpmTasks "grunt-contrib-coffee"
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.registerTask "default", ["coffee"]
