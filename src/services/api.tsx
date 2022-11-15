import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";

type Job = {
    id: string,
    name: string,
    email: string,
    phone: number,
    title: string,
    salary: string,
    address: string,
    benefits: string[],
    location: {
        lat: number,
        long: number
    },
    pictures: string[],
    createdAt?: string,
    updatedAt?: string,
    description: string,
    employment_type: string[]
}

export const allJobs = createAsyncThunk<
  Job[],
  void
  >(
  "jobs",
  async (_, { rejectWithValue }) => {
    try {
      const jobs = await axios.get("/api/transactions");
      return jobs;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);