import { createContext } from 'react'
import type { AppContextType } from 'types/appContext'

export const AppContext = createContext<AppContextType>({} as AppContextType)
