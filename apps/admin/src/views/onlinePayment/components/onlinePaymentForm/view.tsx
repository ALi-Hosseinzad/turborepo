'use client'

import type { OnlinePaymentFormViewPropsType } from '../../imports'
import {
  CATEGORY_URL,
  CustomFormikAutoComplete,
  CustomFormikSelect,
  FORM_URL,
  FormikSelect,
  FormikTextEditor,
  FormikTextField,
  FormikUploader,
  FormLayout,
  Loading,
  REGION_URL,
  SUBSCRIPTION_URL,
  TAG_URL,
  UploadIcon,
  useStatus,
  useTranslations,
} from '../../imports'

const OnlinePaymentFormView = ({
  isLoading,
  validationSchema,
  initialValues,
  onSubmit,
  titleHeader1,
  titleHeader2,
  handleDisablePrice,
  disablePrice,
}: OnlinePaymentFormViewPropsType): JSX.Element => {
  const t = useTranslations()
  const { statusList } = useStatus()

  return (
    <>
      <Loading isLoading={isLoading} />
      <FormLayout
        initialValues={initialValues}
        validationSchema={validationSchema}
        titleHeader1={titleHeader1}
        titleHeader2={titleHeader2}
        onSubmit={onSubmit}
      >
        <div className="grid grid-cols-2 gap-11 w-full">
          <FormikTextField
            name="title"
            title={t('serviceName')}
            placeholder={t('serviceName')}
            className="w-full"
          />
          <CustomFormikSelect
            label={t('choseCategory')}
            name="category_ids"
            placeholder={t('chooseCategory')}
            queryKey="categories"
            url={CATEGORY_URL}
            optionLabel="name"
            optionValue="id"
            multiple
          />
          <CustomFormikSelect
            name="region_ids"
            label={t('choseRegion')}
            placeholder={t('chooseRegion')}
            queryKey="regions"
            url={REGION_URL}
            optionLabel="name"
            optionValue="id"
            multiple
          />
          <CustomFormikSelect
            name="form_id"
            label={t('choseForm')}
            placeholder={t('chooseForm')}
            queryKey="forms"
            url={FORM_URL}
            optionLabel="name"
            optionValue="id"
          />
          <CustomFormikAutoComplete
            url={TAG_URL}
            queryKey="tag"
            name="tag_ids"
            label={t('tags')}
            multiSelection
            optionTitle="name"
          />
          <CustomFormikSelect
            label={t('chooseSubscription')}
            name="subscription_ids"
            placeholder={t('chooseCategory')}
            queryKey="subscriptions"
            url={SUBSCRIPTION_URL}
            optionLabel="description"
            optionValue="id"
            multiple
            onChangeHandler={(value) => handleDisablePrice(value)}
          />
          <FormikTextField
            name="min_price"
            title={t('minPrice')}
            placeholder={t('minPrice')}
            className="w-full"
            disabled={disablePrice}
          />
          <FormikTextField
            name="max_price"
            title={t('maxPrice')}
            placeholder={t('maxPrice')}
            className="w-full"
            disabled={disablePrice}
          />
          <FormikSelect
            name="status"
            selectLabel={t('chooseStatus')}
            optionValue="value"
            optionLabel="label"
            listOptions={statusList}
            placeholder={t('chooseStatus')}
          />
          <CustomFormikSelect
            name="wage_id"
            label={t('wage')}
            placeholder={t('chooseForm')}
            queryKey="wage-list"
            url={WAGE_URL}
            optionLabel="amount"
            optionValue="id"
          />
          <FormikTextField
            name="sku"
            title={t('sku')}
            placeholder={t('sku')}
            className="w-full"
          />
          <FormikTextField
            name="slug"
            title={t('slug')}
            placeholder={t('slug')}
            className="w-full"
          />
          <div className="grid col-span-2 grid-cols-6 gap-5">
            <FormikTextEditor
              className="col-span-4 h-[240px]"
              name="description"
              placeholder={t('description')}
              textFeildLabel={t('description')}
            />
            <FormikUploader
              attachIcon={<UploadIcon />}
              wrapperClass="col-span-2"
              uploadAreaClass="h-[240px]"
              name="image"
              isPositionCenter
              title={t('uploadImg')}
              isColumn
              limitationFileSizeText="25"
              errorCallback={() => {
                // TODO
              }}
            />
          </div>
        </div>
      </FormLayout>
    </>
  )
}

export default OnlinePaymentFormView
