import { Control } from 'react-hook-form/dist/types'

interface InputDto {
  name: string
  control: Control
  defaultValue: number | string
}

export default InputDto
