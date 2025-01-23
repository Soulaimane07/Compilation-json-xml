import { createSlice } from "@reduxjs/toolkit";

const ContentSlice = createSlice({
  name: "content",
  initialState: {
    json: "",
    xml: "",
  },
  reducers: {
    setJson(state, action) {
      state.json = action.payload;
    },
    setXml(state, action) {
      state.xml = action.payload; // Fix here
    },
  },
});

export const { setJson, setXml } = ContentSlice.actions;
export default ContentSlice.reducer;
