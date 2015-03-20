'use strict';

var crass = require('crass');
var gutil = require('gulp-util');
var through = require('through2');

module.exports = function(opt) {
    return through.obj(function(file, enc, cb) {
        if (!opt) {
            opt = {pretty: true, o1: true};
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
            parsed = parsed.optimize({O1: !!opt.o1});
            if (opt.pretty) parsed = parsed.pretty();
            parsed = parsed.toString();

            file.contents = new Buffer(parsed);
        } catch (err) {
            this.emit('error', new gutil.PluginError('gulp-crass', err));
        }

        this.push(file);

        return cb();

    });
};
