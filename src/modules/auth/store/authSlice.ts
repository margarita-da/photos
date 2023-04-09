import { createSlice } from "@reduxjs/toolkit";

import { registration, login } from "./actions";
import { AuthState } from "../models/interfaces/authState";

export const initialState: Readonly<AuthState> = {
	currentUser: undefined,
	isLoading: false,
	errors: null,
	isLoaded: false
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: (builder) => {

		builder.addCase(registration.pending, (state,) => {
			state.isLoading = true;
		});
		builder.addCase(registration.fulfilled, (state,) => {
			state.isLoading = false;
			state.isLoaded = true;
		});
		builder.addCase(registration.rejected, (state, payload: any) => {
			state.isLoading = false;
			state.errors = { name: 'email', message: payload.payload.body.detail, }
		});

		builder.addCase(login.pending, (state,) => {
			state.isLoading = true;
		});
		builder.addCase(login.fulfilled, (state, { payload }) => {
			state.currentUser = payload
			state.isLoading = false;
			state.isLoaded = true;
			state.errors = null;
		});

		builder.addCase(login.rejected, (state, payload: any) => {
			state.isLoading = false;
			state.errors = { name: 'auth', message: payload.payload.body.detail, }
		});
	},
});
export default authSlice.reducer;