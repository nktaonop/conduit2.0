import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './../store'
import { User } from '@/interfaces/user'

interface UserState {
  user: User | null
}

const initialState: UserState = {
  user: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    user: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
  },
})

export const { user } = userSlice.actions

export const selectCount = (state: RootState) => state.user.user

export default userSlice.reducer
