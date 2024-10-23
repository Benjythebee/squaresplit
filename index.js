export default function squaresplit(numBoxes, size = 10) {
    if (numBoxes <= 0) {
        return [];
    }
    const count = numBoxes
    const squares = [{ w: size, h: size, x: 0, y: 0 }];

    function recursiveCut(size, count, x, y) {
      if (count <= 0) {
        return;
      }
    
      // Square - cut into 4 equal squares
      const newSize = size.w / 2;
      const newSquares = [
        { w: newSize, h: newSize, x: x, y: y },
        { w: newSize, h: newSize, x: x + newSize, y: y },
        { w: newSize, h: newSize, x: x, y: y + newSize },
        { w: newSize, h: newSize, x: x + newSize, y: y + newSize }
      ];
      squares.push(...newSquares);
      const oldSquare = squares.find((square)=>square.x === x && square.y === y && square.w === size.w && square.h === size.h)
      squares.splice(squares.indexOf(oldSquare), 1)

      if(numBoxes <=squares.length){
        return;
      }

      // Next square to cut should be the next biggest square
      const biggestSquareWidth = Math.max(...squares.map((square)=>square.w)); 
      const nextSquareToCut = squares.find((square)=>square.w === biggestSquareWidth)

      const nextX = nextSquareToCut.x;
      const nextY = nextSquareToCut.y;

      recursiveCut({ w: nextSquareToCut.w, h: nextSquareToCut.h }, count - 1, nextX, nextY);
    }

    if(numBoxes == 1){
      return {squares,fill:1};
    }

    recursiveCut({ w: size, h: size }, count, 0, 0);

    // sort squares by size, biggest first
    squares.sort((a, b) => b.w - a.w);

    // remove smallest squares until we have the right amount
    while (squares.length > numBoxes) {
        squares.pop();
    }
    console.log(squares)
    const fill = squares.reduce((acc, square) => acc + square.w * square.h, 0) / (size * size);
    console.log(fill)
    return {
        squares,
        fill
    };
}
