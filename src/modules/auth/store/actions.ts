import { createAsyncThunk } from "@reduxjs/toolkit";

// import { TokenProvider } from "utils/TokenProvider";
import { CreateExecutorCommand, LoginCommand } from "../models/types";
import { AuthService } from "../api";

export const login = createAsyncThunk<any, LoginCommand>(
	"auth/login",
	async (params, { rejectWithValue }) => {
		try {
			const response = await AuthService.login(params);
			// if (response.token) TokenProvider.set(response.token);
			return response;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const registration = createAsyncThunk<any, CreateExecutorCommand>(
	"auth/registration",
	async (params, { rejectWithValue }) => {
		try {
			const response = await AuthService.registration(params);
			return response;
		} catch (error) {
			return rejectWithValue(error);
		}
	},

);

