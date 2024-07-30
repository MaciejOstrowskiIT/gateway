export interface IRequestHandlerInterface {
    api: string
    post<T>(endpoint: string, data: T): Promise<void>
    // get<T, ResponseData>(emdpoint: string): Promise<ResponseData> zastanowic sie czy zwracac Promise<void> czy Promise od ResponseData
}