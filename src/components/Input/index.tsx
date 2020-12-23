import React from 'react'
import { Controller } from 'react-hook-form'

import InputDto from './Input.dto'

import { Error, InputContainer, TextField } from './styles'

const Input: React.FC<InputDto> = ({ name, control, defaultValue, error }) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={() => (
        <InputContainer error={!!error}>
          <TextField />
          {!!error && <Error>{error}</Error>}
        </InputContainer>
      )}
    />
  )
}

export default Input
