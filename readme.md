# [gulp](https://github.com/gulpjs/gulp)-crass  



[![Build Status](http://img.shields.io/travis/ayhankuru/gulp-crass.svg?style=flat-square)](https://travis-ci.org/ayhankuru/gulp-crass) [![Build Status](https://img.shields.io/david/ayhankuru/gulp-crass.svg?style=flat-square)](https://david-dm.org/ayhankuru/gulp-crass) [![io.js supported](https://img.shields.io/badge/io.js-supported-green.svg?style=flat-square)](https://iojs.org)


> Css files by optimizing utility organizes and removes spaces

Uses the [crass](https://github.com/mattbasta/crass) library.

## How It Works
`/path/to/file.css`:
```css
b, c, a {
    third: rgba(255, 255, 255, 0.9);
    second: abc;
    first: 50%;
}
```



Output:
```css
a, b, c {
    first: 50%;
    second: abc;
    third: hsla(0, 0%, 100%, 0.9);
}

```


## Install

Install with [npm](https://npmjs.org/package/gulp-crass)

```
npm install --save-dev gulp-crass
```


## Usage

```js
gulp.task('default', function() {
  return gulp.src('./exam/*.css')
        .pipe(crass())
        .pipe(gulp.dest('build/'));;
});
```

With options:

```js
gulp.task('default', function() {
  return gulp.src('./exam/*.css')
        .pipe(crass({pretty:false}))
        .pipe(gulp.dest('build/'));;
});
```




## API

### crass(options)


#### options.pretty

Type: `Boolean`
Default: `true`

