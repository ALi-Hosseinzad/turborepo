import { handleLoginStep, useDispatch, useTranslations } from '../../imports'

const NotHaveUserAndForgetPass = () => {
  const t = useTranslations()
  const dispatch = useDispatch()

  const handleSignUp = () => {
    dispatch(handleLoginStep('legalUserSignUp'))
  }

  const handleForgetPass = () => {
    dispatch(handleLoginStep('legalUserForgetPassword'))
  }

  return (
    <div className="mt-4 flex justify-between items-center">
      <button
        type="button"
        className="flex text-sm cursor-pointer"
        onClick={handleSignUp}
      >
        {t('yet')}
        <p className=" underline text-sm ml-1 mr-1 text-primary-default ">
          {t('signUp')}
        </p>
        {t('didNot')}
      </button>
      <button
        type="button"
        className="text-sm text-primary-saturation cursor-pointer"
        onClick={handleForgetPass}
      >
        {t('forgetPassword')}
      </button>
    </div>
  )
}

export default NotHaveUserAndForgetPass
