import { Button, Stack, Typography } from '@mui/material'
import React, { use } from 'react'
import { Root } from 'react-dom/client'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../state/store'
import { decrement, increment, incrementAsyc, incrementByAmount } from '../state/counter/counterSlice'

const CounterRcoil = () => {
    const count = useSelector((state:RootState) => state.counter.value)
    const dispatch = useDispatch<AppDispatch>()
  return (
    <>
    <Typography variant='h2'>{count}</Typography>
    <Stack display={'flex'} direction={'row'} spacing={2}>
    <Button variant='contained' onClick={()=>{dispatch(incrementAsyc(10))}}>Increment</Button>
    <Button variant='contained' onClick={()=>{dispatch(decrement())}}>Decrement</Button>
    </Stack >
     
    </>
  )
}

export default CounterRcoil
