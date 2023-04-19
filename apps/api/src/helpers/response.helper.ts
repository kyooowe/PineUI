import { IResponse } from "../interface/response.interface";

const StatusCodeChecker = (statusCode: number) => {
	if (statusCode === 200) return "Success!";
	if (statusCode === 400) return "Bad Request!";
	if (statusCode === 401) return "Please authenticate";
	if (statusCode === 404) return "Not Found!";
	if (statusCode === 409) return "Data already exists";
	if (statusCode === 500)
		return "Something error occured, please contact administrator!";
};

// For multiple data response
const ApiResponse = ({ success, data, statusCode, message }: IResponse) => {
	return {
		count: data === null || data === undefined ? 0 : data.length,
		success: success,
		data: data,
		statusCode: statusCode,
		statusText: message === undefined ? StatusCodeChecker(statusCode) : message
	};
};

// For single data response
const SingleApiResponse = ({ success, data, statusCode, message }: IResponse) => {
	return {
		count: data === null || data === undefined ? 0 : 1,
		success: success,
		data: data,
		statusCode: statusCode,
		statusText: message === undefined ? StatusCodeChecker(statusCode) : message
	};
};

export { SingleApiResponse, ApiResponse };
