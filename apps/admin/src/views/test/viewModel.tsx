import * as yup from 'yup'
import { useQuery } from '@tanstack/react-query'
import { axiosGet } from '../../configs/httpService/axios/httpService'
import { AUTHENTICATION_RESULT_URL } from '../../constants/endPoints'

export const useTestViewModel = (): any => {
  const initialValues = {
    type: '',
    multitype: [],
    urltype: '',
    multiurltype: [],

    selecttype: '',
    multiselecttype: [],
    urlselecttype: '',
    multiurlselecttype: [],
  }
  const validationSchema = yup.object({
    type: yup.object().required('empty'),
    multitype: yup.array().min(1, 'choose more then one').required('empty'),
    urltype: yup.object().required('empty'),
    multiurltype: yup.array().min(1, 'choose more then one').required('empty'),

    selecttype: yup.object().required('empty'),
    multiselecttype: yup
      .array()
      .min(1, 'choose more then one')
      .required('empty'),
    urlselecttype: yup.object().required('empty'),
    multiurlselecttype: yup
      .array()
      .min(1, 'choose more then one')
      .required('empty'),
  })
  const onSubmit = (values): any => {
    return <p>{values}</p>
  }

  const { isLoading, data } = useQuery({
    queryKey: ['Optionss'],
    queryFn: () => axiosGet({ url: AUTHENTICATION_RESULT_URL }),
    staleTime: 10 * 6000,
  })

  return {
    initialValues,
    validationSchema,
    onSubmit,
    isLoading,
    data,
  }
}
