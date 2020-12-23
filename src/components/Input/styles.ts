import { TextField as MTextField, Typography, withStyles } from '@material-ui/core'

import Container from '../Container'

import { InputContainerDto } from './Input.dto'

export const TextField = withStyles((theme) => ({
  root: {
    '& .MuiInput-input': {
      color: (props: InputContainerDto) =>
        props.error ? theme.palette.error.main : theme.palette.primary.contrastText,
    },
  },
}))(MTextField)

export const Error = withStyles({})(Typography)

export const InputContainer = withStyles(() => ({
  root: {},
}))(Container)
