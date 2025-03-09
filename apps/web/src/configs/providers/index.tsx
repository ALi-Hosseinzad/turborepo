import NoSsrProvider from './noSsrProvider'

const Provider = ({ children }): any => {
  return (
    <NoSsrProvider>
      <div>{children}</div>
    </NoSsrProvider>
  )
}

export default Provider
