import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { PersistSliceType } from '@/types/common'

const initialState: PersistSliceType = {
  user: {},
  enums: {},
  wallet: {},
  notifications: [],
}

export const persistSlice = createSlice({
  name: 'persist',
  initialState,
  reducers: {
    handleLoginedUser: (state, action: PayloadAction<object>) => {
      return { ...state, user: action.payload }
    },
    handleNotificationList: (state, action: PayloadAction<{ data: any[] }>) => {
      return { ...state, notifications: action.payload.data }
    },
    handleEnum: (state, action: PayloadAction<object>) => {
      return { ...state, enums: action.payload }
    },
    handleWallet: (state, action: PayloadAction<object>) => {
      return { ...state, wallet: action.payload }
    },
    removePersist: () => {
      return { enums: {}, user: {}, notifications: [], wallet: {} }
    },
  },
})

export const {
  handleLoginedUser,
  handleEnum,
  removePersist,
  handleNotificationList,
  handleWallet,
} = persistSlice.actions

export default persistSlice.reducer
