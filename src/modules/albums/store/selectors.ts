import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "core/store/setupStore";

import { AlbumResponseModelPaginatedList } from "../models/interfaces";

export const getListAlbum = createSelector(
	(state: RootState) => state.albumList.listAlbum,
	(listAlbum): AlbumResponseModelPaginatedList[] | null => {
		return listAlbum
	});

