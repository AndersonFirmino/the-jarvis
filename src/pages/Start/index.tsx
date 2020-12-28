import { yupResolver } from '@hookform/resolvers/yup'
import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'

import { Input } from 'src/components'
import { useIsMountedRef } from 'src/hooks/useIsMountedRef'
import api from 'src/services/api'

import { CardContainer, FormContainer, StartContainer, SubmitButton } from './styles'

const validationSchema = Yup.object().shape({
  search: Yup.string().required('Preencha o nome do herói!'),
})

const Start: React.FC = () => {
  const isMountedRef = useIsMountedRef()
  const history = useHistory()
  const [loading, setLoading] = useState<boolean>(false)
  const { control, errors, handleSubmit } = useForm({ resolver: yupResolver(validationSchema), mode: 'onTouched' })

  const handleSubmitButton = useCallback(
    async (data) => {
      if (isMountedRef) {
        try {
          setLoading(true)
          const result = await api.get('/v1/public/characters', { params: { name: data.search } })
          history.push('hero-details', {
            name: result.data.data.results[0].name,
            thumbnail: result.data.data.results[0].thumbnail,
            description: result.data.data.results[0].description,
          })
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
      <CardContainer variant="outlined">
        <FormContainer>
          <Input
            control={control}
            name="search"
            error={errors?.search?.message}
            label="Digite o nome do herói"
            disabled={loading}
          />
          <SubmitButton
            color="primary"
            variant="contained"
            onClick={handleSubmit(handleSubmitButton)}
            disabled={loading}
          >
            Buscar herói
          </SubmitButton>
        </FormContainer>
      </CardContainer>
    </StartContainer>
  )
}

export default Start
