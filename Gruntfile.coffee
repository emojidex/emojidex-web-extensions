chrome_extension_path = 'extensions/chrome'
firefox_extension_path = 'extensions/firefox'

config =
  slim:
    options:
      pretty: true
    crx:
      files: [
        expand: true
        cwd: 'src/slim/'
        src: '**/*.slim'
        dest: "#{chrome_extension_path}/html"
        ext: '.html'
      ]

  cson:
    manifest_chrome:
      expand: true
      flatten: true
      src: ['src/manifest.chrome.cson' ]
      rename: ->
        "#{chrome_extension_path}/manifest.json"
    manifest_firefox:
      expand: true
      flatten: true
      src: ['src/manifest.firefox.cson' ]
      rename: ->
        "#{firefox_extension_path}/manifest.json"
    locales_ja:
      expand: true
      flatten: true
      src: ['src/locales/ja/*' ]
      dest: "#{chrome_extension_path}/_locales/ja"
      ext: '.json'
    locales_en:
      expand: true
      flatten: true
      src: ['src/locales/en/*' ]
      dest: "#{chrome_extension_path}/_locales/en"
      ext: '.json'

  copy:
    libs:
      files: [
        {
          expand: true
          cwd: 'node_modules/emojidex/dist/js'
          src: '**/*'
          dest: "#{chrome_extension_path}/js/lib"
        }
        {
          expand: true
          cwd: 'node_modules/emojidex/dist/css'
          src: '**/*'
          dest: "#{chrome_extension_path}/css/lib"
        }
        {
          expand: true
          cwd: 'node_modules/bootstrap-sass/assets/javascripts'
          src: 'bootstrap.min.js'
          dest: "#{chrome_extension_path}/js/lib"
        }
        {
          expand: true
          cwd: 'bower_components/jquery.storageapi'
          src: 'jquery.storageapi.min.js'
          dest: "#{chrome_extension_path}/js/lib"
        }
        {
          expand: true
          cwd: 'bower_components/jquery/dist'
          src: ['jquery.min.js','jquery.min.map']
          dest: "#{chrome_extension_path}/js/lib"
        }
      ]
    img:
      files: [
        {
          expand: true
          cwd: 'src/img'
          src: '**/*'
          dest: "#{chrome_extension_path}/img"
        }
      ]
    fonts:
      files: [
        {
          expand: true
          cwd: 'node_modules/emojidex/dist/fonts'
          src: '**/*'
          dest: "#{chrome_extension_path}/css/fonts"
        }
      ]
    firefox:
      {
        expand: true
        cwd: chrome_extension_path
        src: '**/*'
        dest: firefox_extension_path
      }

  watch:
    manifest_chrome:
      files: 'src/manifest.chrome.cson'
      tasks: ['cson:manifest_chrome']
    manifest_firefox:
      files: 'src/manifest.firefox.cson'
      tasks: ['cson:manifest_firefox']
    locales_ja:
      files: 'src/locales/ja/*'
      tasks: ['cson:locales_ja', 'copy:firefox']
    locales_en:
      files: 'src/locales/en/*'
      tasks: ['cson:locales_en', 'copy:firefox']
    slim:
      files: 'src/slim/**/*'
      tasks: ['slim', 'copy:firefox']

  connect:
    test_page:
      options:
        port: 9000
        # port: 8000

module.exports = (grunt) ->
  grunt.initConfig config

  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-contrib-connect'
  grunt.loadNpmTasks 'grunt-cson'
  grunt.loadNpmTasks 'grunt-slim'

  grunt.registerTask 'firefox', ['copy:firefox', 'cson:manifest_firefox']
  grunt.registerTask 'dev', ['connect', 'watch']
  grunt.registerTask 'default', ['cson', 'copy', 'slim', 'firefox']
