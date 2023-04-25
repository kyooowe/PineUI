interface IResponse {
	success: boolean;
	count?: number;

	// eslint-disable-next-line
	data: any | null;
	statusCode: number;
	message?: string;
}

export type { IResponse };
