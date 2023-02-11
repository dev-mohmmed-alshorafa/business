import { useTranslation } from 'react-i18next'

function Data() {
  const { t } = useTranslation()
  const data = {
    links: [
      {
        icon: './icons/dashboard.png',
        activeIcon: './icons/dashboarda.png',
        name: t('dashboard'),
        path: '/',
      },
      {
        icon: './icons/keys.png',
        activeIcon: './icons/keysa.png',
        name: t('keys'),
        path: '/keys',
      },
      {
        icon: './icons/investor.png',
        activeIcon: './icons/investora.png',
        name: t('contributors'),
        path: '/contributors',
      },
      {
        icon: './icons/users.png',
        activeIcon: './icons/usersa.png',
        name: t('contents'),
        path: '/contents',
      },
    ],
    products: [
      t('logo'),
      t('name'),
      t('category'),
      t('description'),
      t('price'),
      t('actions'),
    ],
    customers: [t('name'), t('email'), t('phoneNum'), t('actions')],
    admins: [t('name'), t('email'), t('phoneNum'), t('actions')],
    merchants: [
      t('logo'),
      t('name'),
      t('tradeName'),
      t('email'),
      t('phoneNum'),
      t('actions'),
    ],
    factorys: [
      t('logo'),
      t('name'),
      t('address'),
      t('email'),
      t('phoneNum'),
      t('actions'),
    ],
  }

  return data
}

export default Data
