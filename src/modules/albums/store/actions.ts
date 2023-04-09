import { createAsyncThunk } from "@reduxjs/toolkit";

import { AlbumService } from "../api";

export const getListAlbums = createAsyncThunk<any, any>(
	"album/list",
	async (params, { rejectWithValue }) => {
		try {
			const response = await AlbumService.getListAlbums(params);
			return response;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

