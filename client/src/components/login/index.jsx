import React from 'react'
import { Container, Stack } from '@mui/system'
import Typography from '@mui/material/Typography'
import LoginForm from './LoginForm'
import { useTranslation } from 'react-i18next'

function Login() {
  const { t } = useTranslation()

  return (
    <Stack width={'100%'} sx={{ background: 'var(--background-menu-side)' }}>
      <Container sx={{ height: '100vh' }} maxWidth={'sm'}>
        <Stack
          alignItems={'center'}
          height={'100%'}
          width={'100%'}
          justifyContent={'center'}
        >
          <Stack alignItems={'center'} width={'100%'} justifyContent={'center'}>
            <Typography
              sx={{
                color: 'var(--icons-side-menu)',
                marginBottom: '0',
                fontSize: '47px',
                fontWeight: '600',
              }}
              variant="h3"
              gutterBottom
            >
              {t("signin")}
            </Typography>
            <img style={{ width: '320px',margin:'35px 0' }} src="./assets/images/white-logo.svg" alt="" />
          </Stack>

          <LoginForm />
        </Stack>
      </Container>
    </Stack>
  )
}

export default Login
