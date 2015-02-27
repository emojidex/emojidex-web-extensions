module.exports = (grunt) ->
  grunt.initConfig
    slim:
      options:
        pretty: true
      crx:
        files: [
          expand: true
          cwd: 'src/slim/'
          src: '**/*.slim'
          dest: 'extension/html'
          ext: '.html'
        ]

    coffee:
      crx:
        files:[
          expand: true
          cwd: 'src/coffee'
          src: ['**/*.coffee']
          dest: 'extension/js/'
          ext: '.js'
        ]

    cson:
      crx:
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
      cson:
        files: 'src/**/*.cson'
        tasks: ['cson']
      slim:
        files: 'src/slim/**/*'
        tasks: ['slim']
      coffee:
        files: 'src/coffee/**/*'
        tasks: ['copy', 'coffee']

  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-cson'
  grunt.loadNpmTasks 'grunt-slim'
  grunt.registerTask 'default', ['cson', 'copy', 'slim', 'coffee']
  grunt.registerTask 'dev', ['watch']
