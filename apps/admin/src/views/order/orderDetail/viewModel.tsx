'use client'

import type {
  OrderDetailType,
  UseOrderDetailModelPropsType,
  UserOnSubmitFormikPropsType,
} from '../import'
import {
  axiosGet,
  axiosPost,
  ORDER_URL,
  showSuccess,
  useMutation,
  useParams,
  useQuery,
  UseTomanToRial,
  useTranslations,
  yup,
} from '../import'

let giftCardFirstPart: OrderDetailType[] = []
let giftCardSecondPart: OrderDetailType[] = []
let giftCardThirdPart: OrderDetailType[] = []
let onlinePaymentFirstPart: OrderDetailType[] = []
let onlinePaymentSecondPart: OrderDetailType[] = []
let orderHeader = {}
let orderId: number | string

export const UseOrderDetailModel = (): UseOrderDetailModelPropsType => {
  const t = useTranslations()

  const currentPage: { id?: string } = useParams()
  const searchParamsSplit = `${ORDER_URL}/${currentPage?.id}`

  const selectFunction = (data) => {
    const updatedAt = data?.updated_at.split('T')

    const formattedUpdatedAt = updatedAt[0].replaceAll('-', '/')

    if (data?.order_type_label === 'GiftCardProduct') {
      giftCardFirstPart = [
        {
          translate: t('productName'),
          value: data?.orderable?.name,
        },
        {
          translate: t('giftCardPrice'),
          value: `${data?.orderable?.price}  ${data?.orderable?.currency}`,
        },
        {
          translate: t('regionCard'),
          value: data?.orderable?.region,
        },
        {
          translate: t('currency'),
          value: `${data?.orderable?.currency} ${data.orderable?.region}`,
        },
        {
          translate: t('count'),
          value: data?.count,
        },
      ]
      giftCardSecondPart = [
        {
          translate: t('status'),
          value: data?.status_label,
        },
        {
          translate: t('totalArice'),
          value: `${UseTomanToRial(data?.full_price)} ${t('rial')} `,
        },
        {
          translate: t('updatedAt'),
          value: formattedUpdatedAt,
        },
        {
          translate: t('discountPrice'),
          value: UseTomanToRial(data?.discount_price),
        },
        {
          translate: t('currency'),
          value: ` ${data.currency?.name} - ${data.currency?.symbol}`,
        },

        {
          translate: t('pricePaid'),
          value: ` ${UseTomanToRial(data?.price_after_discount)}${t('rial')}`,
        },
        {
          translate: t('wage'),
          value:
            data?.wage?.type === 'percent'
              ? `${data?.wage?.amount} %`
              : `${UseTomanToRial(data?.wage?.amount)} ${t('rial')} `,
        },
        {
          translate: t('currencyConversionPrice'),
          value: `${UseTomanToRial(data?.currency?.exchange_money_active)} ${t('rial')} `,
        },
        {
          translate: t('tax'),
          value: `${data?.tax?.amount} % `,
        },
      ]
      giftCardThirdPart = [
        {
          translate: t('token'),
          value: data?.tokens,
        },
      ]
    } else if (data?.order_type_label === 'OnlinePayment') {
      onlinePaymentFirstPart = [
        {
          translate: t('productName'),
          value: data?.orderable?.service?.title,
        },
        {
          translate: t('hurryOrder'),
          value: data?.orderable?.hurry,
        },
        {
          translate: t('currency'),
          value: `${data?.orderable?.service?.currency?.name} ${data?.orderable?.service.currency?.symbol} `,
        },

        {
          translate: 'onlinePaymentHasFormInputs',
          value: data?.orderable?.online_payment_has_form_inputs,
        },
      ]
      if (data?.orderable?.subscription !== null) {
        onlinePaymentFirstPart.unshift(
          {
            translate: t('subscriptionType'),
            value: data?.orderable?.subscription?.title,
          },
          {
            translate: t('serviceAmount'),
            value: data?.orderable?.subscription?.price,
          },
        )
      } else {
        onlinePaymentFirstPart.push({
          translate: t('serviceAmount'),
          value: data?.orderable?.price,
        })
      }
      onlinePaymentSecondPart = [
        {
          translate: t('updatedAt'),
          value: formattedUpdatedAt,
        },
        {
          translate: t('totalArice'),
          value: `${UseTomanToRial(data?.full_price)} ${t('rial')} `,
        },

        {
          translate: t('status'),
          value: data?.status_label,
        },
        {
          translate: t('discountPrice'),
          value: `${UseTomanToRial(data?.discount_price)} ${t('rial')} `,
        },
        {
          translate: t('currency'),
          value: ` ${data.currency?.name} - ${data.currency?.symbol}`,
        },

        {
          translate: t('pricePaid'),
          value: `${UseTomanToRial(data?.price_after_discount)} ${t('rial')} `,
        },
        {
          translate: t('wage'),
          value:
            data?.wage?.type === 'percent'
              ? `${data?.wage?.amount} %`
              : `${UseTomanToRial(data?.wage?.amount)} ${t('rial')} `,
        },
        {
          translate: t('currencyConversionPrice'),
          value: `${UseTomanToRial(data?.currency?.exchange_money_active)} ${t('rial')} `,
        },
        {
          translate: t('tax'),
          value: `${data?.tax?.amount} % `,
        },
      ]
    }
    orderHeader = {
      productType: data?.order_type_label,
      title:
        data?.order_type_label == 'GiftCardProduct'
          ? data?.orderable?.name
          : data?.orderable?.service?.title,
      userName: data?.user_name,
      image:
        data?.order_type_label == 'GiftCardProduct'
          ? data?.orderable?.image
          : data?.orderable?.service?.image,
    }
    orderId = data?.orderable?.id
  }

  const { isLoading } = useQuery({
    queryKey: ['order'],
    queryFn: () => axiosGet({ url: searchParamsSplit }),
    select: selectFunction,
  })

  const initialValues: UseOrderDetailModelPropsType['initialValues'] = {
    attachments: '',
    description: '',
  }

  const validationSchema = yup.object({
    attachments: yup.array().required(t('emptyError')),
    description: yup.string().required(t('emptyError')),
  })
  const createAuthorization = async (e: unknown): Promise<void> => {
    await axiosPost({ url: '/online-payment-response', body: e })
  }

  const mutation = useMutation({
    mutationFn: (e) => createAuthorization(e),
    onSuccess: () => {
      showSuccess(t('accept'))
    },
  })

  const onSubmit = async (
    values: any,
    formikProps: UserOnSubmitFormikPropsType,
  ): Promise<void> => {
    const OnlinePaymentResponse: any = {
      description: values?.description,
      attachments: values?.attachments,
      status: 'pending',
      online_payment_id: Number(orderId),
    }

    await mutation.mutateAsync(OnlinePaymentResponse)
    formikProps.resetForm()
  }

  return {
    orderDetailData: {
      giftCardFirstPart,
      giftCardSecondPart,
      giftCardThirdPart,
      onlinePaymentFirstPart,
      onlinePaymentSecondPart,
      orderHeader,
    },
    isLoading,
    initialValues,
    validationSchema,
    onSubmit,
  }
}
