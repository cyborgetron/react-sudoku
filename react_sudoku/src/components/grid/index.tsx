import React, { FC } from 'react'

import Block from './block'
import { Container, Row } from './styles'

const Grid: FC = () => {
  // Other stuff coming

  return (
    <Container data-cy="grid-container">
      {React.Children.toArray(
        [...Array(9)].map((_, rowindex) => (
          <Row data-cy="grid-row-container">
            {/* Below: fixes key prop error with react.children... better pratice than using index as key */}
            {React.Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block colIndex={colIndex} rowIndex={rowindex}/>
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  )
}

export default Grid
