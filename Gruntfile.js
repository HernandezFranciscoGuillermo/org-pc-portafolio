module.exports = function (grunt) {

  grunt.initConfig({
    concat: {
      css: {
        src: [
          //'public/assets/css/effect2.css',
          'public/libs/bootstrap/dist/css/bootstrap.min.css',
          'public/assets/icons/style.css',
          'public/assets/css/icononav.css',
          'public/assets/css/flat.css',
          'public/assets/font/clarendon/stylesheet.css',
          'public/assets/font/sinkin/sinkin.css',
          'public/assets/css/portafolio.css',
          'public/assets/css/basscss.min.css',
          'public/assets/css/base.css'
        ],
        dest: 'public/assets/css/bundle/portafolio.css'
      },
      slide: {
        src: [
          'public/assets/css/presenter.css',
          'public/assets/revealjs/css/reveal.css',
          'public/assets/revealjs/css/theme/white.css'
        ],
        dest: 'public/assets/css/bundle/slide.css'
      },
      numerical: {
        src: [
          'public/libs/angular-material/angular-material.min.css',
          'public/assets/css/stylesheet.css',
          'public/assets/css/sistemas_numericos.css'
        ],
        dest: 'public/assets/css/bundle/sistemas_numericos.css'
      },
      js: {
        src: [
          'public/libs/jquery/dist/jquery.min.js',
          'public/assets/js/scripts.min.js',
          //'public/libs/jquery.nicescroll/jquery.nicescroll.min.js',
          'public/assets/js/modernizr.custom.js',
          'public/assets/js/classie.js',
          'public/assets/js/pathLoader.js',
          'public/assets/js/nice.js',
          'public/assets/js/overlay.js'
        ],
        dest: 'public/assets/js/bundle/portafolio.js'
      },
      slidejs: {
          src: [
            'public/libs/jquery/dist/jquery.min.js',
            'public/assets/revealjs/js/reveal.js',
            'public/assets/js/presenter.js',
            'public/libs/typer.js/dist/typer.min.js'
          ],
          dest: 'public/assets/js/bundle/slide.js'
        },
      numericaljs: {
        src: [
          'public/libs/angular/angular.min.js',
          'public/libs/angular-animate/angular-animate.min.js',
          'public/libs/angular-aria/angular-aria.min.js',
          'public/libs/angular-messages/angular-messages.min.js',
          'public/libs/angular-material/angular-material.min.js',
          'public/assets/js/sistemas_numericos.js'
        ],
        dest: 'public/assets/js/bundle/sistemas_numericos.js'
      },
      viewer: {
        src: [
          'public/libs/pdfjs-dist/build/pdf.combined.js',
          'public/libs/angular/angular.min.js',
          'public/libs/jquery/dist/jquery.min.js',
          'public/assets/js/viewer/delegate-service.js',
          'public/assets/js/viewer/pdf-viewer-delegate.js',
          'public/assets/js/viewer/pdf-ctrl.js',
          'public/assets/js/viewer/pdf-viewer.js',
          'public/assets/js/viewer/pdf-viewer-toolbar.js'

        ],
        dest: 'public/assets/js/bundle/viewer.js'
      }
    },

    cssmin:{
      target: {
        files: {
          'public/assets/css/dist/61c5d103-5fcc-425a-8c84-d4d0435899-cf751fc8e1-fc1d-4a14-a79b-4b54b20dd20a.min.css': ['public/assets/css/bundle/portafolio.css'],
          'public/assets/css/dist/0433c424-127d-4bda-8ea4-cc5a37252e7f-fa2ef549-3408-4f95-8cd1-545982ec6594.min.css': ['public/assets/css/bundle/slide.css'],
          'public/assets/css/dist/7b07f02e-96fd-40e7-bc85-fe4258244fee-6788e315-f932-4250-b021-e6a4cb370ab4.min.css': ['public/assets/css/bundle/sistemas_numericos.css']
        }
      }
    },

    uglify: {

      options: {
        compress: true,
        report: true,
        banner: '/*  Portafolio  <%= grunt.template.date() %>*/\n'
      },

      js: {
        files: {
          'public/assets/js/dist/61c5d103-5fcc-425a-8c84-d4d0435899-cf751fc8e1-fc1d-4a14-a79b-4b54b20dd20a.min.js': ['public/assets/js/bundle/portafolio.js'],
          'public/assets/js/dist/0433c424-127d-4bda-8ea4-cc5a37252e7f-fa2ef549-3408-4f95-8cd1-545982ec6594.min.js': ['public/assets/js/bundle/slide.js'],
          'public/assets/js/dist/7b07f02e-96fd-40e7-bc85-fe4258244fee-6788e315-f932-4250-b021-e6a4cb370ab4.min.js': ['public/assets/js/bundle/sistemas_numericos.js'],
          'public/assets/js/dist/f3fe9466-6bad-46cb-9783-cec1226c2bba-e8f5d2ec-15cf-4ad7-8280-f9e528bde5bb.min.js': ['public/assets/js/bundle/viewer.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['concat:css', 'concat:slide','concat:numerical', 'concat:js', 'concat:slidejs', 'concat:numericaljs','concat:viewer',  'cssmin', 'uglify']);

};

