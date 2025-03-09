import { handleLoginStep, useDispatch, useTranslations } from '../../imports'

function HaveUser() {
  const t = useTranslations()
  const dispatch = useDispatch()

  const goToLogin = () => {
    dispatch(handleLoginStep('initStep'))
  }

  return (
    <button
      type="button"
      className="flex text-sm cursor-pointer mt-4"
      onClick={goToLogin}
    >
      {t('before')}
      <p className=" underline text-sm ml-1 mr-1 text-primary-default">
        {t('signUp')}
      </p>
      {t('done')}
    </button>
  )
}

export default HaveUser
