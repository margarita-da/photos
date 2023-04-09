import { AxiosResponse } from "axios";
import api from "core/http/axios";

import { CreateExecutorCommand, LoginCommand } from "../models/types";

export class AuthService {
	static async login(
		params: LoginCommand
	): Promise<AxiosResponse<LoginCommand>> {
		return api.post<LoginCommand>("auth/login", params);
	}

	static async registration(
		params: CreateExecutorCommand
	): Promise<AxiosResponse<CreateExecutorCommand>> {
		return api.post<CreateExecutorCommand>("auth/register", params);
	}

	static async logout(): Promise<void> {
		return api.post("auth/logout");
	}

}