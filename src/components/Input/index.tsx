import { TextField } from '@material-ui/core'
import React from 'react'
import { Controller } from 'react-hook-form'

import InputDto from './Input.dto'

const Input: React.FC<InputDto> = ({ name, control, defaultValue }) => {
  return <Controller as={TextField} name={name} control={control} defaultValue={defaultValue} />
}

export default Input
