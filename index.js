'use strict';

var gutil = require('gulp-util');
var through = require('through2');
var crass = require('crass');

module.exports = function(opt){
    return through.obj(function (file, enc, cb) {
        if (!opt) {
            opt = {};
            opt.pretty=true;
        }

        if (file.isNull()) {
            this.push(file);
            return cb();
        }

        if (file.isStream()) {
            this.emit('error', new gutil.PluginError('gulp-crass', 'Streaming not supported'));
            return cb();
        }


		 try {
			var parsed = crass.parse(file.contents.toString());
		        parsed = parsed.optimize();
		        if(opt.pretty) parsed = parsed.pretty();
		        parsed = parsed.toString();

		file.contents = new Buffer(parsed);
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-crass', err));
		}

        this.push(file);

        return cb();


    });
};