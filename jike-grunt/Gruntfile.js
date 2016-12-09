module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*!create by <%=grunt.template.today("yyyy-mm-dd")%>*/\n'
            },
            static_mappings: {
                files: [{
                    src: 'js/lunbo.js',
                    dest: 'build/lunbo.min.js'
                }, {
                    src: 'js/YuxiSlider.js',
                    dest: 'build/YuxiSlider.min.js'
                }],
            }
        },
        concat: {
            bar: {
                src: ['build/*.js'],
                dest: 'build/all.min.js',
            }
        },
        // cssmin: { //css文件压缩  
        //     css: {
        //         src: 'style.css', //将之前的all.css  
        //         dest: 'build/style.min.css' //压缩  
        //     }
        // },
        cssmin: { //css文件压缩  
            css: {
                src: 'css/lunbo.css', //将之前的all.css  
                dest: 'build/lunbo.min.css' //压缩  
            }
        },
        // htmlmin:{
        //     html:{
        //         src:'index.html',
        //         dest:'build/index.min.html'
        //     }
        // }

    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    //grunt.loadNpmTasks('grunt-contrib-cssmin');
        //grunt.loadNpmTasks('grunt-contrib-htmlmin')


    grunt.registerTask('default', ['uglify', 'concat', 'cssmin']);
}
