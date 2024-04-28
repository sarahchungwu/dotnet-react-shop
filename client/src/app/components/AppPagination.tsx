import { Box, Pagination, Typography } from '@mui/material'
import { MetaData } from '../models/pagination'

interface Props {
  metaData: MetaData
  onPageChange: (page: number) => void
}

export const AppPagination = ({ metaData, onPageChange }: Props) => {
  const { currentPage, totalCount, totalPages, pageSize } = metaData

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography>
        Display {(currentPage - 1) * pageSize + 1} -
        {currentPage * pageSize > totalCount
          ? totalCount
          : currentPage * pageSize}{' '}
        of {totalCount} items
      </Typography>
      <Pagination
        count={totalPages}
        color="secondary"
        size="large"
        page={currentPage}
        onChange={(e, page) => onPageChange(page)}
      />
    </Box>
  )
}
