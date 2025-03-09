import type {
  GuidelinesTextKeys,
  InitialValues,
  UseUndertakingViewModelReturnType,
} from '@/views/authorization/imports'
import {
  useAxiosMutation,
  useAxiosQuery,
  useTranslations,
  yup,
} from '@/views/authorization/imports'
import { UNDERTAKING_URL } from '@/constants/endPoints'

export const useUndertakingViewModel =
  (): UseUndertakingViewModelReturnType => {
    const t = useTranslations()

    const validationSchema = yup.object({
      file: yup.string().required(t('requiredGender')),
    })

    const {
      mutateAsync,
      isPending,
      isSuccess: isSuccessPost,
      data: dataUndertakingPost,
    } = useAxiosMutation(UNDERTAKING_URL, 'post')

    const { data: dataUndertakingGet, isSuccess: isSuccessUndertakingGet } =
      useAxiosQuery({
        url: UNDERTAKING_URL,
        queryKey: ['UNDERTAKING-URL'],
        enabled: true,
      })

    const initialValues: InitialValues = {
      file: dataUndertakingGet?.image || '',
    }

    const handleSubmit = (values: InitialValues) => {
      const info = {
        file: values.file,
      }
      mutateAsync(info)
    }

    const isVerify = dataUndertakingGet?.status === 'pending'
    const isVerifyPost = dataUndertakingPost?.data?.status === 'pending'
    const isReject = dataUndertakingGet?.status === 'rejected'

    const guidelinesTextKeys: GuidelinesTextKeys = {
      title: 'gideAttach',
      items: ['nationalCardText1', 'nationalCardText2'],
    }

    return {
      initialValues,
      validationSchema,
      handleSubmit,
      isPending,
      dataUndertakingPost,
      dataUndertakingGet,
      isSuccessUndertakingGet,
      isVerify,
      isVerifyPost,
      isReject,
      guidelinesTextKeys,
      isSuccessPost,
    }
  }
