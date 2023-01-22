import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import DeleteIcon from '@mui/icons-material/Delete'
import { Box, IconButton } from '@mui/material'
import Apiservices from '../../services/ApiServices'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../Redux'
import { useTranslation } from 'react-i18next'

export default function Delete({ item }) {
  const [open, setOpen] = React.useState(false)
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const handelDelete = () => {
    Apiservices.delete(`/services/${item.id}`).then((res) => {
      dispatch(actions.setUpdate())
      setOpen(false)
    })
  }
  const lng = useSelector((e) => e.lng)
  return (
    <Box>
      <IconButton variant="outlined" onClick={handleClickOpen}>
        <DeleteIcon sx={{ color: 'red' }} />
      </IconButton>
      <Dialog
        dir={lng === 'en' ? 'ltr' : 'rtl'}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{t('deleteMsg')}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {t('deleteWarning')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}> {t('disagree')}</Button>
          <Button onClick={handelDelete} autoFocus>
            {t('confirm')}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
