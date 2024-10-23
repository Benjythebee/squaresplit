# squaresplit

A tiny JavaScript library for splitting a single square container into multiple squares.
which is useful for generating CSS sprites and WebGL textures. Similar to [shelf-pack](https://github.com/mapbox/shelf-pack).
This library was inspired by [mapbox/potpack](https://mapbox.github.io/potpack/)

## [Demo](https://benjythebee.github.io/squaresplit/)

## Example usage

```js
import squaresplit from 'squaresplit';

const numberOfSquares = 50
const size = 1024 // optional

const {squares fill} = potpack(numberOfSquares,size);
// squares is resulting squares with format {w: number, h: number,  x: number, y: number}
// fill is the space utilization value (0 to 1), higher is better

//squares are ordered from biggest width to least
squares[0]; // {w: 300, h: 300,  x: 0, y: 0}
squares[1]; // {w: 100, h: 100, x: 100,   y: 0}
```

## Install

Install with NPM: `npm install squaresplit`.

In Node, you can't use `require` — only `import` in ESM-capable versions (v12.15+):

```js
import squaresplit from 'squaresplit';
```
