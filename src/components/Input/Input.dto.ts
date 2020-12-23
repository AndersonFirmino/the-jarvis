import { Control } from 'react-hook-form/dist/types'

interface InputDto {
  name: string
  control: Control
  defaultValue?: number | string
  error: string
  label: string
}

export default InputDto

export interface InputContainerDto {
  error: boolean
}
