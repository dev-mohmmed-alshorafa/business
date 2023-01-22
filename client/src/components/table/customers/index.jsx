import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import HeadTable from '../TableHead'
// import BodyTable from './TableBody'
import Apiservices from '../../../services/ApiServices'
import { Stack } from '@mui/system'
import Pagination from '../Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../../Redux'
import UserRows from '../../skilton/UserRows'
import BodyTable from './BodyTable'
import Data from '../../../Data'

export default function CustomersTable({ isLoading, setIsLoading }) {
  const [page, setPage] = useState(1)
  const customers = useSelector((state) => state.customers)
  const lng = useSelector((state) => state.lng)
  const dispatch = useDispatch()
  const [pagination, setPagination] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    Apiservices.get(`/users?page=${page}&role=user`).then((res) => {
      setIsLoading(false)
      setPagination(res.data)
      dispatch(actions.setCustomers(res.data.data))
    })
  }, [page])

  return (
    <Stack dir={lng !== 'en'&& 'rtl'}  sx={{ position: 'relative' ,background:'var(--background-nav)',borderRadius:'12px'}} >
      <TableContainer
        sx={{
          margin: '10px 0',
          minHeight: '430px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
        component={Paper}
      >
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <HeadTable data={Data().customers} />
          {isLoading ? <UserRows /> : <BodyTable data={customers} />}
        </Table>
        {pagination && (
          <Pagination setPage={setPage} pagination={pagination} page={page} />
        )}
      </TableContainer>
    </Stack>
  )
}
