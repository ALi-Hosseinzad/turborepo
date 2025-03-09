import {
  ArticleOfAssociationView,
  AuthenticationResult,
  UseArticleOfAssociationViewModel,
} from '@/views/authorization/imports'

const ArticleOfAssociation: React.FC = () => {
  const { dataArticleOfAssociationGet, isReject } =
    UseArticleOfAssociationViewModel()

  return (
    <>
      <AuthenticationResult
        isReject={isReject}
        data={dataArticleOfAssociationGet?.authentication_result}
      />

      <ArticleOfAssociationView />
    </>
  )
}

export default ArticleOfAssociation
