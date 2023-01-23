import { useTranslation } from 'react-i18next'

function Data() {
  const { t } = useTranslation()
  const data = {
    links: [
      {
        icon: './icons/dashboard.png',
        name: t('dashboard'),
        path: '/dashboard',
      },
      {
        icon: './icons/product.png',
        name: t('about'),
        path: '/dashboard/aboutus',
      },
      {
        icon: './icons/admins.png',
        name: t('services'),
        path: '/dashboard/Services',
      },
      {
        icon: './icons/traders.png',
        name: t('blog'),
        path: '/dashboard/blog',
      },
      {
        icon: './icons/factory.png',
        name: t('contactUs'),
        path: '/dashboard/contact',
      },
    ]
  }

  return data
}

export default Data
