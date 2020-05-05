import React, { FC } from 'react'

const Grid: FC = () => {
  // Other stuff coming

  return (
    <div data-cy="grid-container">
      {React.Children.toArray(
        [...Array(9)].map((_, rowindex) => (
          <div data-cy="grid-row-container">
            {/* Below: fixes key prop error with react.children... better pratice than using index as key */}
            {React.Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <div data-cy="block">{colIndex}</div>
              ))
            )}
          </div>
        ))
      )}
    </div>
  )
}

export default Grid
