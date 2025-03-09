import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

function TopLoader() {
  return (
    <ProgressBar
      height="4px"
      shallowRouting
      startPosition={0.08}
      color="var(--primary-default)"
      options={{
        showSpinner: false,
        trickleSpeed: 800,
        easing: 'ease',
        speed: 200,
      }}
    />
  )
}

export default TopLoader
