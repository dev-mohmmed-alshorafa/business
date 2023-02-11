import { Stack } from '@mui/system'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline'
import CheckIcon from '@mui/icons-material/Check'
import { IconButton } from '@mui/material'
import Apiservices from '../../../services/ApiServices'
import DeleteMsg from '../DeleteMsg'
import { useTranslation } from 'react-i18next'
function Actions({
  setIsEdit,
  isEdit,
  editProduct,
  img,
  setProduct,
  setIsLoading,
  setIsDeleted,
}) {
  const { t } = useTranslation()

  const updateProduct = () => {
    setIsEdit(false)
    setIsLoading(true)
    Apiservices.put(`/users/${editProduct._id}`, editProduct).then((res) => {
      setProduct(res.data.data)
      setIsEdit(false)
      setIsLoading(false)
    })
  }

  return (
    <Stack direction={'row'} justifyContent={'space-evenly'}>
      {isEdit ? (
        <IconButton onClick={updateProduct}>
          <CheckIcon color="primary" />
        </IconButton>
      ) : (
        <IconButton onClick={() => setIsEdit(true)}>
          <ModeEditOutlineIcon color="primary" />
        </IconButton>
      )}
      <DeleteMsg
        msg={{
          title: editProduct.banned ? t('openMsg') : t('blockMsg'),
          text: editProduct.banned ? t('openWarning') : t('blockWarning'),
        }}
        setIsDeleted={setIsDeleted}
        editProduct={editProduct}
      />
    </Stack>
  )
}

export default Actions
