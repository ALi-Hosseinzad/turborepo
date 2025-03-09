'use client'

import { useDispatch } from 'react-redux'
import {
  AuthorizationGenuine,
  BreadCrumbs,
  handleLoginedUser,
  ME_URL,
  useAxiosQuery,
  useEffect,
  UserPersist,
  useTranslations,
} from './imports'
import AuthorizationLegal from './legal'

const Authorization = () => {
  const t = useTranslations()

  const { user } = UserPersist()

  const breadCrumbs = [{ name: t('authentication'), url: 'authorization' }]
  const dispatch = useDispatch()
  const { data, isSuccess } = useAxiosQuery({ url: ME_URL, queryKey: ['me'] })
  useEffect(() => {
    if (isSuccess) {
      dispatch(handleLoginedUser(data))
    }
  }, [isSuccess])

  return (
    <>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      {!user?.is_legal && <AuthorizationGenuine />}
      {user?.is_legal ? <AuthorizationLegal /> : null}
    </>
  )
}
export default Authorization
