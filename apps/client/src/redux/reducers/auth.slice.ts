import { createSlice } from '@reduxjs/toolkit'
import type { AuthSliceType } from '@/types/common'

const initialState: AuthSliceType = {
  curStep: 'initStep',
  phone: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    handleLoginStep: (state, action) => {
      return {
        ...state,
        curStep: action.payload,
      }
    },
    handlePhone: (state, action) => {
      return {
        ...state,
        phone: action.payload,
      }
    },
    handleLogout: () => {
      return {
        phone: '',
        curStep: 'initStep',
      }
    },
  },
})

export const { handleLoginStep, handlePhone, handleLogout } = authSlice.actions

export default authSlice.reducer
