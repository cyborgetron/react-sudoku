import { GRID, NUMBERS } from 'typings'

interface IInput {
  col: number
  grid: GRID
  value: NUMBERS
}
/**
 * A function that returns true if a given value is present in the current column of the Sudoku grid
 * @param input Object with 9x9 Sudoku Grid, column index and value
 */
function isInCol({ col, grid, value }: IInput): boolean {
  for (let i = 0; i < 9; i++) if (value === grid[i][col]) return true
  return false
}

export default isInCol
