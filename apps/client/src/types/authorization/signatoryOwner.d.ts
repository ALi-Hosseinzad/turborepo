// SignatoryOwner.d.ts
import type { AxiosResponse } from 'axios'
import type * as yup from 'yup'

export interface SignatoryDataItem {
  id: number
  national_card_front_path: string
  national_card_back_path: string
  status: 'pending' | 'accepted' | 'rejected'
  status_label: string
  authentication_result?: string
}

export interface SignatoryData {
  data: any
  status: 'pending' | 'accepted' | 'rejected'
  user?: {
    verify_state?: {
      verify_profile: boolean
    }
  }
}

export interface PostSignatoryData {
  data: {
    status: 'pending' | 'accepted' | 'rejected'
  }
}

export interface UseSignatoryOwnerViewModelReturn {
  handleAddProfileUploader: (hiddenUploader: boolean | ((prevState: boolean) => boolean)) => void
  getStatusIcon: (status: string, statusText: string) => JSX.Element | null
  refetchSignatoryData: () => void
  showProfileUploader: boolean
  mergedInitialValues: Record<string, any>
  staticValidationSchema: yup.ObjectSchema<any>
  isPostPending: boolean
  postSignatoryData: AxiosResponse<PostSignatoryData> | undefined
  signatoryData: SignatoryData | undefined
  isSignatoryDataSuccess: boolean
  isVerify: boolean
  isVerifyPost: boolean
  isReject: boolean
  guidelinesTextKeys: { title: string; items: string[] }
  isPostSuccess: boolean
  isUserDataSuccess: boolean
  allAuthResults: string[]
}

export const useSignatoryOwnerViewModel: () => UseSignatoryOwnerViewModelReturn

export interface InfoType {
  national_card_back?: string
  national_card_front?: string
}

export interface CardType {
  national_card_front_path: string
  national_card_back_path: string
  id: number
}