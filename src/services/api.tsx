import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import Job from '../interfaces';

// axios.defaults.baseURL = "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";
const baseURL = "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";


export const allJobs = createAsyncThunk<Job[], undefined, {rejectValue: any}>(
  "jobs",
  async function (_, { rejectWithValue }) {
    
      // const jobs = await axios.get("/");
      const response = await fetch(`${baseURL}`);

      if (!response.ok) {
        return rejectWithValue('Server Error!');
      }
      const jobs = await response.json();
      return jobs;
  }
);