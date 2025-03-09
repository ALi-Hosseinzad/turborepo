import { AppContext } from 'contexts/app'
import { useAppContextValue } from 'contexts/app/appContextValue'
import type { JSX } from 'react'

export const AppContextProvider = ({ children }): JSX.Element => {
  const { enums } = useAppContextValue()

  return <AppContext.Provider value={enums}>{children}</AppContext.Provider>
}
