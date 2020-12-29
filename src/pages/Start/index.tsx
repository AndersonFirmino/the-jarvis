import { IconButton } from '@material-ui/core'
import { ColDef, DataGrid } from '@material-ui/data-grid'
import { AssignmentInd } from '@material-ui/icons'
import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

import { Input } from 'src/components'
import { useIsMountedRef } from 'src/hooks/useIsMountedRef'
import { StartDto } from 'src/pages/Start/Start.dto'
import api from 'src/services/api'

import { CardContainer, FormContainer, GridContainer, ImageBackground, StartContainer, SubmitButton } from './styles'

const Start: React.FC = () => {
  const history = useHistory()
  const isMountedRef = useIsMountedRef()
  const totalItemsPage = 6
  const [page, setPage] = useState<number>(1)
  const [rowCount, setRowCount] = useState<number>()
  const [loading, setLoading] = useState<boolean>(false)
  const [heroes, setHeroes] = useState<StartDto[]>([])
  const { control, errors, handleSubmit } = useForm({ mode: 'onTouched' })
  const columns: ColDef[] = [
    {
      field: 'image',
      headerName: '-',
      width: 200,
      renderCell: (params) => (
        <ImageBackground thumbnail={params.row.thumbnail.path + '.' + params.row.thumbnail.extension} />
      ),
    },
    { field: 'name', headerName: 'Name', width: 700 },
    {
      field: 'buttons',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => {
        console.log(params)
        return (
          <IconButton
            aria-label="Informações dos campeões (heroes)"
            onClick={() => handleHeroButton(params.row.name, params.row.thumbnail, params.row.description)}
          >
            <AssignmentInd />
          </IconButton>
        )
      },
    },
  ]

  const handleHeroButton = useCallback((name, thumbnail, description) => {
    history.push('hero-details', {
      name,
      thumbnail,
      description,
    })
  }, [])

  const getHeroes = useCallback(
    async (nameStartsWith?: string, offset?: number) => {
      let results
      if (nameStartsWith === '') {
        results = await api.get('/v1/public/characters', { params: { offset, limit: totalItemsPage } })
      } else {
        results = await api.get('/v1/public/characters', { params: { nameStartsWith, offset, limit: totalItemsPage } })
      }

      if (isMountedRef) {
        setHeroes(results.data.data.results)
        setRowCount(results.data.data.total)
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

  const handlePageChange = useCallback(async (params) => {
    try {
      setLoading(true)
      setPage(params.page)
      await getHeroes(undefined, params.page * totalItemsPage)
    } finally {
      setLoading(false)
    }
  }, [])

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
          <DataGrid
            rows={heroes}
            page={page}
            rowCount={rowCount}
            pageSize={totalItemsPage}
            columns={columns}
            checkboxSelection={false}
            paginationMode="server"
            onPageChange={handlePageChange}
            loading={loading}
          />
        </GridContainer>
      </CardContainer>
    </StartContainer>
  )
}

export default Start
