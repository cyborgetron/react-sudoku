import shuffle from './'

// Need to improve these

describe('shuffle', () => {
  it('returns and array of the same length after being shuffled', () => {
    const array = [1, 2, 3]
    shuffle(array)
    expect(array).toHaveLength(3)
  })

  it('returns and array with the same elements after being shuffled', () => {
    const array = [1, 2, 3]
    shuffle(array)
    expect(array).toContain(1)
    expect(array).toContain(2)
    expect(array).toContain(3)
  })

  it('returns and array in a different order after being shuffled', () => {
    // WIP... how exactly to test this...? The array could be returned as the same
    // array, however. Maybe call array a couple times and make sure there are different
    // outputs for each..?
  })
})
