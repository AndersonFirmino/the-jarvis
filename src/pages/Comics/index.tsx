import { ColDef, DataGrid } from '@material-ui/data-grid'
import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory, useLocation } from 'react-router-dom'

import { Input } from 'src/components'
import { useIsMountedRef } from 'src/hooks'
import { ComicsDto, ComicsStateDto } from 'src/pages/Comics/Comics.dto'
import { ImageBackground } from 'src/pages/Start/styles'
import api from 'src/services/api'

import { CardContainer, FormContainer, GridContainer, StartContainer, SubmitButton } from './styles'

const Comics: React.FC = () => {
  const { state } = useLocation<ComicsStateDto>()
  const { id } = state
  const history = useHistory()
  const isMountedRef = useIsMountedRef()
  const totalItemsPage = 6
  const [page, setPage] = useState<number>(1)
  const [rowCount, setRowCount] = useState<number>()
  const [search, setSearch] = useState<string>()
  const [loading, setLoading] = useState<boolean>(false)
  const [comics, setComics] = useState<ComicsDto[]>([])
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
    { field: 'title', headerName: 'Título', width: 700 },
  ]

  useEffect(() => {
    setLoading(true)
    getComics().finally(() => setLoading(false))
  }, [search])

  const handlePageChange = useCallback(
    async (params) => {
      try {
        setLoading(true)
        setPage(params.page)
        await getComics(params.page * totalItemsPage)
      } finally {
        setLoading(false)
      }
    },
    [search],
  )

  const getComics = useCallback(
    async (offset?: number) => {
      let results
      if (!search || search === '') {
        results = await api.get(`/v1/public/characters/${id}/comics`, { params: { offset, limit: totalItemsPage } })
      } else {
        results = await api.get(`/v1/public/characters/${id}/comics`, {
          params: { titleStartsWith: search, offset, limit: totalItemsPage },
        })
      }
      if (isMountedRef) {
        setComics(results.data.data.results)
        setRowCount(results.data.data.total)
      }
    },
    [isMountedRef, search],
  )

  const handleSubmitButton = useCallback(
    async (data) => {
      if (isMountedRef) {
        setSearch(data.search)
      }
    },
    [isMountedRef],
  )

  const handleBackButton = useCallback(() => {
    history.goBack()
  }, [])

  return (
    <StartContainer>
      <CardContainer variant="outlined">
        <FormContainer>
          <SubmitButton color="primary" variant="contained" onClick={handleBackButton} disabled={loading}>
            Voltar
          </SubmitButton>
          <Input
            control={control}
            name="search"
            error={errors?.search?.message}
            label="Digite o título da comic"
            disabled={loading}
          />
          <SubmitButton
            color="primary"
            variant="contained"
            onClick={handleSubmit(handleSubmitButton)}
            disabled={loading}
          >
            Buscar comic
          </SubmitButton>
        </FormContainer>
        <GridContainer>
          <DataGrid
            rows={comics}
            page={page}
            rowCount={rowCount}
            pagination
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

export default Comics
