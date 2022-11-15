import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
import { allJobs } from "../services/api";
import { toast } from "react-toastify";
import  Job from "../interfaces";

interface JobsState {
    jobs: Job[],
    jobDetails: Job,
    error: any,
    loading: boolean
};

const initialState: JobsState = {
    jobs: [],
    jobDetails: null,
    error: null,
    loading: false
}

const jobsSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        addDetails: (state, action: PayloadAction<string>) => {
            const index: number = state.jobs.findIndex((elem: Job) => elem.id === action.payload);
            state.jobDetails = state.jobs[index]
        }
    },
    extraReducers: builder => {
        builder.addCase(allJobs.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(allJobs.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.jobs = payload;
        });
        builder.addCase(allJobs.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
            if (payload) {
                toast.error("Fatal error");
            }
        });
    }
});

const reducer = jobsSlice.reducer;
export const { addDetails } = jobsSlice.actions;
export default reducer;