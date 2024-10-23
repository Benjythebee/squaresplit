declare module "squaresplit" {
  export interface SquareSplitSquare {
    w: number;
    h: number;
    /**
     * X coordinate in the resulting container.
     */
    x: number;
    /**
     * Y coordinate in the resulting container.
     */
    y: number;
  }

  export interface SquareSlitResult {
    /**
     * Width of the resulting container.
     */
    squares: SquareSplitSquare[];
    /**
     * The space utilization value (0 to 1). Higher is better.
     */
    fill: number;
  }

  /**
   * Splits a square of size `size` into `numBoxes` smaller squares.
   * @param numBoxes Number of squares to split the container into.
   * @param size Size of the container to split, optional if you plan on rescaling.
   */
  const squaresplit: (numBoxes: number, size?:number) => SquareSlitResult;

  export default squaresplit;
}
