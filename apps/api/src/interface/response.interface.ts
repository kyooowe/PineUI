interface IResponse {
	success: boolean;

	// eslint-disable-next-line
	data: any | null;
	statusCode: number;
	message?: string;
}

export type { IResponse };
