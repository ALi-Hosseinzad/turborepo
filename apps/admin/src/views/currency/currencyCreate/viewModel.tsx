import { useCreate } from 'hooks/useCreate'
import type { UseCurrencyCreateViewModelType } from '../imports'
import { CURRENCY_LIST_QUERY, CURRENCY_URL, useListViewModel } from '../imports'

export const useCurrencyCreateViewModel =
  (): UseCurrencyCreateViewModelType => {
    const { isLoadingSubmit, handleRequest } = useCreate({
      url: CURRENCY_URL,
    })

    const { refetchList, isFetching } = useListViewModel({
      url: CURRENCY_URL,
      queryKey: CURRENCY_LIST_QUERY,
    })

    const initialValues = {
      name: '',
      symbol: '',
      status: 'active',
      exchange_price: '',
    }

    const onSubmit = (values, formikProps): any => {
      const body = {
        ...values,
      }
      handleRequest(body, refetchList, formikProps)
    }

    return {
      initialValues,
      isLoading: isLoadingSubmit || isFetching,
      onSubmit,
      refetchList,
    }
  }
