var gulp = require('gulp');
var webserver = require('gulp-webserver');
var uglify = require('gulp-uglify');
var url = require('url');


//压缩文件
gulp.task('date_format',function(){
    gulp.src('./css/date_format.js')
    .pipe(uglify())
    .pipe(gulp.dest('date_format.min.js');

//使用gulp启动本地服务
gulp.task('server',function(){
    gulp.src('.').pipe(webserver({
        prot:'8080',
        host:'localhost',
        middleware:function(req,res,next){
            var obj = url.parse(req.url);
            if(req.method === 'GET'){
                if(obj.pathname === '/getdata'){
                    res.end('111')
                }else{
                    next();
                }
            }else{
                next();
            }
        }
    }))
})
