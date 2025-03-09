import { Skeleton } from '@mui/material'
import type { CompletedInfoViewModelType } from '../../imports'
import {
  CompletedInfoViewModel,
  DownloadIcon,
  Header2,
  Image,
  Link,
  useTranslations,
} from '../../imports'

export const CompletedInfoView: React.FC = () => {
  const {
    dataGazetteGet,
    dataArticleOfAssociationGet,
    dataSignatoryGet,
    dataUndertakingGet,
  }: CompletedInfoViewModelType = CompletedInfoViewModel()
  const t = useTranslations()

  const accepted =
    dataArticleOfAssociationGet?.status === 'accepted' &&
    dataGazetteGet?.status === 'accepted' &&
    dataUndertakingGet?.status === 'accepted'

  return (
    <>
      {accepted ? (
        <div className="grid grid-cols-3 gap-4 mt-14 bg-[#F7FAFA]">
          <div className="border-solid border-2 border-gray-AEAEAE rounded-lg p-6 ">
            <div className="flex justify-between px-3">
              <Header2 title={t('thirdLevelDescriptionLegal')} />
              <Link
                href={dataArticleOfAssociationGet?.image}
                replace
                target="_blank"
              >
                <DownloadIcon />
              </Link>
            </div>
            <Image
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
                padding: '0 24px',
                objectFit: 'fill',
                maxHeight: '280px',
                minHeight: '280px',
              }}
              width={0}
              height={0}
              alt="ArticleOfAssociation"
              src={dataArticleOfAssociationGet?.image}
            />
          </div>
          <div className="border-solid border-2 border-gray-AEAEAE rounded-lg p-6 ">
            <div className="flex justify-between px-3">
              <Header2 title={t('fifthLevelDescriptionLegal')} />
              <Link href={dataUndertakingGet?.image} replace target="_blank">
                <DownloadIcon />
              </Link>
            </div>
            <Image
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
                padding: '0 24px',
                objectFit: 'fill',
                maxHeight: '280px',
                minHeight: '280px',
              }}
              width={0}
              height={0}
              alt="Undertaking"
              src={dataUndertakingGet?.image}
            />
          </div>
          <div className="border-solid border-2 border-gray-AEAEAE rounded-lg p-6 ">
            <div className="flex justify-between px-3">
              <Header2 title={t('secondLevelDescriptionLegal')} />
              <Link href={dataGazetteGet?.image} replace target="_blank">
                <DownloadIcon />
              </Link>
            </div>
            <Image
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
                padding: '0 24px',
                objectFit: 'fill',
                maxHeight: '280px',
                minHeight: '280px',
              }}
              width={0}
              height={0}
              alt="Gazette"
              src={dataGazetteGet?.image}
            />
          </div>
          <div className=" col-span-3 mt-12 ">
            <div className="flex flex-wrap rounded-lg border-solid border-2 border-gray-AEAEAE">
              {dataSignatoryGet?.data?.map((item: any, index) => {
                const numberNationalCard = index + 1
                return (
                  <div className=" flex flex-col  basis-1/2 p-2 ">
                    <div className="flex basis-full">
                      <Header2
                        className="!mt-6  !pb-4"
                        title={`${t('fourthLevelDescriptionLegal')} ${t('number')} ${numberNationalCard}`}
                      />
                    </div>
                    <div className="flex flex-wrap bg-gray-E5E5E5">
                      <div className="basis-1/2 p-2 overflow-hidden">
                        <Image
                          sizes="100vw"
                          style={{
                            width: '100%',
                            height: 'auto',
                            padding: '0 24px',
                            objectFit: 'fill',
                            maxHeight: '198px',
                            minHeight: '198px',
                          }}
                          width={0}
                          height={0}
                          alt="national_card_front"
                          src={item?.national_card_front_path}
                        />
                      </div>
                      <div className="basis-1/2 p-2 overflow-hidden">
                        <Image
                          sizes="100vw"
                          style={{
                            width: '100%',
                            height: 'auto',
                            padding: '0 24px',
                            objectFit: 'fill',
                            maxHeight: '198px',
                            minHeight: '198px',
                          }}
                          width={0}
                          height={0}
                          alt="national_card_back"
                          src={item?.national_card_back_path}
                        />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4 mt-14 bg-[#F7FAFA]">
          <div className="border-solid border-2 border-gray-AEAEAE rounded-lg p-6 ">
            <div className="flex justify-between px-3">
              <Skeleton animation="wave" width="20%" height={20} />
              <Skeleton animation="wave" width="20%" height={20} />
            </div>
            <Skeleton animation="wave" width="100%" height={330} />
          </div>
          <div className="border-solid border-2 border-gray-AEAEAE rounded-lg p-6 ">
            <div className="flex justify-between px-3">
              <Skeleton animation="wave" width="20%" height={20} />
              <Skeleton animation="wave" width="20%" height={20} />
            </div>
            <Skeleton animation="wave" width="100%" height={330} />
          </div>
          <div className="border-solid border-2 border-gray-AEAEAE rounded-lg p-6 ">
            <div className="flex justify-between px-3">
              <Skeleton animation="wave" width="20%" height={20} />
              <Skeleton animation="wave" width="20%" height={20} />
            </div>
            <Skeleton animation="wave" width="100%" height={330} />
          </div>

          <div className=" col-span-3 mt-12 ">
            <div className="flex flex-wrap rounded-lg border-solid border-2 border-gray-AEAEAE">
              <div className=" flex flex-col  basis-1/2 p-2 ">
                <div className="flex basis-full">
                  <Skeleton animation="wave" width="20%" height={20} />
                </div>
                <div className="flex flex-wrap bg-gray-E5E5E5">
                  <div className="basis-1/2 p-2 overflow-hidden">
                    <Skeleton animation="wave" width="100%" height={198} />
                  </div>
                  <div className="basis-1/2 p-2 overflow-hidden">
                    <Skeleton animation="wave" width="100%" height={198} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
