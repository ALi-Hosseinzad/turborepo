import { Spinner } from './spinner'

export function Loading({ isLoading }: { isLoading: any }): JSX.Element {
  return (
    <>
      {!isLoading || (
        <div>
          <div className="bg-customWhite left-0 top-0 bottom-0 right-0 fixed opacity-60 z-[1000]" />
          <div className="fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center z-[10000000]">
            <Spinner size="50px" />
          </div>
        </div>
      )}
    </>
  )
}
