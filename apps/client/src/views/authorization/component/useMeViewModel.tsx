import { useSelector } from 'react-redux'
import { type RootState } from '../imports'

export const UserPersist = (): any => {
  const { user } = useSelector((state: RootState) => state.persist)

  return { user }
}
