import { ColDef, DataGrid } from '@material-ui/data-grid'
import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Input } from 'src/components'
import { useIsMountedRef } from 'src/hooks/useIsMountedRef'
import { StartDto } from 'src/pages/Start/Start.dto'
import api from 'src/services/api'

import { CardContainer, FormContainer, GridContainer, ImageBackground, StartContainer, SubmitButton } from './styles'

const Start: React.FC = () => {
  const isMountedRef = useIsMountedRef()
  const [loading, setLoading] = useState<boolean>(false)
  const [heroes, setHeroes] = useState<StartDto[]>([])
  const { control, errors, handleSubmit } = useForm({ mode: 'onTouched' })
  const columns: ColDef[] = [
    {
      field: 'image',
      headerName: '-',
      width: 200,
      renderCell: (params) => {
        console.log(params)
        return <ImageBackground thumbnail={params.row.thumbnail.path + '.' + params.row.thumbnail.extension} />
      },
    },
    { field: 'name', headerName: 'Name', width: 700 },
  ]

  const getHeroes = useCallback(
    async (nameStartsWith?: string) => {
      let results
      if (nameStartsWith === '') {
        results = await api.get('/v1/public/characters')
      } else {
        results = await api.get('/v1/public/characters', { params: { nameStartsWith } })
      }

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
        <GridContainer>
          <DataGrid rows={heroes} columns={columns} checkboxSelection={false} autoPageSize />
        </GridContainer>
      </CardContainer>
    </StartContainer>
  )
}

export default Start
