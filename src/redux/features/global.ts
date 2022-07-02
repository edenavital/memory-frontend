import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "../store";

interface GlobalState {
  nickname: string;
}

const initialState: GlobalState = {
  nickname: "",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    globalNickname: (state: GlobalState, action: PayloadAction<string>) => {
      state.nickname = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { globalNickname } = globalSlice.actions;

export default globalSlice.reducer;
