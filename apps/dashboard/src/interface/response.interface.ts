export interface IResponse<T> {
    count: number
    success: boolean
    data: T
    statusCode: number
    statusText: string
}
