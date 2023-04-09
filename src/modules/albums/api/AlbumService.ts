import api from "core/http/axios";

export class AlbumService {
	static async getListAlbums(params: any) {
		return api.get(`/photos?_limit=${params.pageSize}&_start=${params.pageNumber}`);

	}
}