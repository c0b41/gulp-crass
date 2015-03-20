var expect = require('expect.js');
var fs = require('fs');
var gutil = require('gulp-util');
var Crass = require('../index.js');

it('GulpCrass Test', function (cb) {
	var stream = Crass({pretty:false});

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
