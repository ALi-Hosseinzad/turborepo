import {
  FormUserDetailsLayoutView,
  useUserDetailsLayoutViewModel,
} from '../../imports'

export const FormUserDetailsLayout = (props: any): JSX.Element => {
  const viewModelProps = useUserDetailsLayoutViewModel(props.refetchUserInfo)

  return (
    <FormUserDetailsLayoutView {...props} {...viewModelProps}>
      {props.children}
    </FormUserDetailsLayoutView>
  )
}
