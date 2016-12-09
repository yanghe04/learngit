module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        cssmin: { //css文件压缩  
            css: {
                src: 'style.css', //将之前的all.css  
                dest: 'build/style.min.css' //压缩  
            }
        },
     
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');


    grunt.registerTask('default', ['cssmin']);
}
