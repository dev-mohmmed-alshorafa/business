import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'


import AddProductForm from './AddProductForm'
import { useTranslation } from 'react-i18next'

export default function AddProductBtn() {
  const [open, setOpen] = React.useState(false)
  const { t } = useTranslation()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  } 
  

  return (
    <div>
      <Button sx={{borderRadius:'20px'}} variant="contained" onClick={handleClickOpen}>
        {t('addProduct')}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
<AddProductForm setOpen={setOpen}/>      
      </Dialog>
    </div>
  )
}
