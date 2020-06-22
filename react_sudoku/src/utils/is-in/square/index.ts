import { NUMBERS, SQUARE } from 'typings'

interface IInput {
    square: SQUARE
    value: NUMBERS
}

/**
 * A function that returns true if a given value is present in the current square of the Sudoku grid
 * @param input Object with 3x3 square and value
 */
function isInSquare({ square, value }: IInput): boolean {
    return [...square[0], ...square[1], ...square[2]].includes(value)
}

export default isInSquare