import { createSlice } from "@reduxjs/toolkit";
import { allJobs } from "../services/api";
import { toast } from "react-toastify";

const initialState = {
    jobs: [],
    jobDetails: null,
    error: null,
    loading: false
}

const jobsSlice = createSlice({
    name: "jobs",
    initialState,
    extraReducers: {
        [allJobs.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [allJobs.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.jobs = payload;
        },
        [allJobs.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
            if (payload) {
                toast.error("Fatal error");
            }
        },
  }
});

const reducer = jobsSlice.reducer;

export default reducer;