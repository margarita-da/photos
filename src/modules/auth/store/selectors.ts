import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "core/store/setupStore";

export const getInputErrors = createSelector(
	(state: RootState) => state.auth.errors,
	(errors): { name: string, message: string } | null => {
		return errors
	}
);

export const getIsLoading = createSelector(
	(state: RootState) => state.auth.isLoading,
	(isLoading: boolean) => isLoading
);

export const getCurrentUser = createSelector(
	(state: RootState) => state.auth.currentUser,
	(currentUser) => currentUser
);