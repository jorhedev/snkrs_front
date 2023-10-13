// newsletterSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define una función asincrónica para realizar la solicitud POST al servidor
export const subscribeToNewsletter = createAsyncThunk(
  "newsletter/subscribe",
  async (email, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3001/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = await response.json();
        return rejectWithValue(data); // En caso de un error, devuelve los datos del error
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message); // En caso de un error de red u otro error
    }
  }
);

// Define el slice del boletín
const newsletterSlice = createSlice({
  name: "newsletter",
  initialState: {
    subscriptionStatus: "idle", // Puede ser "idle", "loading", "succeeded", o "failed"
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(subscribeToNewsletter.pending, (state) => {
        state.subscriptionStatus = "loading";
        state.error = null;
      })
      .addCase(subscribeToNewsletter.fulfilled, (state) => {
        state.subscriptionStatus = "succeeded";
        state.error = null;
      })
      .addCase(subscribeToNewsletter.rejected, (state, action) => {
        state.subscriptionStatus = "failed";
        state.error = action.payload;
      });
  },
});

export default newsletterSlice.reducer;
