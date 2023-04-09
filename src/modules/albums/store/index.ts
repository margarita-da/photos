import * as listSlices from "./albumListSlice";
import * as actions from "./actions";

export const reducers = {
	albumList: listSlices.albumListSlice.reducer,
};

export { actions };