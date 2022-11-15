const getAllJobs = (state) => state.jobs;
const getDetails = (state) => state.jobDetails;
const getError = (state) => state.error;
const getLoading = (state) => state.loading;

const allSelectors = {
    getAllJobs,
    getDetails,
    getError,
    getLoading
}

export default allSelectors;