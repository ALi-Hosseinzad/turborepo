// import { useMutation, yup } from '../pdp/imports'
// import { t } from '../terms/imports'
// import { JUST_PERSIAN_REGEX, PHONE_NUMBER_REGEX } from '@/constants/regex'
// import { useDataQuery } from '@/hooks/useDataQuery'
import { useMutation } from '@tanstack/react-query'
import { yup } from '../pdp/imports'
import { t } from '../terms/imports'
import { axiosPost } from '@/configs/httpService/axios/httpService'
import { useDataQuery } from '@/hooks/useDataQuery'

export const useContactUsViewModel = (): any => {
  const dataContactUs = useDataQuery({
    nameQueryKey: 'ContactUs',
    urlQueryFn: 'landing/contact-us',
  })

  const initialValues: any = {
    firstName: '',
    email: '',
    text: '',
  }

  const validationSchema = yup.object({
    firstName: yup.string().required("t('required')"),
    email: yup.string().email(t('emailError')).required("t('required')"),
    text: yup.string().required("t('required')"),
  })

  const createAuthorization = async (e: any): Promise<void> => {
    await axiosPost({ url: '/contact-us', body: e })
  }

  const mutation = useMutation({
    mutationFn: (e) => createAuthorization(e),
    // onSuccess: () => {
    //   // I will fire first
    // },
    // onError: (error, variables, context) => {
    //   //   test
    //   //   // I will fire first
    // },
    // onSettled: (data, error, variables, context) => {
    //  test

    //   // I will fire first
    // },
  })

  const onSubmit = async (values: any, formikProps: any): Promise<void> => {
    // You can modify this part based on your actual data structure
    const orderInfo: any = {
      name: values?.firstName,
      email: values?.email,
      text: values?.text,
    }

    // Call the mutation function
    // TODO: MT :: orderInfo as any
    await mutation.mutateAsync(orderInfo)

    // You can reset the form here or do any other actions after successful submission
    formikProps.resetForm()
  }

  return {
    initialValues,
    validationSchema,
    onSubmit,
    dataContactUs,
  }
}
