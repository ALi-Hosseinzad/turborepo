import { FormikSelect, FormikTextField, useTranslations } from '../imports'

//for exampel
const itemList = [
  { value: 'female', label: 'ادمین' },
  { value: 'user', label: 'کاربر' },
]

export const UserCreateForm = (): JSX.Element => {
  const t = useTranslations()

  return (
    <div className="grid grid-cols-2 gap-6 w-full">
      <div>
        <FormikTextField
          name="firstName"
          title={t('firstName')}
          placeholder={t('enterYourName')}
        />
      </div>
      <div>
        <FormikTextField
          name="lastName"
          title={t('lastName')}
          placeholder={t('enterYourLastName')}
        />
      </div>

      <div>
        <FormikTextField
          name="phone"
          title={t('phone')}
          placeholder={t('enterYourphone')}
        />
      </div>
      <div>
        <FormikTextField
          name="email"
          title={t('email')}
          placeholder={t('enterYourEmail')}
        />
      </div>
      <div>
        <FormikSelect
          listOptions={itemList}
          optionLabel="label"
          optionValue="label"
          name="role_id"
          placeholder={t('role')}
          selectLabel={t('role')}
          disabled
        />
      </div>

      <div>
        <FormikTextField
          name="password"
          placeholder={t('password')}
          disabled
          title={t('specifyPassword')}
        />
      </div>
      <div>
        <FormikTextField
          name="passwordRepeat"
          placeholder={t('passwordRepeat')}
          title={t('confirmPassword')}
          disabled
        />
      </div>
    </div>
  )
}
