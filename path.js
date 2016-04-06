var src = './examples';     
// var dest = './../Wap';
var dest = './dist';
var rev = './rev';

module.exports = {
    src:{
        src:src+'/**/*'
    },
    css: {
        // all : src + "/less/**/*.less", //所有less
        // less: src + "/less/*.less",      //需要编译的less
        src : src+"/css",
        dest: dest + "/css",          //输出目录
        settings: {                      //编译less过程需要的配置，可以为空

        }
    },
    images: {
        src: src + "/img",      
        dest: dest + "/img"
    },
    js: {
        src: src + "/js",
        dest: dest + "/js"
    },
    lib:{
        src:src+'/lib',
        dest:dest+'/lib'
    },
    html:{
        src:src+"/*.html",
        dest:dest+"/"
    },
    dest:dest,
    clean:{
        dest: dest,
        rev:rev
    },
    rev:{
        all:rev+'/**/*.json',
        css:rev+'/css',
        js:rev+'/js',
        lib:rev+'/lib',
        css:rev+'/css'
    },
    base64: { 
        src: src + '/css/*.css', 
        dest: dest + '/css', 
        options: { 
            baseDir: src+'/img', 
            extensions: ['png'], 
            maximgize: 8 * 1024, // bytes debug: false 
        } 
    }
};