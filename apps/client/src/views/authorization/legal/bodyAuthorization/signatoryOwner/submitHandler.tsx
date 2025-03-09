import type { CardType, InfoType } from '@/views/authorization/imports'
import {
  axiosPost,
  showError,
  showSuccess,
  SIGNATORY_OWNER_URL,
  useAxiosMutation,
  useAxiosQuery,
  useEffect,
  useMutation,
  useSignatoryOwnerViewModel,
  useState,
  useTranslations,
} from '@/views/authorization/imports'

function findDifferences(amountOfDataFirst: any, amountOfDataSecond: any) {
  const diffs = {}

  function compareObjects(o1: any, o2: any, path = '') {
    const keys = new Set([...Object.keys(o1), ...Object.keys(o2)])
    keys.forEach((key) => {
      const fullPath = path ? `${path}.${key}` : key
      if (o1[key] !== o2[key]) {
        if (typeof o1[key] === 'object' && typeof o2[key] === 'object') {
          compareObjects(o1[key], o2[key], fullPath)
        } else {
          diffs[fullPath] = o1[key]
        }
      }
    })
  }

  compareObjects(amountOfDataFirst, amountOfDataSecond)
  return diffs
}

function createDynamicObject(a: Record<string, string>): CardType[] {
  const nationalCards: CardType[] = []
  const processedIds = new Set<string>()

  for (const key in a) {
    const match = /_(\d+)$/.exec(key)
    if (match) {
      const id = match[1]
      if (!processedIds.has(id)) {
        nationalCards.push({
          national_card_front_path: a[`national_card_front_path_${id}`],
          national_card_back_path: a[`national_card_back_path_${id}`],
          id: parseInt(id, 10),
        })
        processedIds.add(id)
      }
    }
  }

  return nationalCards
}

export const SubmitHandler = (): any => {
  const t = useTranslations()
  const { refetchSignatoryData, handleAddProfileUploader } =
    useSignatoryOwnerViewModel()

  const { data: dataSignatoryGet } = useAxiosQuery({
    url: SIGNATORY_OWNER_URL,
    queryKey: ['SIGNATORY-OWNER-URL'],
    enabled: true,
  })

  const initialValuesSignatory = dataSignatoryGet?.data?.reduce(
    (acc: { [x: string]: any; id: any }, item: any) => {
      acc[`national_card_front_path_${item.id}`] = item.national_card_front_path
      acc[`national_card_back_path_${item.id}`] = item.national_card_back_path

      return acc
    },
    {},
  )

  const [currentIndex, setCurrentIndex] = useState(0)

  const [first, setfirst] = useState([])

  const editInput = async ({ id, ...body }: any = {}): Promise<void> => {
    const info: InfoType = {}

    if (body?.national_card_back_path) {
      info.national_card_back = body.national_card_back_path
    }
    if (body?.national_card_front_path) {
      info.national_card_front = body.national_card_front_path
    }
    if (id !== undefined) {
      await axiosPost({
        url: `${SIGNATORY_OWNER_URL}/${id}`,
        body: info,
      })
    }
  }
  const { mutateAsync, isSuccess }: any = useMutation({
    mutationFn: (e: any) => {
      return editInput(e)
    },
  })

  //   )
  useEffect(() => {
    if (currentIndex < first.length) {
      mutateAsync(first[currentIndex])
    }
  }, [first])
  useEffect(() => {
    if (isSuccess) {
      showSuccess(`${currentIndex}`)
      handleAddProfileUploader(false)
      mutateAsync(first[currentIndex])
    }
  }, [currentIndex])

  useEffect(() => {
    if (currentIndex < first?.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1)
    }
    if (currentIndex === first?.length) {
      refetchSignatoryData()
    }
  }, [isSuccess])

  const { mutateAsync: mutateCreate } = useAxiosMutation(
    SIGNATORY_OWNER_URL,
    'post',
  )

  const handleSubmit = async (values: any) => {
    const Differences = findDifferences(values, initialValuesSignatory)
    let DynamicObject: any = [{}]
    if (Differences) {
      DynamicObject = createDynamicObject(Differences)
      DynamicObject && setfirst(DynamicObject)
    } else {
      showError(t('pleaseReview'))
    }
    if (values?.nationalCardBack || values?.nationalCardFront) {
      const infoNationalCard = {
        national_card_back: values?.nationalCardBack,
        national_card_front: values?.nationalCardFront,
      }

      await mutateCreate(infoNationalCard).then(() => {
        refetchSignatoryData()
        showSuccess(t('addedSuccessfully'))
        handleAddProfileUploader(false)
      })
    }
  }

  return {
    handleSubmit,
  }
}
