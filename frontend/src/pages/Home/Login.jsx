import React from 'react'
import { useTranslation } from 'react-i18next'

const Login = () => {
    const {t} = useTranslation()
  return (
    <div className='center bg-gray-800/20 rounded-lg h-full max-h-[95%]'>{t("Coming soon")}</div>
  )
}

export default Login