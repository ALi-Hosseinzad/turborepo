'use client'

import React from 'react'
import { FormLayout } from '../layouts/forms/formLayout'
import { FormikAutoComplete, FormikSelect } from '../roles/imports'
import { AUTHENTICATION_RESULT_URL } from '../userDetails/imports'
import { useTestViewModel } from './viewModel'

export const TestSelectView = (): JSX.Element => {
  const { initialValues, validationSchema, onSubmit, isLoading, data } =
    useTestViewModel()

  return (
    <FormLayout
      initialValues={initialValues}
      validationSchema={validationSchema}
      titleHeader1="addNewRole"
      titleHeader2="rolesInfo"
      disabled={isLoading}
      onSubmit={onSubmit}
    >
      <div className="w-full flex gap-14">
        <div className="w-1/2 justify-start flex flex-col gap-6">
          <FormikAutoComplete
            listOption={data}
            optionTitle="description"
            name="type"
            placeholder="category"
            autoCompleteLabel="autocomplete-whitout url"
            defaultValue={data?.[0]}
            isLoading={isLoading}
          />
          <FormikAutoComplete
            listOption={data}
            optionTitle="description"
            name="multitype"
            placeholder="category"
            autoCompleteLabel="autocomplete-whitout url-multi"
            defaultValue={data?.[0]}
            isLoading={isLoading}
            multiSelection
          />
          <FormikAutoComplete
            url={AUTHENTICATION_RESULT_URL}
            optionTitle="description"
            name="urltype"
            placeholder="category"
            autoCompleteLabel="autocomplete-whit url"
          />
          <FormikAutoComplete
            url={AUTHENTICATION_RESULT_URL}
            optionTitle="description"
            name="multiurltype"
            placeholder="category"
            autoCompleteLabel="autocomplete-whit url-multi"
            multiSelection
          />
        </div>
        <div className="w-1/2 justify-start flex flex-col gap-6">
          <FormikSelect
            listOptions={data}
            name="selecttype"
            optionLabel="description"
            optionValue="description"
            placeholder="choose"
            selectLabel="select-whitout url"
            isLoading={isLoading}
            defaultValue={data?.[1]}
          />
          <FormikSelect
            listOptions={data}
            name="multiselecttype"
            optionLabel="description"
            optionValue="description"
            placeholder="choose"
            selectLabel="select-whitout url-multi"
            isLoading={isLoading}
            defaultValue={data?.[1]}
            multiple
          />
          <FormikSelect
            url={AUTHENTICATION_RESULT_URL}
            name="urlselecttype"
            optionLabel="description"
            optionValue="description"
            placeholder="choose"
            selectLabel="select-whit url"
            isLoading={isLoading}
          />
          <FormikSelect
            url={AUTHENTICATION_RESULT_URL}
            name="multiurlselecttype"
            optionLabel="description"
            optionValue="description"
            placeholder="choose"
            selectLabel="select-whit url-multi"
            isLoading={isLoading}
            multiple
          />
        </div>
      </div>
    </FormLayout>
  )
}
