import { useSelector } from 'react-redux'
import type { RootState } from '@/redux/store'

export const useTypeSelector = useSelector.withTypes<RootState>()
