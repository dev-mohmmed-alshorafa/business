import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'

import Form from './Form'
import { useTranslation } from 'react-i18next'
export default function Btn() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const { t } = useTranslation()

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button
        sx={{ background: '#3351A6', color: '#ffff' }}
        variant="outlined"
        onClick={handleClickOpen}
      >
        {t("add")}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      <Form setOpen={setOpen}/>
      </Dialog>
    </div>
  )
}
