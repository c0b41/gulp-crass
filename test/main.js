var expect = require('expect.js');
var fs = require('fs');
var gutil = require('gulp-util');
var Crass = require('../index.js');

it('GulpCrass SourceMap Test', function (cb) {
	var stream = Crass({pretty:false,sourceMap:true});

	stream.on('data', function (file) { 
		expect(file.contents.toString()).to.eql(fs.readFileSync(__dirname + '/expected/index.css').toString());
		expect(file.relative).to.eql('index.css');
	});

	stream.on('end', cb);

	stream.write(new gutil.File({
		cwd: __dirname,
		base: __dirname + '/fixtures',
		path: __dirname + '/fixtures/index.css',
		contents: fs.readFileSync(__dirname + '/fixtures/index.css')
	}));

	stream.end();
});


it('GulpCrass Minified Test', function (cb) {
	var stream = Crass({pretty:false});

	stream.on('data', function (file) { 
		expect(file.contents.toString()).to.eql(fs.readFileSync(__dirname + '/expected/index2.css').toString());
		expect(file.relative).to.eql('index2.css');
	});

	stream.on('end', cb);

	stream.write(new gutil.File({
		cwd: __dirname,
		base: __dirname + '/fixtures',
		path: __dirname + '/fixtures/index2.css',
		contents: fs.readFileSync(__dirname + '/fixtures/index2.css')
	}));

	stream.end();
});

it('GulpCrass Comment Test ', function (cb) {
	var stream = Crass({pretty:true});

	stream.on('data', function (file) { 
		expect(file.contents.toString()).to.eql(fs.readFileSync(__dirname + '/expected/comment.css').toString());
		expect(file.relative).to.eql('comment.css');
	});

	stream.on('end', cb);

	stream.write(new gutil.File({
		cwd: __dirname,
		base: __dirname + '/fixtures',
		path: __dirname + '/fixtures/comment.css',
		contents: fs.readFileSync(__dirname + '/fixtures/comment.css')
	}));

	stream.end();
});

it('GulpCrass Keyframe Test ', function (cb) {
	var stream = Crass({pretty:true});

	stream.on('data', function (file) { 
		expect(file.contents.toString()).to.eql(fs.readFileSync(__dirname + '/expected/keyframes.css').toString());
		expect(file.relative).to.eql('keyframes.css');
	});

	stream.on('end', cb);

	stream.write(new gutil.File({
		cwd: __dirname,
		base: __dirname + '/fixtures',
		path: __dirname + '/fixtures/keyframes.css',
		contents: fs.readFileSync(__dirname + '/fixtures/keyframes.css')
	}));

	stream.end();
});

