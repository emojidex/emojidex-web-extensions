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

    copy:
      lib:
        files: [
          {
            expand: true
            flatten: true
            cwd: 'node_modules/emojidex/dist/js'
            src: 'emojidex.min.js'
            dest: 'extension/js/lib'
          }
        ]

    watch:
      coffee:
        files: 'src/**/*.coffee',
        tasks: ['copy', 'coffee']
      cson:
        files: 'src/**/*.cson',
        tasks: ['cson']

  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-cson'
  grunt.registerTask 'default', ['cson', 'copy', 'coffee']
  grunt.registerTask 'dev', ['watch']
