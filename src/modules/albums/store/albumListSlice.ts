import { createSlice } from "@reduxjs/toolkit";


import { getListAlbums } from "./actions";
import { AlbumListState } from "../models/interfaces";

export const initialState: Readonly<AlbumListState> = {
	listAlbum: null,
	items: null,
	isLoading: false,
	errors: null,
};

export const albumListSlice = createSlice({
	name: "album/list",
	initialState,
	reducers: {},
	extraReducers: (builder) => {

		builder.addCase(getListAlbums.pending, (state,) => {
			state.isLoading = true;
		});
		builder.addCase(getListAlbums.fulfilled, (state, payload: any) => {
			state.listAlbum = payload.payload.data;
			state.isLoading = false;
		});
		builder.addCase(getListAlbums.rejected, (state, payload: any) => {
			state.isLoading = false;
			// state.errors = { name: 'email', message: payload.payload.body.detail, }
		});

	},
});
export default albumListSlice.reducer;