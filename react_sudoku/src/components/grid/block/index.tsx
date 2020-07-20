import React, { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Dispatch, AnyAction } from 'redux'

import { IReducer, selectBlock  } from 'reducers'

import { Container } from './styles'
import { N, INDEX } from 'typings'

interface IProps {
  colIndex: INDEX
  rowIndex: INDEX
}

interface IState  {
  value: N
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => {
  const state = useSelector<IReducer, IState>(({ grid }) => ({
    value: grid? grid[rowIndex][colIndex] : 0,
  }))

  const dispatch = useDispatch<Dispatch<AnyAction>>()

  function handleClick() {
    dispatch(selectBlock([rowIndex, colIndex]))
  }

  return <Container data-cy={`block - ${rowIndex} - ${colIndex}`}>
    {state.value === 0 ? '' : state.value}
  </Container>
}

export default Block
