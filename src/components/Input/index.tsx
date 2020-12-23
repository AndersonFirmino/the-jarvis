import React from 'react'
import { Controller } from 'react-hook-form'

import InputDto from './Input.dto'

import { TextField } from './styles'

const Input: React.FC<InputDto> = ({ name, control, defaultValue }) => {
  return <Controller name={name} control={control} defaultValue={defaultValue} render={() => <TextField />} />
}

export default Input
