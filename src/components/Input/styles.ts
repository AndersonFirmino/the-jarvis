import { TextField as MTextField, Typography, withStyles } from '@material-ui/core'

import Container from '../Container'

import { InputContainerDto } from './Input.dto'

export const TextField = withStyles({
  root: {
    color: 'red',
  },
})(MTextField)

export const Error = withStyles({
  root: {
    color: 'red',
  },
})(Typography)

export const InputContainer = withStyles({
  root: {
    backgroundColor: (props: InputContainerDto) => (props.error ? 'red' : 'green'),
  },
})(Container)
