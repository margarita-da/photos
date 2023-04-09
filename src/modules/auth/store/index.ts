import * as slices from "./authSlice";
import * as actions from "./actions";

export const reducers = {
	auth: slices.authSlice.reducer,
};

export { actions };