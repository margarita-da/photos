import { AuthResponse } from "./authResponse";

export interface AuthState {
  currentUser?: AuthResponse;
  isLoading: boolean;
  isLoaded: boolean;
  errors: null | { name: string, message: string }
}
