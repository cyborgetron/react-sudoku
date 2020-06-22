import { SQUARE } from 'typings'

import isInSquare from './'

describe('isInSquare', () => {
    it('returns true when value is in grid square', () => {
        const square: SQUARE =[
            [1, 4, 7],
            [6, 5, 8],
            [2, 3, 9]
        ]
      
        expect(isInSquare({ square, value: 1 })).toBeTruthy()
        expect(isInSquare({ square, value: 9 })).toBeTruthy()
       
    })

    it('returns false when value is in not grid square', () => {
        const square: SQUARE =[
            [0, 4, 7],
            [6, 8, 8],
            [2, 3, 9]
        ]
        expect(isInSquare({ square, value: 5 })).toBeFalsy()
        expect(isInSquare({ square, value: 1 })).toBeFalsy()
    })
})