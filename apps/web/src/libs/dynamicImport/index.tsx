import DynamicImports from '@/libs/dynamicImport/dynamicImport'

const dynamicImportWrapper = ({ icon }): JSX.Element => {
  /* @ts-expect-error Server Component */
  return <DynamicImports icon={icon} />
}

export default dynamicImportWrapper
