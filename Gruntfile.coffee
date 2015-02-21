module.exports = (grunt) ->
  grunt.initConfig
    coffee:
      compile:
        files:[
          expand: true
          cwd: 'src/'
          src: ['**/*.coffee']
          dest: 'extension/js/'
          ext: '.js'
        ]

    cson:
      glob_to_multiple:
        expand: true
        flatten: true
        src: ['src/**/*.cson' ]
        dest: 'extension'
        ext: '.json'

    watch:
      files: 'src/**/*.coffee',
      tasks: ['coffee']

  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-cson'
  grunt.registerTask 'default', ['cson', 'coffee', 'watch']
