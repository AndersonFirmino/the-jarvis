import React from 'react'
import { Controller } from 'react-hook-form'

import InputDto from './Input.dto'

import { Error, InputContainer, TextField } from './styles'

const Input: React.FC<InputDto> = ({ name, control, defaultValue = '', error, label, disabled }) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ onBlur, onChange, value }) => (
        <InputContainer>
          <TextField
            label={label}
            error={!!error}
            variant="outlined"
            onBlur={onBlur}
            onChange={onChange}
            disabled={disabled}
            value={value}
          />
          {!!error && <Error>{error}</Error>}
        </InputContainer>
      )}
    />
  )
}

export default Input
