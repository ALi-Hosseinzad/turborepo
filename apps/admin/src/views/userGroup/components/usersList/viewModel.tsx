import { useEffect, useState } from 'react'
// Assuming these are React hooks
import { OstiganCheckbox } from 'ui'
import { handleDate, useTranslations } from '../../imports'

// Assuming `handleDate` and `useTranslations` are custom imports

interface FormikProps {
  initialValues: {
    user_ids: any[] // Define appropriate type for user_ids
  }
  setFieldValue: (field: string, value: any) => void // Adjust types as per usage
  // Define other necessary properties of formikProps
}
// TODO:NEGAR

export const useUserListViewModel = (
  formikProps: FormikProps,
  isSuccessCreate: boolean,
): any => {
  const t = useTranslations()
  const [checkedUsers, setCheckedUsers] = useState<any[]>([]) // Define appropriate type for checkedUsers

  const AddToGroupCheckbox = ({ value }: { value: any }): JSX.Element => {
    // Define appropriate type for value
    const handleChange = (): void => {
      setCheckedUsers((curList): any[] => {
        const list = [...curList]
        if (list.includes(value)) {
          const curIndex = list.indexOf(value)
          list.splice(curIndex, 1)
          formikProps.setFieldValue('user_ids', [...list])
          return [...list]
        }
        formikProps.setFieldValue('user_ids', [...list, value])
        return [...list, value]
      })
    }

    return (
      <OstiganCheckbox
        name="user_ids"
        value={checkedUsers.includes(value)}
        onChange={handleChange}
      />
    )
  }

  useEffect(() => {
    if (formikProps.initialValues.user_ids.length) {
      setCheckedUsers(formikProps.initialValues.user_ids)
    }
  }, [formikProps.initialValues])

  const bodyInfo = (curData: any): any[] => {
    return curData?.map(({ id, name, phone, created_at: createdAt }: any) => {
      const nameArr = name?.split('_')
      const firstName = nameArr ? nameArr[0] : ''
      const lastName = nameArr ? nameArr[1] : ''
      const crtDate = handleDate(createdAt)
      return {
        id,
        firstName,
        lastName,
        phone,
        crtDate,
        addUser: <AddToGroupCheckbox value={id} />,
      }
    })
  }

  useEffect(() => {
    if (isSuccessCreate) {
      setCheckedUsers([])
    }
  }, [isSuccessCreate])

  const headInfo: string[] = [
    t('id'),
    t('firstName'),
    t('lastName'),
    t('phone'),
    t('createDateUser'),
    t('addToGroup'),
  ]

  return {
    headInfo,
    bodyInfo,
    checkedUsers,
  }
}
