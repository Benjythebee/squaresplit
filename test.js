
import squaresplit from './index.js';
import test from 'node:test';
import assert from 'node:assert/strict';

test('assemble squares', () => {
    const boxes = 100;
    const size = 10;
    const {squares,fill} = squaresplit(boxes,size);

    assert.equal(squares.length, 100);
    assert.equal(fill, 1);

});