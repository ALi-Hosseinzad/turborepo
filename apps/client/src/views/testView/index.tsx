'use client'

// import { useTypeSelector } from '@/hooks/useTypeSelector'
// import { increment } from '@/redux/reducers/auth.slice'

const TestView = (): JSX.Element => {
  // const state = useTypeSelector((state) => state.auth)
  // const dispatch = useDispatch()

  return (
    <div className="border border-red-300 text-center">
      {/* <button type="button" onClick={() => dispatch(increment())}>
        button+ {state.value}
      </button> */}
    </div>
  )
}

export default TestView
