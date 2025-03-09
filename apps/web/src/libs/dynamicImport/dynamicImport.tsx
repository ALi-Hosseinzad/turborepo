export default async function DynamicImports({ icon }): Promise<JSX.Element> {
  const modulePath = await import('iconsax-react')
  const Icon = modulePath[icon]

  return <Icon />
}
