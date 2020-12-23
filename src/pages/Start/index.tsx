import { yupResolver } from '@hookform/resolvers/yup'
import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

import { Input } from 'src/components'
import { useIsMountedRef } from 'src/hooks/useIsMountedRef'
import api from 'src/services/api'

import { Form, StartContainer, SubmitButton } from './styles'

const validationSchema = Yup.object().shape({
  search: Yup.string().required('Preencha o nome do herói!'),
})

const Start: React.FC = () => {
  const isMountedRef = useIsMountedRef()
  const [loading, setLoading] = useState<boolean>(false)
  const { control, errors, handleSubmit } = useForm({ resolver: yupResolver(validationSchema), mode: 'onTouched' })

  const handleSubmitButton = useCallback(
    async (data) => {
      if (isMountedRef) {
        try {
          setLoading(true)
          const result = await api.get('/v1/public/characters', { params: { name: data.search } })
          console.log(result)
        } catch (e) {
          alert(`Herói ${data.search} não encontrado!`)
        } finally {
          setLoading(false)
        }
      }
    },
    [isMountedRef],
  )

  return (
    <StartContainer>
      <Form variant="outlined">
        <Input
          control={control}
          name="search"
          error={errors?.search?.message}
          label="Digite o nome do herói"
          disabled={loading}
        />
        <SubmitButton variant="contained" onClick={handleSubmit(handleSubmitButton)} disabled={loading}>
          Buscar herói
        </SubmitButton>
      </Form>
    </StartContainer>
  )
}

export default Start
