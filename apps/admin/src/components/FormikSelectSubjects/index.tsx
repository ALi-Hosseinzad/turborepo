import React from 'react'
import { LabelField } from 'ui'
import type { SubjectsSelectPropsType } from 'types/subject'
import FormikSelectSubjectsView from './view'
import { useSubjects } from './viewModel'

const FormikSelectSubjects = (props: SubjectsSelectPropsType): JSX.Element => {
  const { onChange, name, label } = props
  const { subjects, isLoading, onScrollToLastItemHandler, params } =
    useSubjects()

  return (
    <div className="w-full">
      <LabelField title={label} />
      <FormikSelectSubjectsView
        subjects={subjects}
        name={name}
        isLoading={isLoading}
        params={params}
        onChange={onChange}
        onScrollToLastItemHandler={onScrollToLastItemHandler}
      />
    </div>
  )
}

export default FormikSelectSubjects
