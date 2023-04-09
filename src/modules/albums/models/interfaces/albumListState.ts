import { AlbumResponseModel } from "./albumResponseModel";
import { AlbumResponseModelPaginatedList } from "./albumResponsePadinatedList";

export interface AlbumListState {
	listAlbum: AlbumResponseModelPaginatedList[] | null;
	items?: Array<AlbumResponseModel> | null;
	isLoading: boolean;
	errors: null | { name: string, message: string }
}