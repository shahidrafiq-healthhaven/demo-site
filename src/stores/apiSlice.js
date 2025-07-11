// features/drugSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// 🔁 Async thunk to fetch search results
export const fetchDrugsByName = createAsyncThunk(
  'drug/fetchDrugsByName',
  async (name, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://your-api-url/api/web/drugs/search?name=${encodeURIComponent(name)}`
      );
      if (response.data.statusCode === 200) {
        return response.data.response?.drugs || [];
      } else {
        return rejectWithValue('Invalid status code');
      }
    } catch (error) {
      return rejectWithValue(error.message || 'Error fetching drugs');
    }
  }
);

const apiSlice = createSlice({
  name: 'drug',
  initialState: {
    drugs: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearDrugs: (state) => {
      state.drugs = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDrugsByName.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDrugsByName.fulfilled, (state, action) => {
        state.loading = false;
        state.drugs = action.payload;
      })
      .addCase(fetchDrugsByName.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearDrugs } = apiSlice.actions;
export default apiSlice.reducer;
