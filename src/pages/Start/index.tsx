import { yupResolver } from '@hookform/resolvers/yup'
import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

import { Input } from 'src/components'
import { useIsMountedRef } from 'src/hooks/useIsMountedRef'
import { StartDto } from 'src/pages/Start/Start.dto'
import api from 'src/services/api'

import { CardContainer, FormContainer, StartContainer, SubmitButton } from './styles'

const validationSchema = Yup.object().shape({
  search: Yup.string().required('Preencha o nome do herói!'),
})

const Start: React.FC = () => {
  const isMountedRef = useIsMountedRef()
  const [loading, setLoading] = useState<boolean>(false)
  const [setHeroes] = useState<StartDto[]>([])

  const { control, errors, handleSubmit } = useForm({ resolver: yupResolver(validationSchema), mode: 'onTouched' })

  const getHeroes = useCallback(
    async (nameStartsWith?: string) => {
      const results = await api.get('/v1/public/characters', { params: { nameStartsWith } })
      if (isMountedRef) {
        setHeroes(results.data.data.results)
      }
    },
    [isMountedRef],
  )

  useEffect(() => {
    setLoading(true)
    getHeroes().finally(() => {
      setLoading(false)
    })
  }, [isMountedRef])

  const handleSubmitButton = useCallback(
    async (data) => {
      if (isMountedRef) {
        try {
          setLoading(true)
          await getHeroes(data.search)
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
