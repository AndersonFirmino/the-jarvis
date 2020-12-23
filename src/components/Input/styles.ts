import { TextField as MTextField, Typography, withStyles } from '@material-ui/core'

import Container from '../Container'

import { InputContainerDto } from './Input.dto'

export const TextField = withStyles((theme) => ({
  root: {
    '& .MuiInputBase-input': {
      color: (props: InputContainerDto) =>
        props.error ? theme.palette.error.main : theme.palette.primary.contrastText,
    },
    '& .MuiInputBase-root': {
      backgroundColor: theme.palette.secondary.main,
    },
    '& .MuiFormLabel-root': {
      color: (props: InputContainerDto) =>
        props.error ? theme.palette.error.main : theme.palette.primary.contrastText,
    },
  },
}))(MTextField)

export const Error = withStyles((theme) => ({
  root: {
    color: theme.palette.error.main,
    marginTop: 4,
  },
}))(Typography)

export const InputContainer = withStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}))(Container)
