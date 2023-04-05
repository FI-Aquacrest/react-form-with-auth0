import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormType } from '../../views/UserForm';

const initialState: FormType = {
  name: '',
  email: '',
  age: 0,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<FormType>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.age = action.payload.age;
    },
    reset: (state) => {
      state.name = '';
      state.email = '';
      state.age = 0;
    },
  },
});

export const { update, reset } = formSlice.actions;
export default formSlice.reducer;
