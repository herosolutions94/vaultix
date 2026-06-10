import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "@/helpers/http";
import { doObjToFormData } from "@/helpers/helpers";
import { setCookie } from "cookies-next";
import Text from "@/components/text";
import toast from "react-hot-toast";
import { authToken } from "@/helpers/authToken";


export const createEvent = createAsyncThunk(
  "create-event",
  async (formData, { rejectWithValue, dispatch }) => {
    try {
      const response = await http.post(
        "create-event",
        doObjToFormData({...formData, token: authToken()})
      );
      const { data } = response;
      if (data.validationErrors) {
        toast.error(<Text string={data?.validationErrors} />);
      } else if (data?.status === 1) {
        toast.success(<Text string={data?.msg} />);
      } else {
        toast.error(<Text string={data?.msg} />);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateEventsState = createAsyncThunk(
  'event/updateEventsState',
  async (value, { rejectWithValue }) => {
    return value;
  }
);

export const fetchMemberEvents = createAsyncThunk(
  'member/fetchMemberEvents',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await http.post(
        'my-events',
        doObjToFormData({ ...formData, token: authToken() })
      );
      return response.data;
    } catch (error) {
      // if (error.response.status === 401) {
      //     removeCookies("authToken");
      // }
      return rejectWithValue(error.response.data);
    }
  }
);

export const editEvent = createAsyncThunk(
  "edit-event",
  async (formData, { rejectWithValue, dispatch }) => {
    try {
      const response = await http.post(
        `edit-event/${formData?.event_id}`,
        doObjToFormData({...formData, token: authToken()})
      );
      const { data } = response;
      if (data.validationErrors) {
        toast.error(<Text string={data?.validationErrors} />);
      } else if (data?.status === 1) {
        toast.success(<Text string={data?.msg} />);
      } else {
        toast.error(<Text string={data?.msg} />);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const saveAsDraftEvent = createAsyncThunk(
  "save-as-draft-event",
  async (formData, { rejectWithValue, dispatch }) => {
    try {
      const response = await http.post(
        `save-as-draft-event`,
        doObjToFormData({...formData, token: authToken()})
      );
      const { data } = response;
      if (data.validationErrors) {
        toast.error(<Text string={data?.validationErrors} />);
      } else if (data?.status === 1) {
        toast.success(<Text string={data?.msg} />);
        setTimeout(() => {
          window.location.replace('/dashboard/event/'+data?.encoded_id);
        }, 2000);
      } else {
        toast.error(<Text string={data?.msg} />);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteEvent = createAsyncThunk(
  "delete-event",
  async (formData, { rejectWithValue, dispatch }) => {
    try {
      const response = await http.post(
        `delete-event/${formData?.event_id}`,
        doObjToFormData({...formData, token: authToken()})
      );
      const { data } = response;
      if (data.validationErrors) {
        toast.error(<Text string={data?.validationErrors} />);
      } else if (data?.status === 1) {
        toast.success(<Text string={data?.msg} />);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        toast.error(<Text string={data?.msg} />);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchFavoriteEvents = createAsyncThunk(
  'member/fetchFavoriteEvents',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await http.post(
        'favorite-events',
        doObjToFormData({ ...formData, token: authToken() })
      );
      return response.data;
    } catch (error) {
      // if (error.response.status === 401) {
      //     removeCookies("authToken");
      // }
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchAttendingEvents = createAsyncThunk(
  'member/fetchAttendingEvents',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await http.post(
        'attending-events',
        doObjToFormData({ ...formData, token: authToken() })
      );
      return response.data;
    } catch (error) {
      // if (error.response.status === 401) {
      //     removeCookies("authToken");
      // }
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchInterestedEvents = createAsyncThunk(
  'member/fetchInterestedEvents',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await http.post(
        'interested-events',
        doObjToFormData({ ...formData, token: authToken() })
      );
      return response.data;
    } catch (error) {
      // if (error.response.status === 401) {
      //     removeCookies("authToken");
      // }
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchDashboardEvents = createAsyncThunk(
  'member/fetchDashboardEvents',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await http.post(
        'dashboard-events',
        doObjToFormData({ ...formData, token: authToken() })
      );
      return response.data;
    } catch (error) {
      // if (error.response.status === 401) {
      //     removeCookies("authToken");
      // }
      return rejectWithValue(error.response.data);
    }
  }
);


const initialState = {
  error: false,
  isFormProcessing: false,
  showSuccessStep: false,
  isFetching: false,
  events:null,
  error:false,
  memberRow:null,
  data:null,
  type:false,
  pagination:null,
  event:null,
  draftEvents:null,
  favorites:null,
  attending:null,
  interested:null,
  myEvents: null,
  upcomingEvents: null,
  curatedEvents: null,
  currentEvents:null,
  // hidePopup: false,
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createEvent.pending, (state) => {
        state.isFormProcessing = true;
      })
      .addCase(createEvent.fulfilled, (state, action) => {
        state.isFormProcessing = false;
        if(action?.payload?.status == 1){
          state.showSuccessStep = true;
        }
        // state.isComplete = true;
      })
      .addCase(createEvent.rejected, (state) => {
        state.isFormProcessing = false;
      })
      .addCase(updateEventsState.fulfilled, (state, action) => {
        state.showSuccessStep = action?.payload;
      })
      .addCase(fetchMemberEvents.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchMemberEvents.fulfilled, (state, action) => {
        state.isFetching = false;
        if (action?.payload?.status) {
          state.events = action?.payload?.events
          state.draftEvents= action?.payload?.draftEvents
          state.memberRow = action?.payload?.member
          state.data = action?.payload
          state.type = action?.payload?.type
          state.pagination= action?.payload?.pagination

        }
      })
      .addCase(fetchMemberEvents.rejected, (state, action) => {
        state.isFetching = false;
        state.error = true;
      })
      .addCase(editEvent.pending, (state) => {
        state.isFormProcessing = true;
      })
      .addCase(editEvent.fulfilled, (state, action) => {
        state.isFormProcessing = false;
        if(action?.payload?.status == 1){
          state.showSuccessStep = true;
        }
        // state.isComplete = true;
      })
      .addCase(editEvent.rejected, (state) => {
        state.isFormProcessing = false;
      })
      .addCase(saveAsDraftEvent.pending, (state) => {
        state.isFormProcessing = true;
      })
      .addCase(saveAsDraftEvent.fulfilled, (state, action) => {
        state.isFormProcessing = false;
        if(action?.payload?.status == 1){
          // state.showSuccessStep = true;
        }
        // state.isComplete = true;
      })
      .addCase(saveAsDraftEvent.rejected, (state) => {
        state.isFormProcessing = false;
      })
      .addCase(deleteEvent.pending, (state) => {
        state.isFormProcessing = true;
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        state.isFormProcessing = false;
      })
      .addCase(deleteEvent.rejected, (state) => {
        state.isFormProcessing = false;
      })
      .addCase(fetchFavoriteEvents.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchFavoriteEvents.fulfilled, (state, action) => {
        state.isFetching = false;
        if (action?.payload?.status) {
          state.favorites = action?.payload?.favorites
          state.memberRow = action?.payload?.member
          state.data = action?.payload
          state.pagination= action?.payload?.pagination

        }
      })
      .addCase(fetchFavoriteEvents.rejected, (state, action) => {
        state.isFetching = false;
        state.error = true;
      })
      .addCase(fetchAttendingEvents.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchAttendingEvents.fulfilled, (state, action) => {
        state.isFetching = false;
        if (action?.payload?.status) {
          state.attending = action?.payload?.attending
          state.memberRow = action?.payload?.member
          state.data = action?.payload
          state.pagination= action?.payload?.pagination

        }
      })
      .addCase(fetchAttendingEvents.rejected, (state, action) => {
        state.isFetching = false;
        state.error = true;
      })
      .addCase(fetchInterestedEvents.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchInterestedEvents.fulfilled, (state, action) => {
        state.isFetching = false;
        if (action?.payload?.status) {
          state.interested = action?.payload?.interested
          state.memberRow = action?.payload?.member
          state.data = action?.payload
          state.pagination= action?.payload?.pagination

        }
      })
      .addCase(fetchInterestedEvents.rejected, (state, action) => {
        state.isFetching = false;
        state.error = true;
      })
      .addCase(fetchDashboardEvents.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchDashboardEvents.fulfilled, (state, action) => {
        state.isFetching = false;
        if (action?.payload?.status) {
          state.interested = action?.payload?.interested
          state.memberRow = action?.payload?.member
          state.data = action?.payload
          state.myEvents = action?.payload?.myEvents
          state.upcomingEvents = action?.payload?.upcomingEvents
          state.curatedEvents = action?.payload?.curatedEvents
          state.currentEvents = action?.payload?.currentEvents
        }
      })
      .addCase(fetchDashboardEvents.rejected, (state, action) => {
        state.isFetching = false;
        state.error = true;
      })
  },
});

export default eventSlice.reducer;
