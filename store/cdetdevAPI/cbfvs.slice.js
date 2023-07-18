import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_cbfv_list = createAsyncThunk(
  "cbfvs/api_v1_cbfv_list",
  async payload => {
    const response = await apiService.api_v1_cbfv_list(payload)
    return response.data
  }
)
export const api_v1_cbfv_create = createAsyncThunk(
  "cbfvs/api_v1_cbfv_create",
  async payload => {
    const response = await apiService.api_v1_cbfv_create(payload)
    return response.data
  }
)
export const api_v1_cbfv_retrieve = createAsyncThunk(
  "cbfvs/api_v1_cbfv_retrieve",
  async payload => {
    const response = await apiService.api_v1_cbfv_retrieve(payload)
    return response.data
  }
)
export const api_v1_cbfv_update = createAsyncThunk(
  "cbfvs/api_v1_cbfv_update",
  async payload => {
    const response = await apiService.api_v1_cbfv_update(payload)
    return response.data
  }
)
export const api_v1_cbfv_partial_update = createAsyncThunk(
  "cbfvs/api_v1_cbfv_partial_update",
  async payload => {
    const response = await apiService.api_v1_cbfv_partial_update(payload)
    return response.data
  }
)
export const api_v1_cbfv_destroy = createAsyncThunk(
  "cbfvs/api_v1_cbfv_destroy",
  async payload => {
    const response = await apiService.api_v1_cbfv_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const cbfvsSlice = createSlice({
  name: "cbfvs",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_cbfv_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cbfv_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_cbfv_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cbfv_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cbfv_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_cbfv_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cbfv_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cbfv_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_cbfv_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cbfv_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cbfv_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_cbfv_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cbfv_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cbfv_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_cbfv_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cbfv_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cbfv_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_cbfv_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_cbfv_list,
  api_v1_cbfv_create,
  api_v1_cbfv_retrieve,
  api_v1_cbfv_update,
  api_v1_cbfv_partial_update,
  api_v1_cbfv_destroy,
  slice: cbfvsSlice
}
