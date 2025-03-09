export function SkeletonLayout({
  isLoading,
  children,
}: {
  isLoading: any
  children: any
}): JSX.Element {
  return <>{isLoading ? <>{children}</> : null}</>
}
