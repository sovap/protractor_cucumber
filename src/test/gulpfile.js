'use strict';

// dependencies
var gulp = require('gulp');
var unzip = require('gulp-unzip');
var fs = require ('fs-extra');
var protractor = require('gulp-protractor').protractor;
var reporter = require('cucumber-html-reporter');

// protractor execution configuration
var spec = [
    'features/*.feature',
    'features/**/*.feature',
    'features/**/**/*.feature',
    'features/**/**/**/*.feature'
    ];

var defaultTags = '@smoke';
var browserZipPath = './binaries/chromium.zip';
var webdriverZipPath = './binaries/chromedriver_win32.zip';


// gulp tasks definition
gulp.task('unzip browser', function(){
    return gulp.src(browserZipPath)
        .pipe(unzip())
        .pipe(gulp.dest('./binaries/browser'));
});

gulp.task('unzip webdriver', ['unzip browser'], function(){
    return gulp.src(webdriverZipPath)
        .pipe(unzip())
        .pipe(gulp.dest('./binaries/webdriver'));
});

gulp.task('delete old results', ['unzip webdriver'], function(){
    return fs.remove('./results');
});

gulp.task('create result folder', ['delete old results'], function(){
    return fs.ensureDir('./results');
});

gulp.task('execution', ['create result folder'], function(callback){
    gulp.src(spec)
        .pipe(protractor({
            configFile: "protractor.conf.js",
            args: ['--cucumberOpts.tags', process.env.TAGS || defaultTags]
        }))
        .on('error', function(){
            callback();
        })
        .on('end', function(){
            callback();
        })
});

gulp.task('reporting', ['execution'], function(){
    var options = {
        theme: 'simple', // all types: ['bootstrap', 'hierarchy', 'foundation', 'simple']
        jsonDir: './results/',
        output: './results/cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: false,
        ignoreBadJsonFile: true
    };
    reporter.generate(options);
});

gulp.task('protractor-execution', ['reporting'], function(){});